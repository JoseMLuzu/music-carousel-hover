
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface FashionItem {
  id: number;
  image: string;
  title: string;
}

const fashionItems: FashionItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1000",
    title: "SUMMER COLLECTION",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    title: "WINTER ESSENTIALS",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000",
    title: "URBAN STYLE",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1588117260148-b47818741c74?q=80&w=1000",
    title: "NIGHT GLAMOUR",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000",
    title: "CASUAL WEAR",
  },
];

export function FashionGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % fashionItems.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + fashionItems.length) % fashionItems.length);
  };

  // Auto-scroll effect
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 500 : -500,
      scale: 0.8,
      opacity: 0,
      rotateX: direction > 0 ? 15 : -15,
      zIndex: 0,
    }),
    center: {
      y: 0,
      scale: 1,
      opacity: 1,
      rotateX: 0,
      zIndex: 5,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -500 : 500,
      scale: 0.8,
      opacity: 0,
      rotateX: direction > 0 ? -15 : 15,
      zIndex: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black perspective-1000">
      <div className="absolute top-10 left-0 w-full text-center">
        <h1 className="text-5xl font-bold text-white tracking-wider">
          FASHION
        </h1>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/4 z-30 text-white hover:bg-white/10"
        onClick={prevSlide}
      >
        <ChevronUp className="h-8 w-8" />
      </Button>

      <div className="w-full max-w-5xl h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="relative h-[500px] w-[350px] card-deck-container">
          <AnimatePresence initial={false} custom={direction} mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              className="absolute w-[350px] card-item transform-style-3d"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
                willChange: "transform",
              }}
            >
              <div className="relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={fashionItems[currentIndex].image}
                  alt={fashionItems[currentIndex].title}
                  className="object-cover h-[500px] w-[350px] rounded-md transition-all duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-0 opacity-100 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white">
                    {fashionItems[currentIndex].title}
                  </h2>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-1/4 z-30 text-white hover:bg-white/10"
        onClick={nextSlide}
      >
        <ChevronDown className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-2">
        {fashionItems.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={cn(
              "w-3 h-3 p-0 rounded-full",
              index === currentIndex
                ? "bg-white"
                : "bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
