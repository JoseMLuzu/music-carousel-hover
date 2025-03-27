import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilmItem {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const films: FilmItem[] = [
  {
    id: 1,
    title: "Swing Pols",
    thumbnail: "https://img.youtube.com/vi/TOcoHDHaEUg/0.jpg", // Miniatura válida de YouTube
    videoUrl: "https://www.youtube.com/embed/TOcoHDHaEUg", // URL de YouTube embebida
  },
  {
    id: 2,
    title: "I do",
    thumbnail: "https://img.youtube.com/vi/m3I6_CtqY5Q/0.jpg", // Miniatura válida de YouTube
    videoUrl: "https://www.youtube.com/embed/m3I6_CtqY5Q", // URL de YouTube embebida
  },
  {
    id: 3,
    title: "The Donut Theory",
    thumbnail: "https://img.youtube.com/vi/nNT03jDKqS8/0.jpg", // Miniatura válida de YouTube
    videoUrl: "https://www.youtube.com/embed/nNT03jDKqS8", // URL de YouTube embebida
  },
  {
    id: 4,
    title: "Brutus",
    thumbnail: "https://img.youtube.com/vi/7wJyDup6Rsg/0.jpg", // Miniatura válida de YouTube
    videoUrl: "https://www.youtube.com/embed/7wJyDup6Rsg", // URL de YouTube embebida
  },
];

const FilmPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextFilm = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % films.length);
  };

  const prevFilm = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + films.length) % films.length);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getPositionClass = (index: number) => {
    const position = (index - currentIndex + films.length) % films.length;

    if (position === 0) return "z-20 scale-100 opacity-100 blur-none";
    if (position === 1 || position === films.length - 1) {
      return "z-10 scale-75 opacity-50 blur-sm";
    }
    return "opacity-0 scale-50";
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white pt-28 pb-20">
      <div className="flex items-center justify-center mb-12">
        <Film className="w-8 h-8 mr-3" />
        <h1 className="text-2xl md:text-4xl font-bold mt-4">Film Collection</h1>
      </div>

      {/* Carrusel de videos */}
      <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 z-30 text-white hover:bg-white/10"
          onClick={prevFilm}
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </Button>

        <div className="flex items-center justify-center">
          {films.map((film, index) => (
            <motion.div
              key={film.id}
              className={`carousel-item absolute transition-all duration-500 ${getPositionClass(
                index
              )}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.5,
                scale: index === currentIndex ? 1 : 0.8,
                x: (index - currentIndex) * 100 + "%",
              }}
              transition={{ duration: 0.5 }}
              style={{
                transformOrigin: "center center",
                zIndex: index === currentIndex ? 20 : 10,
              }}
            >
              <div className="relative w-[80%] md:w-[480px] h-[150px] md:h-[270px] bg-black rounded-lg overflow-hidden shadow-2xl">
                {index === currentIndex && film.id === 4 ? (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls
                    poster={film.thumbnail}
                  >
                    <source src="/video/MOVIECLIP_PAC.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : index === currentIndex &&
                  film.videoUrl.includes("youtube") ? (
                  <iframe
                    src={film.videoUrl}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Título debajo del video */}
              <div className="mt-4 text-center">
                <h2 className="text-lg md:text-2xl font-bold">{film.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 z-30 text-white hover:bg-white/10"
          onClick={nextFilm}
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </Button>
      </div>
    </div>
  );
};

export default FilmPage;
