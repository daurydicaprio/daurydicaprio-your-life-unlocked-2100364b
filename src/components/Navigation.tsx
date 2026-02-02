import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl">
          <span className="text-gradient">d</span>
          <span className="text-foreground">d</span>
        </a>
        
        <div className="flex items-center gap-8">
          <a 
            href="#proyectos" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Proyectos
          </a>
          <a 
            href="#" 
            className="text-sm px-4 py-2 border border-primary/50 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
