import { Wallet, Brain, Apple } from "lucide-react";

const proyectos = [
  {
    icon: Wallet,
    title: "Finanzas Personales",
    description: "Aprende a gestionar tu dinero de manera inteligente. Ahorro, inversión y libertad financiera.",
  },
  {
    icon: Brain,
    title: "Salud Mental",
    description: "Herramientas y reflexiones para cuidar tu mente. Bienestar emocional y desarrollo personal.",
  },
  {
    icon: Apple,
    title: "Alimentación",
    description: "Nutrición consciente para una vida plena. Porque lo que comes define cómo te sientes.",
  },
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Explora
          </p>
          
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Proyectos
          </h2>
          
          <div className="gold-line mx-auto mb-8" />
          
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ideas y recursos prácticos para mejorar tu calidad de vida. ¡Empieza a aplicar lo que aprendas y da el primer paso hacia un futuro mejor!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {proyectos.map((proyecto, index) => (
            <div
              key={proyecto.title}
              className="group bg-card border border-border rounded-lg p-8 card-hover opacity-0 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <proyecto.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {proyecto.title}
              </h3>
              
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {proyecto.description}
              </p>
              
              <div className="mt-6 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explorar</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
