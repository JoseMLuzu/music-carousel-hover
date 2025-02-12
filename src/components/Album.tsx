import { useState, useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface AlbumProps {
  image: string;
  title: string;
  className?: string;
}

export function Album({ image, title, className }: AlbumProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const albumRef = useRef<HTMLDivElement>(null);

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

  return (
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
        <div className="absolute bottom-0 right-0 bg-transparent text-white p-3">
          {title}
        </div>
      </div>
    </div>
  );
}
