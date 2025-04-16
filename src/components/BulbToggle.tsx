
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface BulbToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const BulbToggle = ({ isDark, onToggle }: BulbToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "fixed top-32 right-8 z-50 p-3 rounded-full transition-all duration-500",
        isDark
          ? "bg-dark-300 text-gray-400"
          : "bg-yellow-100 text-yellow-500 shadow-[0_0_30px_rgba(255,255,0,0.5)]"
      )}
      aria-label="Toggle theme"
    >
      <Lightbulb
        className={cn(
          "w-6 h-6 transition-all duration-500",
          !isDark && "animate-pulse"
        )}
      />
    </button>
  );
};

export default BulbToggle;
