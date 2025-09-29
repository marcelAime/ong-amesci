import { Button } from "@/components/ui/button";
import { Heart, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import constructionProject from "@/assets/construction-project.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t('hero.title')}
              <span className="block text-2xl md:text-3xl font-medium mt-2 text-white/90">
                AMES-CI
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-6 text-white/90 animate-fade-in" style={{ animationDelay: "200ms" }}>
              {t('hero.subtitle')}
            </h2>
            
            <p className="text-lg mb-8 text-white/80 leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-hope transition-all shadow-trust"
                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="w-5 h-5 mr-2" />
                {t('hero.support')}
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-trust transition-all"
                onClick={() => window.open('https://wa.me/2250778044369', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.contact')}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src={constructionProject}
                alt="Projet de construction AMES-CI"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-vibrant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hope/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-hope">10+</div>
                      <div className="text-sm text-foreground/70">Années d'expérience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-trust">500+</div>
                      <div className="text-sm text-foreground/70">Bénéficiaires</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;