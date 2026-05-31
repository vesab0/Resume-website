export const config = { runtime: 'edge' }

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!

async function getAccessToken(): Promise<string> {
  const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${creds}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  })
  const data = await res.json() as { access_token: string }
  return data.access_token
}

export default async function handler(): Promise<Response> {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return new Response(JSON.stringify({ error: 'Missing env vars' }), { status: 500 })
  }

  const token = await getAccessToken()
  const spotify = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: { Authorization: `Bearer ${token}` },
  })

  if (spotify.status === 204) return new Response(null, { status: 204 })
  if (!spotify.ok) return new Response(null, { status: spotify.status })

  const data = await spotify.json() as {
    is_playing: boolean
    progress_ms: number
    item: {
      name: string
      duration_ms: number
      artists: { name: string }[]
      album: { images: { url: string }[] }
    }
  }

  if (!data?.item) return new Response(null, { status: 204 })

  return new Response(JSON.stringify({
    isPlaying: data.is_playing,
    trackName: data.item.name,
    artist: data.item.artists.map(a => a.name).join(', '),
    albumArt: data.item.album.images[0]?.url ?? '',
    progressMs: data.progress_ms,
    durationMs: data.item.duration_ms,
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 's-maxage=30',
    },
  })
}
