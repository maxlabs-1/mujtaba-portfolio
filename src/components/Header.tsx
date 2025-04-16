
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Menu, X, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

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
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDark(!isDark);
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
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">{isDark ? 'Dark' : 'Light'}</span>
            <Switch
              checked={isDark}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-gray-400"
            />
            <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 hidden sm:inline">{isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</span>
          </div>
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
