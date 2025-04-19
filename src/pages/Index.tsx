import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

const Index = () => {
  useEffect(() => {
    // Initialize with dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b dark:from-dark dark:to-dark-400 light:from-white light:to-gray-100 text-white dark:text-white light:text-gray-800 transition-colors duration-300">
      <CursorEffect />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
