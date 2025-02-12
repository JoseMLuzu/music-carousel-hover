
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

      <h1 className="text-3xl font-semibold">The 99 Collection</h1>

      <ContactForm />
    </nav>
  );
};

export default Navbar;
