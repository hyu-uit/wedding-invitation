import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

const musicSource = '/audio/mai-mai-ben-nhau.mp3'

type PlaybackState = 'idle' | 'loading' | 'playing' | 'paused' | 'error'

export type MusicPlayerHandle = {
  play: () => void
}

type MusicPlayerProps = {
  visible: boolean
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

const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(
  function MusicPlayer({ visible }, ref) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isMuted, setIsMuted] = useState(false)
    const [playbackState, setPlaybackState] =
      useState<PlaybackState>('idle')

    const playMusic = () => {
      const audio = audioRef.current
      if (!audio) return

      audio.volume = 0.48
      audio.muted = false
      setIsMuted(false)
      setPlaybackState('loading')

      void audio.play().catch(() => setPlaybackState('error'))
    }

    useImperativeHandle(ref, () => ({ play: playMusic }))

    const handleControlClick = () => {
      const audio = audioRef.current
      if (!audio) return

      if (audio.paused || playbackState === 'error') {
        playMusic()
        return
      }

      const nextMuted = !audio.muted
      audio.muted = nextMuted
      setIsMuted(nextMuted)
    }

    const controlLabel =
      playbackState === 'error'
        ? 'Thử phát lại bài Mãi mãi bên nhau'
        : isMuted
          ? 'Bật âm thanh bài Mãi mãi bên nhau'
          : 'Tắt âm thanh bài Mãi mãi bên nhau'

    return (
      <>
        <audio
          ref={audioRef}
          src={musicSource}
          preload="auto"
          loop
          onPlay={() => setPlaybackState('playing')}
          onPlaying={() => setPlaybackState('playing')}
          onPause={() => setPlaybackState('paused')}
          onWaiting={() => setPlaybackState('loading')}
          onError={() => setPlaybackState('error')}
        />
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
