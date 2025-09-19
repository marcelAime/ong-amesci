import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  Brain, 
  Heart, 
  Microscope, 
  Shield, 
  Stethoscope,
  Clock,
  DollarSign,
  Users
} from "lucide-react";
import medicalEquipment1 from "@/assets/medical-equipment-1.jpg";
import medicalEquipment2 from "@/assets/medical-equipment-2.jpg";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Consultations Générales",
      description: "Examens médicaux complets avec nos médecins expérimentés, disponibles 7j/7.",
      price: "Accessible",
      color: "primary"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Imagerie Médicale",
      description: "Scanner, IRM et radiologie avec équipements de dernière génération.",
      price: "Réduit",
      color: "medical"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiologie",
      description: "Soins cardiovasculaires spécialisés et examens cardiaques approfondis.",
      price: "Abordable",
      color: "accent"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Analyses de Laboratoire",
      description: "Tests sanguins, analyses biologiques et diagnostics précis.",
      price: "Économique",
      color: "primary"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Soins d'Urgence",
      description: "Prise en charge rapide des urgences médicales 24h/24.",
      price: "Urgent",
      color: "medical"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Médecine Préventive",
      description: "Programmes de prévention et de sensibilisation à la santé.",
      price: "Gratuit",
      color: "accent"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Disponible 24/7",
      description: "Service d'urgence permanent"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-medical" />,
      title: "Tarifs Réduits",
      description: "Soins de qualité accessibles"
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Équipe Experte",
      description: "Médecins qualifiés et dévoués"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <p className="text-primary font-semibold uppercase tracking-wide text-sm">
              Nos Services
            </p>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Des soins de{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              qualité supérieure
            </span>{" "}
            pour tous
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre gamme complète de services médicaux combine expertise, 
            technologie moderne et approche humaine pour votre bien-être.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="p-6 hover:shadow-medical transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-${service.color}/10 group-hover:scale-110 transition-transform`}>
                <div className={`text-${service.color}`}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-${service.color} font-semibold text-sm uppercase tracking-wide`}>
                  {service.price}
                </span>
                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  En savoir +
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Medical Equipment Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="animate-fade-in">
            <img
              src={medicalEquipment1}
              alt="Équipement médical moderne - Scanner"
              className="w-full h-64 object-cover rounded-xl shadow-soft"
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <img
              src={medicalEquipment2}
              alt="Équipement médical moderne - IRM"
              className="w-full h-64 object-cover rounded-xl shadow-soft"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button variant="hero" size="lg" className="shadow-medical">
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;