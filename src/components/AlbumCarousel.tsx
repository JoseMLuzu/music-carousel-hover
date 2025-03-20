import { useState } from "react";
import { Album } from "./Album";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlbumData {
  id: number;
  image: string;
  title: string;
  audioUrl: string;
}

const albums: AlbumData[] = [
  {
    id: 1,
    image: "photos-music/DBC6FCB8-9DE9-4031-B166-254E63CA3FF5(1).jpeg",
    title: "BIRDS DONT SING THEY SCREECH IN PAIN",
    audioUrl: "music/BIRDS DONT SING THEY SCREECH IN PAIN (mp3cut.net).wav",
  },
  {
    id: 2,
    image: "photos-music/Screenshot 2024-03-31 at 11.06.23 PM 2(1).JPEG",
    title: "ELZAHARA",
    audioUrl: "music/ELZAHARA (mp3cut.net).wav",
  },
  {
    id: 3,
    image: "photos-music/704EB2C4-267A-46AF-BBAB-1FCB6D6B1EC8(1).jpeg",
    title: "FASHION KILLER",
    audioUrl: "music/FASHION KILLER (mp3cut.net).wav",
  },
  {
    id: 4,
    image: "photos-music/Screenshot 2024-03-31 at 11.02.27 PM 2(1).JPEG",
    title: "OBSCENE",
    audioUrl: "music/OBSCENE (mp3cut.net).wav",
  },
  {
    id: 5,
    image: "photos-music/DF313B17-E5DF-4730-99B6-EABE92A6B12F.jpeg",
    title: "RED DUSK",
    audioUrl: "music/RED DUSK (mp3cut.net).wav",
  },
  {
    id: 6,
    image: "photos-music/5571(1).jpeg",
    title: "SWIMMING POOLS",
    audioUrl: "music/SWIMMING POOLS (mp3cut.net).wav",
  },
];

export function AlbumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<number | null>(
    null
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % albums.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + albums.length) % albums.length);
  };

  const getPositionClass = (index: number) => {
    const position = (index - currentIndex + albums.length) % albums.length;

    if (position === 0) return "z-20 scale-100 opacity-100 blur-none";
    if (position === 1 || position === albums.length - 1) {
      return "z-10 scale-75 opacity-50 blur-sm";
    }
    return "opacity-0 scale-50";
  };

  const handlePlay = (albumId: number) => {
    setCurrentlyPlayingId(albumId);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 z-30 text-white hover:bg-white/10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <div className="flex items-center justify-center gap-8">
        {albums.map((album, index) => (
          <div
            key={album.id}
            className={cn(
              "carousel-item absolute transition-all duration-500",
              getPositionClass(index),
              {
                "translate-x-0": index === currentIndex,
                "-translate-x-[120%]":
                  (index - currentIndex + albums.length) % albums.length ===
                  albums.length - 1,
                "translate-x-[120%]":
                  (index - currentIndex + albums.length) % albums.length === 1,
              }
            )}
          >
            <Album
              image={album.image}
              title={album.title}
              audioUrl={album.audioUrl}
              onPlay={() => handlePlay(album.id)}
              key={`${album.id}-${currentlyPlayingId === album.id}`}
            />
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 z-30 text-white hover:bg-white/10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
}
