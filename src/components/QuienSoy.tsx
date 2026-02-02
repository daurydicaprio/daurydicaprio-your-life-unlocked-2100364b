const QuienSoy = () => {
  const traits = [
    "Escéptico",
    "Perfeccionista", 
    "Agradecido",
    "Minimalista",
    "Optimista",
    "Sincero",
    "Feliz"
  ];

  return (
    <section id="quien-soy" className="py-32 px-6 bg-secondary/30 relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-4">
              Sobre mí
            </p>
            
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-bold mb-8">
              ¿Quién soy?
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {traits.map((trait, index) => (
                <span 
                  key={trait}
                  className="px-4 py-2 text-sm border-2 border-border bg-card text-foreground font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                  style={{ animationDelay: `${200 + index * 50}ms` }}
                >
                  {trait}
                </span>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              ...al menos eso dirá mi ego.
            </p>
          </div>
          
          <div className="space-y-6 opacity-0 animate-fade-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="glass-card p-8">
              <p className="font-body text-lg text-foreground leading-relaxed mb-6">
                Siempre intento que la <span className="font-semibold text-primary">excelencia</span> sea uno de los principales atributos en cada bendita cosa que haga.
              </p>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                Me apasiona la <span className="text-primary font-medium">nutrición</span>, las <span className="text-primary font-medium">finanzas personales</span>, la <span className="text-accent font-medium">salud mental</span> y el <span className="text-accent font-medium">desarrollo web</span>, mientras aprendo intento compartirlo pues enseñar es aprender dos veces.
              </p>
            </div>
            
            <div className="border-l-4 border-accent pl-6">
              <p className="font-display text-2xl text-foreground">
                "Veo arte en todos lados, y lo que más me gusta es crear."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienSoy;
