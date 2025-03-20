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
    title: "I do",
    thumbnail:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000",
    videoUrl: "https://example.com/video1.mp4",
  },
  {
    id: 2,
    title: "NIGHT CITY",
    thumbnail:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000",
    videoUrl: "https://example.com/video2.mp4",
  },
  {
    id: 3,
    title: "NEON DREAMS",
    thumbnail:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
    videoUrl: "https://example.com/video3.mp4",
  },
  {
    id: 4,
    title: "FUTURE VISION",
    thumbnail:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000",
    videoUrl: "https://example.com/video4.mp4",
  },
  {
    id: 5,
    title: "LUNAR ECLIPSE",
    thumbnail:
      "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=1000",
    videoUrl: "https://example.com/video5.mp4",
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
      <div className="flex items-center justify-center mb-8">
        <Film className="w-8 h-8 mr-3" />
        <h1 className="text-4xl font-bold">Film Collection</h1>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore our cinematic universe through visual storytelling and
          immersive film experiences. Each film is a journey into a unique world
          of creativity and expression.
        </p>
      </div>

      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 z-30 text-white hover:bg-white/10"
          onClick={prevFilm}
        >
          <ChevronLeft className="h-8 w-8" />
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
              <div className="relative w-[640px] h-[360px] bg-black rounded-lg overflow-hidden shadow-2xl">
                {isPlaying && index === currentIndex ? (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls={false}
                    poster={film.thumbnail}
                  >
                    <source src={film.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <h2 className="text-2xl font-bold">{film.title}</h2>
                </div>

                {index === currentIndex && (
                  <motion.button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                  >
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </motion.button>
                )}
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
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default FilmPage;
