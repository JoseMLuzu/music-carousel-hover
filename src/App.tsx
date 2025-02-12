
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { AlbumCarousel } from "./components/AlbumCarousel";
import UtopiaWorld from "./pages/UtopiaWorld";
import MenuButton from "./components/MenuButton";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<AlbumCarousel />} />
            <Route path="/utopia-world" element={<UtopiaWorld />} />
          </Routes>
          <MenuButton onOpenMenu={() => setIsMenuOpen(!isMenuOpen)} />
        </BrowserRouter>
        <Index />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
