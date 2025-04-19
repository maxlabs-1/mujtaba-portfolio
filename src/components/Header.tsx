
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Menu, X, LightbulbOff, Lightbulb } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleTheme = () => {
    setIsLightOn(!isLightOn);
    // Toggle the dark/light classes on the html element
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-300/95 dark:bg-dark-300/95 light:bg-white/95 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <a href="#" className="text-2xl font-bold text-gradient">Mujtaba Ahmad</a>
        </motion.div>

        {/* Centered Bulb Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`transition-all duration-300 ${
              isLightOn 
                ? "text-yellow-400 hover:bg-yellow-400/20" 
                : "text-gray-400 hover:bg-accent/20"
            } hover-glow`}
          >
            {isLightOn ? 
              <Lightbulb className="w-6 h-6" /> : 
              <LightbulbOff className="w-6 h-6" />
            }
          </Button>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          <a href="#about" className="text-white dark:text-white light:text-dark hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-white dark:text-white light:text-dark hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-white dark:text-white light:text-dark hover:text-accent transition-colors">Contact</a>
          <Button
            variant="outline"
            className="bg-transparent border border-accent text-white dark:text-white light:text-dark hover:bg-accent/20 hover-glow flex items-center gap-2"
            size="sm"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download size={16} /> Resume
          </Button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white dark:text-white light:text-dark hover:bg-dark-400"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden dark:bg-dark-400 light:bg-gray-100 border-t dark:border-gray-800 light:border-gray-200"
        >
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="dark:text-white light:text-dark py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="dark:text-white light:text-dark py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="dark:text-white light:text-dark py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              variant="outline"
              className="bg-transparent border border-accent dark:text-white light:text-dark hover:bg-accent/20 w-full flex items-center justify-center gap-2"
              size="sm"
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                setMobileMenuOpen(false);
              }}
            >
              <Download size={16} /> Download Resume
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
