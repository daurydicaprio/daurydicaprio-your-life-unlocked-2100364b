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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-card border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold">
          <span className="text-gradient">d</span>
          <span className="text-foreground">d</span>
        </a>
        
        <div className="flex items-center gap-8">
          <a 
            href="#proyectos" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Proyectos
          </a>
          <a 
            href="#quien-soy" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Sobre mí
          </a>
          <a 
            href="#" 
            className="text-sm px-5 py-2.5 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
