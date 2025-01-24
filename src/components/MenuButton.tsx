import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MenuButtonProps {
  onOpenMenu: () => void;
}

const MenuButton = ({ onOpenMenu }: MenuButtonProps) => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <div className="relative">
        {/* Spinning border animation */}
        <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-[spin_3s_linear_infinite]" />
        
        <Button
          variant="ghost"
          size="icon"
          className="relative w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-colors"
          onClick={onOpenMenu}
        >
          <Menu className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default MenuButton;