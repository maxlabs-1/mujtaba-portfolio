
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-300/50 to-dark/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,86,207,0.15),transparent_65%)]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-accent font-semibold mb-4">Hi there! I'm</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Mujtaba Ahmad</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">
          DevOps Engineer
        </p>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
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
          className="flex flex-col items-center text-gray-400 hover:text-accent transition-colors"
          aria-label="Scroll Down"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce text-accent" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
