import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const UtopiaWorld = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotationDegrees = scrollY * 0.5; // Adjust rotation speed

  return (
    <div className="min-h-[200vh] bg-[#1A1F2C] relative">
      {/* Title that fades out on scroll */}
      <h1 
        className="fixed top-10 left-1/2 -translate-x-1/2 text-4xl font-bold text-white transition-opacity duration-300"
        style={{ opacity: 1 - scrollY / 300 }}
      >
        UTOPIA WORLD
      </h1>

      {/* Rotating center image */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="/lovable-uploads/55bbeabf-07dc-4cd8-9901-c2dac23d1927.png"
          alt="Rotating logo"
          className="w-48 h-48 transition-transform duration-300"
          style={{ transform: `rotate(${rotationDegrees}deg)` }}
        />
      </div>

      {/* Menu button */}
      <Button
        variant="ghost"
        size="lg"
        className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white border border-white/20 hover:bg-white/10"
        onClick={() => setMenuOpen(true)}
      >
        <Menu className="w-6 h-6 mr-2" />
        MENU
      </Button>

      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-white hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          <nav className="flex flex-col items-center gap-8 text-white">
            <a href="#" className="text-xl hover:opacity-70 transition-opacity uppercase tracking-wider">Tour</a>
            <a href="#" className="text-xl hover:opacity-70 transition-opacity uppercase tracking-wider">Utopia World</a>
            <a href="#" className="text-xl hover:opacity-70 transition-opacity uppercase tracking-wider">Utopia Shop</a>
            <a href="#" className="text-xl hover:opacity-70 transition-opacity uppercase tracking-wider">Utopia Album</a>
            <div className="mt-8 text-sm opacity-50">PRE-SAVE NOW</div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default UtopiaWorld;