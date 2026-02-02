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
    <section className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
              Sobre mí
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              ¿Quién soy?
            </h2>
            
            <div className="gold-line mb-8" />
            
            <div className="flex flex-wrap gap-2 mb-8">
              {traits.map((trait, index) => (
                <span 
                  key={trait}
                  className="px-3 py-1 text-sm border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
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
            <p className="font-body text-secondary-foreground leading-relaxed">
              Siempre intento que la <span className="text-foreground font-medium">excelencia</span> sea uno de los principales atributos en cada bendita cosa que haga.
            </p>
            
            <p className="font-body text-secondary-foreground leading-relaxed">
              Me apasiona la <span className="text-primary">nutrición</span>, las <span className="text-primary">finanzas personales</span>, la <span className="text-primary">salud mental</span> y el <span className="text-primary">desarrollo web</span>, mientras aprendo intento compartirlo pues enseñar es aprender dos veces, y eso es divertido.
            </p>
            
            <p className="font-display text-xl text-foreground italic pt-4">
              "Veo arte en todos lados, y lo que más me gusta es crear."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienSoy;
