const Prologo = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Prólogo
          </p>
          
          <div className="gold-line mb-12" />
        </div>
        
        <div className="space-y-8 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <p className="font-display text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
            Intentar cada día eliminar mi ego, pues cada vida es un nuevo comienzo, a veces lo siento a veces lo pienso, no buscar el beneplácito de un tercero es lo que siempre quiero, vivir el presente y querer a la gente aunque no me guste su ambiente, la sinceridad con que me miran sus ojos me puso el corazón rojo.
          </p>
          
          <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
            Lo simple, es una virtud, la hipocresía una actitud y amar es gratitud.
          </p>
          
          <p className="font-body text-muted-foreground leading-relaxed">
            Nada ni nadie podría arrestar mi arte, aunque la vida me falte. No soy lo que soy, aunque a veces siento que es el momento, a veces no lo entiendo aunque me pregunto el porqué, y cada vez que nazco pienso en ahora qué.
          </p>
          
          <p className="text-primary font-medium tracking-wide pt-4">
            #dosmilsiempre #verygoodforlife
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prologo;
