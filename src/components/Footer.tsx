const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
          <span className="text-gradient">daury</span>dicaprio
        </h3>
        
        <p className="text-muted-foreground text-sm mb-8">
          Sé que no es fácil y que requiere esfuerzo, yo lo sé muy bien, pero estoy aquí para apoyarte en el camino hacia el control y una mejor calidad de vida.
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
            aria-label="YouTube"
          >
            YouTube
          </a>
        </div>
        
        <div className="gold-line mx-auto mb-8" />
        
        <p className="text-primary/80 text-sm tracking-wide">
          #dosmilsiempre #verygoodforlife
        </p>
        
        <p className="text-muted-foreground/60 text-xs mt-6">
          © {new Date().getFullYear()} daurydicaprio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
