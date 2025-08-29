import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Brewed to Belong
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Freshly brewed • Baked in-house • Open daily
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={scrollToMenu}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-elevated transition-all duration-300 hover:scale-105"
          >
            View Menu
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300"
            onClick={() => window.open("https://wa.me/919000013308", "_blank")}
          >
            Order on WhatsApp
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown 
            className="w-6 h-6 text-white/70 mx-auto cursor-pointer hover:text-white transition-colors" 
            onClick={scrollToMenu}
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </section>
  );
};

export default Hero;