import React, { useState, useEffect } from "react";

const TitleScreen = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center transition-all duration-300 z-[9999] text-white text-center ${
        isScrolled
          ? "bg-black bg-opacity-40 opacity-0 pointer-events-none translate-y-[-20px]"
          : "bg-black bg-opacity-70 opacity-100 pointer-events-auto translate-y-0"
      }`}
    >
      <h1
        className="text-6xl font-extrabold uppercase"
        style={{
          fontFamily: '"Jersey 15", serif', // Mantener la fuente personalizada
        }}
      >
        THE 99 COLLECTION
      </h1>
    </div>
  );
};

export default TitleScreen;
