import React, { useState } from "react";
import "../styles/Home.css";
import TitleScreen from "@/components/TitleScreen";
import RotatingImages from "@/components/RotatingImages";

// Importar imágenes desde la carpeta carousel
import img1 from "../../public/carousel/img1.jpeg";
import img2 from "../../public/carousel/img2.jpeg";
import img3 from "../../public/carousel/img3.png";
import img4 from "../../public/carousel/img4.jpeg";
import img5 from "../../public/carousel/img5.jpeg";
import img7 from "../../public/carousel/img7.png";
import img8 from "../../public/carousel/img8.jpeg";
import img9 from "../../public/carousel/img9.jpeg";
import img10 from "../../public/carousel/img10.jpeg";
import img11 from "../../public/carousel/img11.jpeg";
import img12 from "../../public/carousel/img12.jpeg";
import img13 from "../../public/carousel/img13.jpeg";
import img14 from "../../public/carousel/img14.jpeg";
import img15 from "../../public/carousel/img15.jpeg";
import img16 from "../../public/carousel/img16.jpeg";
import img17 from "../../public/carousel/img17.jpeg";
import img19 from "../../public/carousel/img19.jpeg";
import img20 from "../../public/carousel/img20.jpeg";
import img21 from "../../public/carousel/img21.jpeg";
import img22 from "../../public/carousel/img22.jpeg";
import img23 from "../../public/carousel/img23.jpeg";
import img24 from "../../public/carousel/img24.jpeg";
import img25 from "../../public/carousel/img25.jpeg";
import img26 from "../../public/carousel/img26.jpeg";
import img28 from "../../public/carousel/img28.jpeg";
import img29 from "../../public/carousel/img29.jpeg";
import img30 from "../../public/carousel/img30.jpeg";
import img31 from "../../public/carousel/img31.jpeg";
import img32 from "../../public/carousel/img32.jpeg";
import img34 from "../../public/carousel/img34.jpeg";
import img35 from "../../public/carousel/img35.jpeg";
import img36 from "../../public/carousel/img36.jpeg";
import img37 from "../../public/carousel/img37.jpeg";
import img38 from "../../public/carousel/img38.jpeg";
import img39 from "../../public/carousel/img39.jpeg";
import img40 from "../../public/carousel/img40.jpeg";
import img41 from "../../public/carousel/img41.jpeg";
import img42 from "../../public/carousel/img42.jpeg";
import img43 from "../../public/carousel/img43.jpeg";
import img44 from "../../public/carousel/img44.jpeg";
import img45 from "../../public/carousel/img45.jpeg";
import img46 from "../../public/carousel/img46.jpeg";
import img47 from "../../public/carousel/img47.jpeg";
import img48 from "../../public/carousel/img48.jpeg";
import img49 from "../../public/carousel/img49.jpeg";
import img50 from "../../public/carousel/img50.jpeg";
import img51 from "../../public/carousel/img51.jpeg";
import img52 from "../../public/carousel/img52.jpeg";
import img53 from "../../public/carousel/img53.jpeg";
import img54 from "../../public/carousel/img54.jpeg";
import img55 from "../../public/carousel/img55.jpeg";
import img56 from "../../public/carousel/img56.jpeg";
import img57 from "../../public/carousel/img57.png";
import img58 from "../../public/carousel/img58.png";
import img59 from "../../public/carousel/img59.jpeg";
import img60 from "../../public/carousel/img60.jpeg";

const Home = ({ interval = 300 }) => {
  // Colocar todas las imágenes en un array
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img28,
    img29,
    img30,
    img31,
    img32,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
  ];

  const [trails, setTrails] = useState([]);

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;

    // Añadir un nuevo "rastro" con las coordenadas actuales y una imagen aleatoria
    setTrails((prevTrails) => [
      ...prevTrails,
      {
        x,
        y,
        image: images[Math.floor(Math.random() * images.length)], // Elegir imagen aleatoria
        id: Date.now(), // Identificador único
      },
    ]);

    // Eliminar rastros antiguos después de un tiempo
    setTimeout(() => {
      setTrails((prevTrails) => prevTrails.slice(1));
    }, 300);
  };

  return (
    <div>
      <TitleScreen />
      <RotatingImages />
      <div
        className="relative w-full min-h-screen bg-black overflow-hidden mb-96"
        onMouseMove={handleMouseMove}
      >
        {trails.map((trail) => (
          <img
            key={trail.id}
            src={trail.image}
            alt="trail"
            className="absolute w-32 h-32 object-cover"
            style={{
              left: `${trail.x}px`,
              top: `${trail.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
