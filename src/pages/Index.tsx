import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import MenuButton from "@/components/MenuButton";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1A1F2C] relative">
      {/* Menu button */}
      <MenuButton onOpenMenu={() => setMenuOpen(true)} />

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
            <a
              href="#"
              className="text-xl hover:opacity-70 transition-opacity uppercase tracking-wider"
            >
              Fashion
            </a>
            <a
              href="music"
              className="text-xl hover:opacity-70 transition-opacity uppercase tracking-wider"
            >
              Music
            </a>
            <a
              href="music"
              className="text-xl hover:opacity-70 transition-opacity uppercase tracking-wider"
            >
              Films
            </a>
            <a
              href="https://www.instagram.com/_t99c_/"
              className="text-xl hover:opacity-70 transition-opacity uppercase tracking-wider"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Index;
