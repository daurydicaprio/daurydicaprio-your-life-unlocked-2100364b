const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 blur-3xl pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-30 pointer-events-none" />
      
      <div className="text-center z-10 opacity-0 animate-fade-up max-w-4xl">
        <div className="inline-block glass-card px-6 py-2 mb-8">
          <p className="text-muted-foreground text-sm tracking-widest uppercase font-medium">
            Desarrollo Personal
          </p>
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-none">
          <span className="text-gradient">daury</span>
          <span className="text-foreground">dicaprio</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
          ¿Te interesa mejorar tus finanzas, tu salud y tu futuro?
        </p>
        
        <p className="font-body text-lg text-foreground/70 max-w-xl mx-auto">
          Si no ahora, ¿cuándo?
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#proyectos" 
            className="px-8 py-4 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
          >
            Explorar Proyectos
          </a>
          <a 
            href="#quien-soy" 
            className="px-8 py-4 border-2 border-foreground text-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Conocer más
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-400">
        <div className="w-6 h-10 border-2 border-muted-foreground flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
