import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Prologo from "@/components/Prologo";
import QuienSoy from "@/components/QuienSoy";
import Proyectos from "@/components/Proyectos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Prologo />
      <QuienSoy />
      <Proyectos />
      <Footer />
    </div>
  );
};

export default Index;
