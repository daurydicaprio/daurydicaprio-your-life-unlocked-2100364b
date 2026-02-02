const Prologo = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-border" />
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <div className="glass-card p-6 sticky top-32">
              <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-2">
                Prólogo
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent" />
              
              <p className="text-primary font-medium tracking-wide mt-6 text-sm">
                #dosmilsiempre
              </p>
              <p className="text-accent font-medium tracking-wide text-sm">
                #verygoodforlife
              </p>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-8 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
              Intentar cada día eliminar mi ego, pues cada vida es un nuevo comienzo, a veces lo siento a veces lo pienso, no buscar el beneplácito de un tercero es lo que siempre quiero.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Lo simple, es una virtud, la hipocresía una actitud y amar es gratitud.
              </p>
            </blockquote>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Nada ni nadie podría arrestar mi arte, aunque la vida me falte. No soy lo que soy, aunque a veces siento que es el momento, a veces no lo entiendo aunque me pregunto el porqué, y cada vez que nazco pienso en ahora qué.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prologo;
