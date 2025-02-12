
import { useState } from "react";
import { Album } from "./Album";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlbumData {
  id: number;
  image: string;
  title: string;
  songTitle: string;
  audioUrl?: string;
}

const albums: AlbumData[] = [
  {
    id: 1,
    image: "src/assets/albun/albun1.jpeg",
    title: "Utopia Album",
    songTitle: "HYAENA",
    audioUrl: "", // Aquí irá la URL del demo de audio
  },
  {
    id: 2,
    image: "src/assets/albun/albun2.jpeg",
    title: "Utopia Album 2",
    songTitle: "THANK GOD",
    audioUrl: "",
  },
  {
    id: 3,
    image: "src/assets/albun/albun3.jpeg",
    title: "Utopia Album 3",
    songTitle: "MODERN JAM",
    audioUrl: "",
  },
  {
    id: 4,
    image: "src/assets/albun/albun4.png",
    title: "Utopia Album 4",
    songTitle: "MY EYES",
    audioUrl: "",
  },
  {
    id: 5,
    image: "src/assets/albun/albun5.JPEG",
    title: "Utopia Album 5",
    songTitle: "LOOOVE",
    audioUrl: "",
  },
  {
    id: 6,
    image: "src/assets/albun/albun6.JPEG",
    title: "Utopia Album 6",
    songTitle: "SIRENS",
    audioUrl: "",
  },
];

export function AlbumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              songTitle={album.songTitle}
              audioUrl={album.audioUrl}
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
