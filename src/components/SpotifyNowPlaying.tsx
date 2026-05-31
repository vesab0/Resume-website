import { useState, useEffect, useRef } from 'react'

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID ?? ''
const SCOPE = 'user-read-currently-playing user-read-playback-state'

const TOKEN_KEY = 'sp_access_token'
const REFRESH_KEY = 'sp_refresh_token'
const EXPIRY_KEY = 'sp_token_expiry'
const VERIFIER_KEY = 'sp_code_verifier'

function getRedirectUri() {
  const origin = window.location.origin.replace('localhost', '127.0.0.1')
  return `${origin}/hobbies`
}

function generateVerifier() {
  const arr = new Uint8Array(48)
  crypto.getRandomValues(arr)
  return btoa(String.fromCharCode(...arr))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
    .slice(0, 64)
}

async function generateChallenge(verifier: string) {
  const data = new TextEncoder().encode(verifier)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

async function startLogin() {
  const verifier = generateVerifier()
  const challenge = await generateChallenge(verifier)
  localStorage.setItem(VERIFIER_KEY, verifier)

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: getRedirectUri(),
    scope: SCOPE,
    code_challenge_method: 'S256',
    code_challenge: challenge,
  })

  window.location.href = `https://accounts.spotify.com/authorize?${params}`
}

async function exchangeCode(code: string): Promise<boolean> {
  const verifier = localStorage.getItem(VERIFIER_KEY)
  if (!verifier) return false

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: 'authorization_code',
      code,
      redirect_uri: getRedirectUri(),
      code_verifier: verifier,
    }),
  })

  if (!res.ok) return false
  saveTokens(await res.json())
  localStorage.removeItem(VERIFIER_KEY)
  return true
}

async function doRefresh(): Promise<boolean> {
  const refreshToken = localStorage.getItem(REFRESH_KEY)
  if (!refreshToken) return false

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  if (!res.ok) return false
  saveTokens(await res.json())
  return true
}

function saveTokens(data: { access_token: string; refresh_token?: string; expires_in: number }) {
  localStorage.setItem(TOKEN_KEY, data.access_token)
  if (data.refresh_token) localStorage.setItem(REFRESH_KEY, data.refresh_token)
  localStorage.setItem(EXPIRY_KEY, String(Date.now() + data.expires_in * 1000))
}

function getAccessToken(): string | null {
  const token = localStorage.getItem(TOKEN_KEY)
  const expiry = Number(localStorage.getItem(EXPIRY_KEY) ?? 0)
  if (!token || Date.now() > expiry - 60_000) return null
  return token
}

interface NowPlaying {
  isPlaying: boolean
  trackName: string
  artist: string
  albumArt: string
  progressMs: number
  durationMs: number
}

export default function SpotifyNowPlaying() {
  const [authed, setAuthed] = useState(false)
  const [track, setTrack] = useState<NowPlaying | null>(null)
  const [progress, setProgress] = useState(0)
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    if (code) {
      window.history.replaceState({}, '', window.location.pathname)
      exchangeCode(code).then(ok => setAuthed(ok))
      return
    }
    if (getAccessToken() || localStorage.getItem(REFRESH_KEY)) {
      setAuthed(true)
    }
  }, [])

  useEffect(() => {
    if (!authed) return

    const fetchTrack = async () => {
      let token = getAccessToken()
      if (!token) {
        const ok = await doRefresh()
        if (!ok) { setAuthed(false); return }
        token = getAccessToken()
        if (!token) return
      }

      const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (res.status === 204 || res.status === 404) { setTrack(null); return }
      if (!res.ok) return

      const data = await res.json()
      if (!data?.item) { setTrack(null); return }

      setTrack({
        isPlaying: data.is_playing,
        trackName: data.item.name,
        artist: data.item.artists.map((a: { name: string }) => a.name).join(', '),
        albumArt: data.item.album.images[0]?.url ?? '',
        progressMs: data.progress_ms,
        durationMs: data.item.duration_ms,
      })
      setProgress(data.progress_ms)
    }

    fetchTrack()
    const id = setInterval(fetchTrack, 30_000)
    return () => clearInterval(id)
  }, [authed])

  useEffect(() => {
    if (tickRef.current) clearInterval(tickRef.current)
    if (!track?.isPlaying) return
    const dur = track.durationMs
    tickRef.current = setInterval(() => {
      setProgress(p => Math.min(p + 1000, dur))
    }, 1000)
    return () => { if (tickRef.current) clearInterval(tickRef.current) }
  }, [track])

  if (!CLIENT_ID) return null

  if (!authed) {
    return (
      <button
        onClick={startLogin}
        className="mt-6 text-xs tracking-widest text-zinc-600 hover:text-zinc-300 transition-colors uppercase"
      >
        connect spotify
      </button>
    )
  }

  return (
    <div className="mt-8 lg:mt-15">
      <p className="mb-8 text-sm font-light tracking-wide text-zinc-400 lg:text-base">
        {track?.isPlaying ? 'Listening to:' : 'Not playing'}
      </p>
      {track ? (
        <div className="flex mt-10 items-end gap-5 lg:gap-6">
          {track.albumArt && (
            <img
              src={track.albumArt}
              alt="album art"
              className="h-32 w-32 flex-shrink-0 object-cover lg:h-40 lg:w-40"
            />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate lg:text-lg">{track.trackName}</p>
            <p className="mb-3 pb-3 text-xs font-light text-zinc-400 truncate lg:text-sm">{track.artist}</p>
            <div className="h-px w-full bg-zinc-800">
              <div
                className="h-full bg-white transition-[width] duration-1000 ease-linear"
                style={{ width: `${(progress / track.durationMs) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-zinc-700">—</p>
      )}
    </div>
  )
}
