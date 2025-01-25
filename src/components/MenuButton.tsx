import { Button } from "@/components/ui/button";
import menuIcon from "/imgButton.png"; // Asegúrate de que esta ruta sea correcta

interface MenuButtonProps {
  onOpenMenu: () => void;
}

const MenuButton = ({ onOpenMenu }: MenuButtonProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="relative">
        {/* Spinning border animation */}
        <div className="absolute inset-0 rounded-full border-2 border-white animate-[spin_3s_linear_infinite]" />

        <Button
          variant="ghost"
          size="icon"
          className="relative w-16 h-auto rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-colors"
          onClick={onOpenMenu}
        >
          {/* Usa una etiqueta img para renderizar la imagen */}
          <img
            src={menuIcon} // Renderiza la imagen importada
            alt="Menu icon"
            className="w-15 h-15 object-contain"
          />
        </Button>
      </div>
    </div>
  );
};

export default MenuButton;
