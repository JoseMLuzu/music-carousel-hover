
import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center z-50">
      <div className="flex gap-4">
        <Link to="/">
          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 transition-colors ${
              location.pathname === "/" ? "border-b border-white" : ""
            }`}
          >
            Home
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-semibold">The 99 Collection</h1>

      <ContactForm />
    </nav>
  );
};

export default Navbar;
