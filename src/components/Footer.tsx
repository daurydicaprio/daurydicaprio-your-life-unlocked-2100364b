import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t-2 border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <h3 className="font-display text-3xl md:text-4xl text-foreground font-bold mb-4">
              <span className="text-gradient">daury</span>dicaprio
            </h3>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Sé que no es fácil y que requiere esfuerzo, yo lo sé muy bien, pero estoy aquí para apoyarte en el camino hacia el control y una mejor calidad de vida.
            </p>
          </div>
          
          <div className="md:col-span-3 md:col-start-8">
            <p className="text-xs tracking-widest uppercase font-semibold text-foreground mb-4">
              Redes
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase font-semibold text-foreground mb-4">
              Hashtags
            </p>
            <p className="text-primary font-medium text-sm mb-1">#dosmilsiempre</p>
            <p className="text-accent font-medium text-sm">#verygoodforlife</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} daurydicaprio. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
