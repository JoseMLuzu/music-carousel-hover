import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center z-50">
      <Link to="/">
        <Button
          variant="ghost"
          className="text-white hover:bg-transparent transition-colors"
        >
          Home
        </Button>
      </Link>

<<<<<<< HEAD
      {/* Botón de Contact usando ShadCN */}
      <Link to="/contact">
        <Button
          variant="ghost" // Estilo minimalista sin fondo
          className="text-white hover:bg-transparent transition-colors"
        >
          Contact
        </Button>
      </Link>
=======

      <ContactForm />
>>>>>>> a97b11c428eb727b6e1b3ee016e82f930984a7b6
    </nav>
  );
};

export default Navbar;