import React, { useEffect, useState } from "react";
import rotatingImg1 from "../../public/image-Photoroom.png";
import rotatingImg2 from "../../public/image-Photoroom.png";

const RotatingImages = ({
  initialRotation1 = 2,
  initialRotation2 = 1,
  rotationFactor = 0.821,
}) => {
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

  const opacity = Math.min(scrollPosition / 300, 1);
  const rotation = scrollPosition * rotationFactor;

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-40">
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="relative w-[500px] h-[500px] transform-style-3d">
          <img
            src={rotatingImg1}
            alt="Rotating design 1"
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
            style={{
              transform: `rotate(${initialRotation1 + rotation}deg)`,
              transition: "transform 0.1s linear",
            }}
          />
          <img
            src={rotatingImg2}
            alt="Rotating design 2"
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
            style={{
              transform: `rotate(${initialRotation2 - rotation}deg)`,
              transition: "transform 0.1s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RotatingImages;
