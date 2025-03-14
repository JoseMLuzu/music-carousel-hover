
import React, { useEffect, useState } from "react";
import rotatingImg1 from "/lovable-uploads/12baae7e-fd11-4697-bb37-d3a761354586.png";
import rotatingImg2 from "/lovable-uploads/f32cc670-b56b-4f9a-9282-e53d5c5f812c.png";

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
  const rotation = scrollPosition * 0.3; // Rotación sobre su propio eje

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-40">
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ opacity }}
      >
        {/* Contenedor para las imágenes apiladas */}
        <div className="relative w-48 h-48 transform-style-3d">
          {/* Primera imagen girando */}
          <img
            src={rotatingImg1}
            alt="Rotating design 1"
            className="absolute inset-0 w-full h-full object-contain mix-blend-screen"
            style={{ 
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.1s linear"
            }}
          />
          
          {/* Segunda imagen girando en dirección opuesta */}
          <img
            src={rotatingImg2}
            alt="Rotating design 2"
            className="absolute inset-0 w-full h-full object-contain mix-blend-screen"
            style={{ 
              transform: `rotate(-${rotation}deg)`,
              transition: "transform 0.1s linear"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RotatingImages;
