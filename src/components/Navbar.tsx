
import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

const Navbar: React.FC = () => {
  const location = useLocation();
  
  // Function to get page description based on current path
  const getPageDescription = () => {
    switch (location.pathname) {
      case "/":
        return "Welcome to The 99 Collection - A creative showcase of fashion, music, and visual arts.";
      case "/utopia-world":
      case "/film":
        return "Explore our cinematic universe through visual storytelling and immersive film experiences.";
      case "/fashion":
        return "Discover our unique fashion perspective, blending contemporary styles with artistic expression.";
      case "/music":
        return "Experience the rhythm and sound that defines our creative vision.";
      case "/photos":
        return "Browse our photography portfolio showcasing moments captured through our distinctive lens.";
      case "/services":
        return "Explore the range of creative services we offer to bring your vision to life.";
      default:
        return "The 99 Collection - A creative platform for artistic expression.";
    }
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 flex flex-col z-50">
      <div className="flex justify-between items-center">
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
      </div>
      
      {/* Page description bar */}
      <div className="w-full text-center mt-2 px-4">
        <p className="text-sm text-gray-400 italic">{getPageDescription()}</p>
      </div>
    </nav>
  );
};

export default Navbar;
