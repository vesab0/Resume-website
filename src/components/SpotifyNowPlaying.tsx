import { useState, useEffect, useRef } from 'react'

interface NowPlaying {
  isPlaying: boolean
  trackName: string
  artist: string
  albumArt: string
  progressMs: number
  durationMs: number
}

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState<NowPlaying | null>(null)
  const [progress, setProgress] = useState(0)
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const fetchTrack = async () => {
      const res = await fetch('/api/spotify')
      if (res.status === 204) { setTrack(null); return }
      if (!res.ok) return
      const data: NowPlaying = await res.json()
      setTrack(data)
      setProgress(data.progressMs)
    }

    fetchTrack()
    const id = setInterval(fetchTrack, 30_000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (tickRef.current) clearInterval(tickRef.current)
    if (!track?.isPlaying) return
    const dur = track.durationMs
    tickRef.current = setInterval(() => {
      setProgress(p => Math.min(p + 1000, dur))
    }, 1000)
    return () => { if (tickRef.current) clearInterval(tickRef.current) }
  }, [track])

  return (
    <div className="mt-8 lg:mt-15">
      <p className="mb-4 text-sm font-light tracking-wide text-zinc-400 lg:text-base">
        {track?.isPlaying ? 'Listening to:' : 'Not playing'}
      </p>
      {track ? (
        <div className="flex mt-6 items-end gap-5 lg:gap-6">
          {track.albumArt && (
            <img
              src={track.albumArt}
              alt="album art"
              className="h-20 w-20 flex-shrink-0 object-cover sm:h-28 sm:w-28 lg:h-40 lg:w-40"
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
