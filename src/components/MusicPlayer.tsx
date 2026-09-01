import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const videoId = "bs7u95QlCxs";
const youtubeOrigin = "https://www.youtube-nocookie.com";

type YouTubeCommand = "mute" | "playVideo" | "setVolume" | "unMute";

export type MusicPlayerHandle = {
  play: () => void;
};

type MusicPlayerProps = {
  visible: boolean;
};

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
  );
}

const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(
  function MusicPlayer({ visible }, ref) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const playRequestedRef = useRef(false);
    const [isMuted, setIsMuted] = useState(false);

    const sendCommand = (command: YouTubeCommand, args: number[] = []) => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: command,
          args,
        }),
        youtubeOrigin,
      );
    };

    const startMusic = () => {
      playRequestedRef.current = true;
      setIsMuted(false);
      sendCommand("setVolume", [48]);
      sendCommand("unMute");
      sendCommand("playVideo");
    };

    useImperativeHandle(ref, () => ({ play: startMusic }));

    const handlePlayerLoad = () => {
      if (!playRequestedRef.current) return;

      sendCommand("setVolume", [48]);
      sendCommand("unMute");
      sendCommand("playVideo");
    };

    const toggleMute = () => {
      const nextMuted = !isMuted;

      setIsMuted(nextMuted);
      sendCommand(nextMuted ? "mute" : "unMute");

      if (!nextMuted) sendCommand("playVideo");
    };

    return (
      <>
        <iframe
          ref={iframeRef}
          className="music-player-frame"
          src={`${youtubeOrigin}/embed/${videoId}?enablejsapi=1&controls=0&disablekb=1&playsinline=1&loop=1&playlist=${videoId}&rel=0`}
          title="Mãi mãi bên nhau - Noo Phước Thịnh"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          aria-hidden="true"
          tabIndex={-1}
          onLoad={handlePlayerLoad}
        />
        {visible && (
          <button
            className="music-control"
            type="button"
            aria-label={
              isMuted
                ? "Bật âm thanh bài Mãi mãi bên nhau"
                : "Tắt âm thanh bài Mãi mãi bên nhau"
            }
            aria-pressed={isMuted}
            onClick={toggleMute}
          >
            <SoundIcon muted={isMuted} />
          </button>
        )}
      </>
    );
  },
);

export default MusicPlayer;
