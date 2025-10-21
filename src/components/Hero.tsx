import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-medical-team.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-primary font-semibold">Depuis 2018</p>
                <p className="text-sm text-muted-foreground">Au service de votre santé</p>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Des soins de{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">rêve</span>{" "}
              à portée de main
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Notre ONG s'engage à offrir des services de santé de qualité 
              supérieure à des tarifs accessibles pour toutes les populations 
              d'Abidjan et de la Côte d'Ivoire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://paystack.shop/pay/fyx1vv7xc2', '_blank')}
              >
                Faire un don
                <Heart className="w-4 h-4 group-hover:scale-105 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://wa.me/2250759950823', '_blank')}
                className="group"
              >
                WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">Patients soignés</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-medical" />
                </div>
                <div className="text-2xl font-bold text-medical">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilité</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Équipe médicale professionnelle de l'ONG"
                className="w-full h-[600px] object-cover rounded-2xl shadow-medical"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;