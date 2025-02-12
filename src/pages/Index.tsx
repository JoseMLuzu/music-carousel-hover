
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import MenuButton from "@/components/MenuButton";
import { Link } from "react-router-dom";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1A1F2C] relative">
      {/* Menu button */}
      <MenuButton onOpenMenu={() => setMenuOpen(true)} />

      {/* Email and Text positions */}
      <div className="fixed top-1/2 -translate-y-1/2 left-8 text-white/60 text-sm tracking-wider rotate-[-90deg] origin-left">
        EMAIL
      </div>
      <div className="fixed top-1/2 -translate-y-1/2 right-8 text-white/60 text-sm tracking-wider rotate-90 origin-right">
        TEXT
      </div>

      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-white hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          <nav className="flex flex-col items-center gap-6">
            <Link
              to="/tour"
              className="px-12 py-2 border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors uppercase tracking-widest text-sm"
            >
              TOUR
            </Link>
            <Link
              to="/utopia-world"
              className="px-12 py-2 border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors uppercase tracking-widest text-sm"
            >
              UTOPIA WORLD
            </Link>
            <Link
              to="/shop"
              className="px-12 py-2 border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors uppercase tracking-widest text-sm"
            >
              UTOPIA SHOP
            </Link>
            <Link
              to="/music"
              className="px-12 py-2 border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors uppercase tracking-widest text-sm"
            >
              UTOPIA ALBUM
            </Link>
          </nav>

          <div className="absolute bottom-8 flex gap-6">
            <a
              href="https://www.instagram.com/_t99c_/"
              className="text-white/60 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
