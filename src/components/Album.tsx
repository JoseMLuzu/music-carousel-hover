import { useState, useRef, MouseEvent, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

interface AlbumProps {
  image: string;
  title: string;
  audioUrl: string;
  className?: string;
  onPlay: () => void;
}

export function Album({
  image,
  title,
  audioUrl,
  className,
  onPlay,
}: AlbumProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const albumRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!albumRef.current) return;

    const rect = albumRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        onPlay(); // Notificar al padre que esta canción comenzará a reproducirse
        audioRef.current.play().catch((err) => {
          console.error("Error playing audio:", err);
          setError("Could not play audio preview");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  const stopPlaying = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      stopPlaying();
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>

      <div
        ref={albumRef}
        className={cn("album-container w-[500px] h-[500px] mx-auto", className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full max-w-[500px] bg-black/40 backdrop-blur-sm p-4 rounded-xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>

            <div className="flex-1 space-y-2">
              <Progress value={progress} className="h-1" />
              <div className="flex justify-between text-sm text-gray-400">
                <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <audio ref={audioRef} src={audioUrl} preload="metadata" />
      </div>
    </div>
  );
}
