
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { X, Music, Film, Instagram, Mail, Camera, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MenuButton from "./components/MenuButton";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import UtopiaWorld from "./pages/UtopiaWorld";
import { FashionGallery } from "./components/FashionGallery";
import { AlbumCarousel } from "./components/AlbumCarousel";
import Photos from "./pages/Photos";
import Services from "./pages/Services";

const queryClient = new QueryClient();

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/utopia-world" element={<UtopiaWorld />} />
            <Route path="/fashion" element={<FashionGallery />} />
            <Route path="/music" element={<AlbumCarousel />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/services" element={<Services />} />
            <Route path="/film" element={<UtopiaWorld />} /> {/* Using UtopiaWorld as a placeholder for Film for now */}
          </Routes>
          <MenuButton onOpenMenu={handleOpenMenu} />
          
          {/* Full screen menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 text-white hover:bg-white/10"
                onClick={handleCloseMenu}
              >
                <X className="w-6 h-6" />
              </Button>

              <nav className="flex flex-col items-center gap-8 text-white">
                {/* Music option - vertical */}
                <Link
                  to="/music"
                  className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider flex items-center gap-2"
                  onClick={handleCloseMenu}
                >
                  <Music className="w-4 h-4" />
                  <span>MUSIC</span>
                </Link>

                {/* Instagram, Fashion, Gmail in one row */}
                <div className="flex items-center gap-4">
                  {/* Instagram - left of Fashion */}
                  <a
                    href="https://www.instagram.com/_t99c_/"
                    className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider flex items-center gap-2"
                    target="_blank"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>INSTA</span>
                  </a>

                  {/* Fashion - center */}
                  <Link
                    to="/fashion"
                    className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider"
                    onClick={handleCloseMenu}
                  >
                    FASHION
                  </Link>

                  {/* Gmail - right of Fashion */}
                  <a
                    href="mailto:contact@the99collection.com"
                    className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider flex items-center gap-2"
                    target="_blank"
                  >
                    <Mail className="w-4 h-4" />
                    <span>GMAIL</span>
                  </a>
                </div>

                {/* Film option - vertical */}
                <Link
                  to="/film"
                  className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider flex items-center gap-2"
                  onClick={handleCloseMenu}
                >
                  <Film className="w-4 h-4" />
                  <span>FILM</span>
                </Link>

                {/* Photos option - vertical */}
                <Link
                  to="/photos"
                  className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider flex items-center gap-2"
                  onClick={handleCloseMenu}
                >
                  <Camera className="w-4 h-4" />
                  <span>PHOTOS</span>
                </Link>

                {/* Services option - vertical */}
                <Link
                  to="/services"
                  className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider flex items-center gap-2"
                  onClick={handleCloseMenu}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>SERVICES</span>
                </Link>
              </nav>
            </div>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
