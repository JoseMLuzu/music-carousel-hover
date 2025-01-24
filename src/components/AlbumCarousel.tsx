import { useState } from 'react';
import { Album } from './Album';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AlbumData {
  id: number;
  image: string;
  title: string;
}

const albums: AlbumData[] = [
  {
    id: 1,
    image: "/lovable-uploads/55bbeabf-07dc-4cd8-9901-c2dac23d1927.png",
    title: "Utopia Album"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Album 2"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Album 3"
  }
];

export function AlbumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % albums.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + albums.length) % albums.length);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 z-10 text-white hover:bg-white/10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <div className="flex items-center justify-center gap-8">
        {albums.map((album, index) => {
          let position = index - currentIndex;
          if (position < 0) position += albums.length;
          
          return (
            <div
              key={album.id}
              className={cn(
                "carousel-item transition-all duration-500",
                {
                  "prev": position === albums.length - 1,
                  "next": position === 1,
                  "opacity-0 scale-75": position > 1 && position < albums.length - 1,
                }
              )}
            >
              <Album
                image={album.image}
                title={album.title}
                className={position === 0 ? "z-10" : ""}
              />
            </div>
          );
        })}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 z-10 text-white hover:bg-white/10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
}