
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
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-dark min-h-screen dark:bg-dark light:bg-white">
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
