import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function spotifyDevMiddleware(env: Record<string, string>) {
  return {
    name: 'spotify-api',
    configureServer(server: import('vite').ViteDevServer) {
      server.middlewares.use('/api/spotify', async (_req, res) => {
        const clientId = env.SPOTIFY_CLIENT_ID ?? ''
        const clientSecret = env.SPOTIFY_CLIENT_SECRET ?? ''
        const refreshToken = env.SPOTIFY_REFRESH_TOKEN ?? ''

        try {
          const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
            },
            body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refreshToken }),
          })
          const { access_token } = await tokenRes.json() as { access_token: string }

          const spotifyRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: { Authorization: `Bearer ${access_token}` },
          })

          if (spotifyRes.status === 204) { res.writeHead(204); res.end(); return }

          const data = await spotifyRes.json() as {
            is_playing: boolean; progress_ms: number
            item: { name: string; duration_ms: number; artists: { name: string }[]; album: { images: { url: string }[] } }
          }

          if (!data?.item) { res.writeHead(204); res.end(); return }

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({
            isPlaying: data.is_playing,
            trackName: data.item.name,
            artist: data.item.artists.map(a => a.name).join(', '),
            albumArt: data.item.album.images[0]?.url ?? '',
            progressMs: data.progress_ms,
            durationMs: data.item.duration_ms,
          }))
        } catch (e) {
          res.writeHead(500); res.end()
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), spotifyDevMiddleware(env)],
    server: {
      host: '127.0.0.1',
    },
  }
})
