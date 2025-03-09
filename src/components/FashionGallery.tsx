
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute top-10 left-0 w-full text-center">
        <h1 className="text-5xl font-bold text-white tracking-wider">
          FASHION
        </h1>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 z-30 text-white hover:bg-white/10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <div className="w-full max-w-5xl h-[70vh] flex items-center justify-center overflow-hidden">
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
            className="absolute w-full h-[70vh] flex items-center justify-center"
          >
            <div className="relative group">
              <img
                src={fashionItems[currentIndex].image}
                alt={fashionItems[currentIndex].title}
                className="object-cover h-[60vh] max-w-[80vw] shadow-2xl rounded-sm transition-all duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-0 opacity-100 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white">
                  {fashionItems[currentIndex].title}
                </h2>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 z-30 text-white hover:bg-white/10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
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
