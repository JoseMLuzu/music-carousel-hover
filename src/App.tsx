
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MenuButton from "./components/MenuButton";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import UtopiaWorld from "./pages/UtopiaWorld";

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
                <Link
                  to="/"
                  className="rounded-full border border-white/30 px-6 py-2 hover:bg-white/10 transition-all uppercase tracking-wider"
                  onClick={handleCloseMenu}
                >
                  HOME
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
                  INSTAGRAM
                </a>
              </nav>
            </div>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
