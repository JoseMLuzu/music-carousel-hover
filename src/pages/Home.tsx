import React, { useState } from "react";
import "../styles/Home.css";
import TitleScreen from "@/components/TitleScreen";
import RotatingImages from "@/components/RotatingImages";

// Importar imágenes desde la carpeta carousel
import img1 from "/carousel/img1.jpeg";
import img2 from "/carousel/img2.jpeg";
import img3 from "/carousel/img3.png";
import img4 from "/carousel/img4.jpeg";
import img5 from "/carousel/img5.jpeg";
import img7 from "/carousel/img7.png";
import img8 from "/carousel/img8.jpeg";
import img9 from "/carousel/img9.jpeg";
import img10 from "/carousel/img10.jpeg";
import img11 from "/carousel/img11.jpeg";
import img12 from "/carousel/img12.jpeg";
import img13 from "/carousel/img13.jpeg";
import img14 from "/carousel/img14.jpeg";
import img15 from "/carousel/img15.jpeg";
import img16 from "/carousel/img16.jpeg";
import img17 from "/carousel/img17.jpeg";
import img19 from "/carousel/img19.jpeg";
import img20 from "/carousel/img20.jpeg";
import img21 from "/carousel/img21.jpeg";
import img22 from "/carousel/img22.jpeg";
import img23 from "/carousel/img23.jpeg";
import img24 from "/carousel/img24.jpeg";
import img25 from "/carousel/img25.jpeg";
import img26 from "/carousel/img26.jpeg";
import img28 from "/carousel/img28.jpeg";
import img29 from "/carousel/img29.jpeg";
import img30 from "/carousel/img30.jpeg";
import img31 from "/carousel/img31.jpeg";
import img32 from "/carousel/img32.jpeg";
import img34 from "/carousel/img34.jpeg";
import img35 from "/carousel/img35.jpeg";
import img36 from "/carousel/img36.jpeg";
import img37 from "/carousel/img37.jpeg";
import img38 from "/carousel/img38.jpeg";
import img39 from "/carousel/img39.jpeg";
import img40 from "/carousel/img40.jpeg";
import img41 from "/carousel/img41.jpeg";
import img42 from "/carousel/img42.jpeg";
import img43 from "/carousel/img43.jpeg";
import img44 from "/carousel/img44.jpeg";
import img45 from "/carousel/img45.jpeg";
import img46 from "/carousel/img46.jpeg";
import img47 from "/carousel/img47.jpeg";
import img48 from "/carousel/img48.jpeg";
import img49 from "/carousel/img49.jpeg";
import img50 from "/carousel/img50.jpeg";
import img51 from "/carousel/img51.jpeg";
import img52 from "/carousel/img52.jpeg";
import img53 from "/carousel/img53.jpeg";
import img54 from "/carousel/img54.jpeg";
import img55 from "/carousel/img55.jpeg";
import img56 from "/carousel/img56.jpeg";
import img57 from "/carousel/img57.png";
import img58 from "/carousel/img58.png";
import img59 from "/carousel/img59.jpeg";
import img60 from "/carousel/img60.jpeg";

const Home = ({ interval = 300 }) => {
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
        y: y + window.scrollY, // Ajustar la posición vertical con el desplazamiento del scroll
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
    <div
      className="relative w-full bg-black overflow-hidden" // Contenedor principal
      onMouseMove={handleMouseMove} // Capturar el movimiento del mouse en toda la pantalla
    >
      <TitleScreen />
      <RotatingImages />
      <div className="relative w-full min-h-screen mb-96">
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
              zIndex: 9999, // Asegurar que el rastro esté siempre al frente
              pointerEvents: "none", // Permitir la interacción con elementos debajo del rastro
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
