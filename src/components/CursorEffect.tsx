
import { useEffect, useState } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    
    setIsVisible(true);
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    
    window.addEventListener("mousemove", updatePosition);
    
    // Wait a bit for components to mount
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('a, button, input, [role="button"]');
      
      elements.forEach(element => {
        element.addEventListener("mouseover", handleMouseOver);
        element.addEventListener("mouseout", handleMouseOut);
      });
    }, 1000);
    
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      clearTimeout(timer);
      
      // Try to remove event listeners, might not catch all if component unmounts early
      try {
        const elements = document.querySelectorAll('a, button, input, [role="button"]');
        elements.forEach(element => {
          element.removeEventListener("mouseover", handleMouseOver);
          element.removeEventListener("mouseout", handleMouseOut);
        });
      } catch (e) {
        console.log("Error cleaning up cursor effect listeners");
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor-effect bg-accent/80"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      
      {/* Trailing cursor */}
      <div
        className="cursor-effect bg-white/20 transition-transform duration-300"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${isHovering ? 0.5 : 0.8})`,
          transitionDelay: "0.08s",
        }}
      />
    </>
  );
};

export default CursorEffect;
