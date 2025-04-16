
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BulbToggle from "./BulbToggle";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDark(!isDark);
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="absolute inset-0 -z-10">
        <div className={cn(
          "absolute inset-0 transition-all duration-500",
          isDark 
            ? "bg-gradient-to-b from-dark-300/50 to-dark/80" 
            : "bg-gradient-to-b from-yellow-50/50 to-white/80"
        )}></div>
        <div className={cn(
          "absolute inset-0 transition-all duration-500",
          isDark
            ? "bg-[radial-gradient(circle_at_center,rgba(110,86,207,0.15),transparent_65%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(255,255,0,0.15),transparent_65%)]"
        )}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "max-w-3xl mx-auto transition-all duration-500 relative",
          !isDark && "text-shadow-glow"
        )}
      >
        <div className="flex items-center justify-center gap-3">
          <h2 className={cn(
            "font-semibold mb-4 transition-all duration-500",
            isDark ? "text-accent" : "text-yellow-500"
          )}>Hi there! I'm</h2>
          <BulbToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className={cn(
            "transition-all duration-500",
            isDark ? "text-white" : "text-gray-800"
          )}>Mujtaba Ahmad</span>
        </h1>
        <p className={cn(
          "text-2xl md:text-3xl mb-8 transition-all duration-500",
          isDark ? "text-gray-300" : "text-gray-600"
        )}>
          DevOps Engineer
        </p>
        <p className={cn(
          "text-lg md:text-xl max-w-2xl mx-auto mb-12 transition-all duration-500",
          isDark ? "text-gray-400" : "text-gray-600"
        )}>
          I specialize in streamlining development processes, implementing CI/CD pipelines, 
          and managing cloud infrastructure to ensure seamless software delivery.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10"
      >
        <button 
          onClick={scrollToNext}
          className={cn(
            "flex flex-col items-center transition-colors",
            isDark 
              ? "text-gray-400 hover:text-accent" 
              : "text-gray-600 hover:text-yellow-500"
          )}
          aria-label="Scroll Down"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ChevronDown className={cn(
            "w-6 h-6 animate-bounce",
            isDark ? "text-accent" : "text-yellow-500"
          )} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
