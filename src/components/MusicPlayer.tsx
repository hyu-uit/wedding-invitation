import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

const videoId = 'bs7u95QlCxs'
const youtubeOrigin = 'https://www.youtube-nocookie.com'

type PlaybackState = 'loading' | 'playing' | 'paused' | 'error'

type YouTubePlayer = {
  destroy: () => void
  getIframe: () => HTMLIFrameElement
  getPlayerState: () => number
  mute: () => void
  playVideo: () => void
  setVolume: (volume: number) => void
  unMute: () => void
}

type YouTubePlayerEvent = {
  target: YouTubePlayer
}

type YouTubePlayerStateEvent = YouTubePlayerEvent & {
  data: number
}

type YouTubePlayerOptions = {
  height: string
  width: string
  videoId: string
  host: string
  playerVars: Record<string, number | string>
  events: {
    onReady: (event: YouTubePlayerEvent) => void
    onStateChange: (event: YouTubePlayerStateEvent) => void
    onAutoplayBlocked: () => void
    onError: () => void
  }
}

type YouTubeApi = {
  Player: new (
    element: HTMLElement,
    options: YouTubePlayerOptions,
  ) => YouTubePlayer
  PlayerState: {
    ENDED: number
    PLAYING: number
    PAUSED: number
    CUED: number
  }
}

declare global {
  interface Window {
    YT?: YouTubeApi
    onYouTubeIframeAPIReady?: () => void
  }
}

let youtubeApiPromise: Promise<YouTubeApi> | null = null

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (youtubeApiPromise) return youtubeApiPromise

  youtubeApiPromise = new Promise<YouTubeApi>((resolve, reject) => {
    const previousReadyCallback = window.onYouTubeIframeAPIReady

    window.onYouTubeIframeAPIReady = () => {
      previousReadyCallback?.()

      if (window.YT?.Player) {
        resolve(window.YT)
      } else {
        reject(new Error('YouTube Player API không khởi tạo được'))
      }
    }

    if (document.querySelector('script[data-youtube-player-api]')) return

    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    script.dataset.youtubePlayerApi = 'true'
    script.addEventListener('error', () => {
      youtubeApiPromise = null
      reject(new Error('Không tải được YouTube Player API'))
    })
    document.head.append(script)
  })

  return youtubeApiPromise
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg className="music-control-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 9.25h3.25l4.1-3.35v12.2l-4.1-3.35H4.5z" />
      {muted ? (
        <>
          <path d="m15.7 9 4.3 4.3" />
          <path d="m20 9-4.3 4.3" />
        </>
      ) : (
        <>
          <path d="M15.5 9.15a4.1 4.1 0 0 1 0 5.7" />
          <path d="M18.1 6.9a7.3 7.3 0 0 1 0 10.2" />
        </>
      )}
    </svg>
  )
}

export type MusicPlayerHandle = {
  play: () => void
}

type MusicPlayerProps = {
  visible: boolean
}

const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(
  function MusicPlayer({ visible }, ref) {
    const playerHostRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<YouTubePlayer>(null)
    const playerReadyRef = useRef(false)
    const playRequestedRef = useRef(false)
    const [isMuted, setIsMuted] = useState(true)
    const [playbackState, setPlaybackState] =
      useState<PlaybackState>('loading')

    const playAudibly = (player = playerRef.current) => {
      if (!player) return

      player.setVolume(48)
      player.unMute()
      player.playVideo()
      setIsMuted(false)
      setPlaybackState(player.getPlayerState() === 1 ? 'playing' : 'loading')
    }

    const startMusic = () => {
      playRequestedRef.current = true

      if (playerReadyRef.current) playAudibly()
    }

    useImperativeHandle(ref, () => ({ play: startMusic }))

    useEffect(() => {
      let cancelled = false

      loadYouTubeApi()
        .then((youtube) => {
          if (cancelled || !playerHostRef.current) return

          const player = new youtube.Player(playerHostRef.current, {
            width: '200',
            height: '200',
            videoId,
            host: youtubeOrigin,
            playerVars: {
              autoplay: 1,
              controls: 0,
              disablekb: 1,
              loop: 1,
              origin: window.location.origin,
              playlist: videoId,
              playsinline: 1,
              rel: 0,
            },
            events: {
              onReady: (event) => {
                playerRef.current = event.target
                playerReadyRef.current = true

                const iframe = event.target.getIframe()
                iframe.title = 'Mãi mãi bên nhau - Noo Phước Thịnh'
                iframe.tabIndex = -1
                iframe.setAttribute('aria-hidden', 'true')
                iframe.referrerPolicy = 'strict-origin-when-cross-origin'

                event.target.setVolume(48)

                if (playRequestedRef.current) {
                  playAudibly(event.target)
                } else {
                  event.target.mute()
                  event.target.playVideo()
                  setIsMuted(true)
                }
              },
              onStateChange: (event) => {
                if (event.data === youtube.PlayerState.PLAYING) {
                  setPlaybackState('playing')
                  return
                }

                if (
                  event.data === youtube.PlayerState.PAUSED ||
                  event.data === youtube.PlayerState.ENDED ||
                  event.data === youtube.PlayerState.CUED
                ) {
                  setPlaybackState('paused')
                }
              },
              onAutoplayBlocked: () => setPlaybackState('paused'),
              onError: () => setPlaybackState('error'),
            },
          })

          playerRef.current = player
        })
        .catch(() => {
          if (!cancelled) setPlaybackState('error')
        })

      return () => {
        cancelled = true
        playerReadyRef.current = false
        playerRef.current?.destroy()
        playerRef.current = null
      }
    }, [])

    const handleControlClick = () => {
      if (playbackState !== 'playing' || isMuted) {
        playAudibly()
        return
      }

      playerRef.current?.mute()
      setIsMuted(true)
    }

    const controlLabel =
      playbackState === 'error'
        ? 'Thử phát lại bài Mãi mãi bên nhau'
        : isMuted
          ? 'Bật âm thanh bài Mãi mãi bên nhau'
          : 'Tắt âm thanh bài Mãi mãi bên nhau'

    return (
      <>
        <div className="music-player-frame" aria-hidden="true">
          <div ref={playerHostRef} />
        </div>
        {visible && (
          <button
            className="music-control"
            type="button"
            aria-label={controlLabel}
            aria-pressed={isMuted}
            data-playback-state={playbackState}
            onClick={handleControlClick}
          >
            <SoundIcon muted={isMuted} />
          </button>
        )}
      </>
    )
  },
)

export default MusicPlayer
