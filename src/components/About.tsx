import { Button } from "@/components/ui/button";
import { Calendar, Heart, MapPin, Target } from "lucide-react";
import medicalCaduceus from "@/assets/medical-caduceus.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 shadow-medical">
                <img
                  src={medicalCaduceus}
                  alt="Symbole médical - Caducée"
                  className="w-full h-80 object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-soft">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-primary font-semibold uppercase tracking-wide text-sm">
                À propos de nous
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Une mission{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                humanitaire
              </span>{" "}
              au cœur de l'Afrique
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Fondée en mars 2018, notre ONG s'est donnée pour mission de 
              démocratiser l'accès aux soins de santé de qualité en Côte d'Ivoire. 
              Nous croyons fermement que chaque personne mérite des soins 
              exceptionnels, indépendamment de sa situation financière.
            </p>

            {/* Key Points */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Notre Vision</h3>
                  <p className="text-muted-foreground">
                    Faire bénéficier aux populations des soins de rêve à de moindre coût, 
                    avec des équipements modernes et une approche humaine.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-medical/10 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-medical" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Notre Localisation</h3>
                  <p className="text-muted-foreground">
                    Basés à Abidjan, nous servons toute la Côte d'Ivoire avec 
                    des services de santé et beauté accessibles à tous.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Depuis 2018</h3>
                  <p className="text-muted-foreground">
                    Plus de 5 années d'expérience au service des communautés, 
                    avec un engagement constant pour l'excellence médicale.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="medical" size="lg">
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;