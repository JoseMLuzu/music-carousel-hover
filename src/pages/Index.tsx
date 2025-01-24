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

export default Index;