
import React, { useState, useEffect } from "react";

const TitleScreen = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Cuando el scroll supera 10px, marcamos como scrolled
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Calculamos la opacidad basada en el scroll (desaparece gradualmente)
      const newOpacity = 1 - Math.min(window.scrollY / 200, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center transition-all duration-300 z-[9999] text-white text-center`}
      style={{ 
        backgroundColor: `rgba(0, 0, 0, ${opacity * 0.7})`,
        opacity,
        pointerEvents: opacity > 0.1 ? "auto" : "none",
        transform: `translateY(${isScrolled ? "-20px" : "0"})` 
      }}
    >
      <h1
        className="text-6xl font-extrabold uppercase"
        style={{
          fontFamily: '"Jersey 15", serif',
        }}
      >
        THE 99 COLLECTION
      </h1>
    </div>
  );
};

export default TitleScreen;
