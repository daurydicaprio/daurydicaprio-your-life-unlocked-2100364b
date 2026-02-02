const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="text-center z-10 opacity-0 animate-fade-up">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
          Desarrollo Personal
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
          <span className="text-gradient">daury</span>
          <span className="text-foreground">dicaprio</span>
        </h1>
        
        <div className="gold-line mx-auto mb-8" />
        
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
          ¿Te interesa mejorar tus finanzas, tu salud y tu futuro?
        </p>
        
        <p className="font-body text-base text-secondary-foreground/80 max-w-xl mx-auto leading-relaxed">
          Si no ahora, ¿cuándo?
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-400">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>
    </section>
  );
};

export default Hero;
