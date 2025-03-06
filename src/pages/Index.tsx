
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

      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-white hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          <nav className="flex flex-col items-center gap-8 text-white">
            <Link
              to="/"
              className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider"
            >
              FASHION
            </Link>
            <Link
              to="/music"
              className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider"
            >
              MUSIC
            </Link>
            <Link
              to="/music"
              className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider"
            >
              FILMS
            </Link>
            <a
              href="mailto:contact@the99collection.com"
              className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider"
              target="_blank"
            >
              EMAIL
            </a>
            <a
              href="sms:+123456789"
              className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider"
            >
              TEXT
            </a>
            <a
              href="https://www.instagram.com/_t99c_/"
              className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i> INSTAGRAM
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Index;
