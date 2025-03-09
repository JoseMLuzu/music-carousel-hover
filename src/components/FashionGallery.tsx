
import { useState, useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Create indices for the stacked cards
  const getVisibleIndices = () => {
    const indices = [];
    // Add current card
    indices.push(currentIndex);
    
    // Add next 2 cards (for the stack effect)
    for (let i = 1; i <= 2; i++) {
      const nextIndex = (currentIndex + i) % fashionItems.length;
      indices.push(nextIndex);
    }
    
    return indices;
  };

  const getCardStyles = (index: number) => {
    const position = getVisibleIndices().indexOf(index);
    
    if (position === -1) return { display: "none" };
    
    // Stack cards with decreasing z-index and slight offset
    return {
      zIndex: 10 - position,
      top: `${position * 15}px`,
      opacity: position === 0 ? 1 : 0.7 - position * 0.2,
      scale: position === 0 ? 1 : 0.95 - position * 0.05,
    };
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black perspective-1000">
      <div className="absolute top-10 left-0 w-full text-center">
        <h1 className="text-5xl font-bold text-white tracking-wider">
          FASHION
        </h1>
      </div>

      {/* Navigation buttons moved up to prevent overlap */}
      <div className="absolute top-1/3 z-30 flex flex-col gap-6">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
          onClick={prevSlide}
        >
          <ChevronUp className="h-8 w-8" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
          onClick={nextSlide}
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </div>

      <div className="w-full max-w-5xl h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div 
          ref={containerRef} 
          className="relative h-[500px] w-[350px] card-deck-container"
        >
          {fashionItems.map((item, index) => (
            <AnimatePresence key={item.id} initial={false} mode="popLayout">
              {getVisibleIndices().includes(index) && (
                <motion.div
                  initial={{ 
                    y: direction > 0 ? -500 : 500, 
                    opacity: 0, 
                    rotateX: direction > 0 ? 10 : -10,
                    scale: 0.9
                  }}
                  animate={{ 
                    ...getCardStyles(index),
                    y: 0, 
                    opacity: getCardStyles(index).opacity, 
                    rotateX: 0,
                    scale: getCardStyles(index).scale
                  }}
                  exit={{ 
                    y: direction > 0 ? 500 : -500, 
                    opacity: 0, 
                    rotateX: direction > 0 ? -10 : 10,
                    scale: 0.9,
                    transition: { duration: 0.5 }
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut"
                  }}
                  className="absolute w-[350px] card-item transform-style-3d shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="relative group h-[500px] w-[350px] rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover h-full w-full rounded-md transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h2 className="text-2xl font-bold text-white">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

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
