import { Wallet, Brain, Apple, ArrowUpRight } from "lucide-react";

const proyectos = [
  {
    icon: Wallet,
    title: "Finanzas Personales",
    description: "Aprende a gestionar tu dinero de manera inteligente. Ahorro, inversión y libertad financiera.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Salud Mental",
    description: "Herramientas y reflexiones para cuidar tu mente. Bienestar emocional y desarrollo personal.",
    color: "accent",
  },
  {
    icon: Apple,
    title: "Alimentación",
    description: "Nutrición consciente para una vida plena. Porque lo que comes define cómo te sientes.",
    color: "primary",
  },
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-4">
              Explora
            </p>
            
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-bold mb-6">
              Proyectos
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent" />
          </div>
          
          <div className="md:col-span-7 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Ideas y recursos prácticos para mejorar tu calidad de vida. ¡Empieza a aplicar lo que aprendas y da el primer paso hacia un futuro mejor!
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => (
            <div
              key={proyecto.title}
              className="group bg-card border-2 border-border p-8 card-hover opacity-0 animate-fade-up cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${proyecto.color === 'primary' ? 'from-primary/5 to-primary/10' : 'from-accent/5 to-accent/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 border-2 ${proyecto.color === 'primary' ? 'border-primary bg-primary/10' : 'border-accent bg-accent/10'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <proyecto.icon className={`w-7 h-7 ${proyecto.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                
                <h3 className="font-display text-2xl text-foreground font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {proyecto.title}
                </h3>
                
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  {proyecto.description}
                </p>
                
                <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explorar</span>
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
