
import React, { useEffect, useState } from "react";
import rotatingImg from "/lovable-uploads/e2568179-1038-406e-9f90-862ac2cb252a.png";

const RotatingImages = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calcular la opacidad y rotación basada en el scroll
  const opacity = Math.min(scrollPosition / 200, 1);
  const rotationLeft = scrollPosition * 0.5; // Rotación hacia la izquierda
  const rotationRight = -scrollPosition * 0.5; // Rotación hacia la derecha

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-40">
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ opacity }}
      >
        {/* Imagen girando a la izquierda */}
        <img
          src={rotatingImg}
          alt="Rotating design left"
          className="absolute w-48 h-48 object-contain"
          style={{ 
            transform: `rotate(${rotationLeft}deg)`,
            transition: "transform 0.1s linear"
          }}
        />
        
        {/* Imagen girando a la derecha */}
        <img
          src={rotatingImg}
          alt="Rotating design right"
          className="absolute w-48 h-48 object-contain"
          style={{ 
            transform: `rotate(${rotationRight}deg)`,
            transition: "transform 0.1s linear"
          }}
        />
      </div>
    </div>
  );
};

export default RotatingImages;
