import React from "react";
import { Button } from "@/components/ui/button"; // Asegúrate de importar el componente de Button
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center z-50">
      {/* Botón de Home usando ShadCN */}
      <Link to="/">
        <Button
          variant="ghost" // Estilo minimalista sin fondo
          className="text-white hover:bg-transparent transition-colors"
        >
          Home
        </Button>
      </Link>

      {/* Título */}
      <h1 className="text-3xl font-semibold">The 99 Collection</h1>

      {/* Botón de Contact usando ShadCN */}
      <Link to="/contact">
        <Button
          variant="ghost" // Estilo minimalista sin fondo
          className="text-white hover:bg-transparent transition-colors"
        >
          Contact
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
