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
  Users,
  Star,
  Check
} from "lucide-react";
import medicalEquipment1 from "@/assets/medical-equipment-1.jpg";
import medicalEquipment2 from "@/assets/medical-equipment-2.jpg";
import { Helmet } from "react-helmet-async";

const ServicesPage = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Consultations Générales",
      description: "Examens médicaux complets avec nos médecins expérimentés, disponibles 7j/7 pour tous vos besoins de santé.",
      price: "À partir de 5,000 FCFA",
      features: ["Examen clinique complet", "Diagnostic précis", "Suivi personnalisé", "Conseils préventifs"],
      color: "primary",
      popular: false
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Imagerie Médicale",
      description: "Scanner, IRM et radiologie avec équipements de dernière génération pour des diagnostics précis.",
      price: "À partir de 15,000 FCFA",
      features: ["Scanner haute résolution", "IRM moderne", "Radiologie numérique", "Résultats rapides"],
      color: "medical",
      popular: true
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiologie",
      description: "Soins cardiovasculaires spécialisés et examens cardiaques approfondis avec équipe experte.",
      price: "À partir de 10,000 FCFA",
      features: ["Électrocardiogramme", "Échocardiographie", "Holter cardiaque", "Consultation spécialisée"],
      color: "accent",
      popular: false
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Analyses de Laboratoire",
      description: "Tests sanguins, analyses biologiques et diagnostics précis avec laboratoire certifié.",
      price: "À partir de 3,000 FCFA",
      features: ["Biochimie complète", "Hématologie", "Sérologie", "Bactériologie"],
      color: "primary",
      popular: false
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Soins d'Urgence",
      description: "Prise en charge rapide des urgences médicales 24h/24 avec équipe de garde permanente.",
      price: "Service prioritaire",
      features: ["Urgences 24h/24", "Équipe spécialisée", "Réanimation", "Transport médical"],
      color: "medical",
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Médecine Préventive",
      description: "Programmes de prévention et de sensibilisation à la santé pour toute la famille.",
      price: "Gratuit",
      features: ["Bilans de santé", "Vaccinations", "Dépistages", "Éducation sanitaire"],
      color: "accent",
      popular: false
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Disponible 24/7",
      description: "Service d'urgence permanent pour vos besoins critiques"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-medical" />,
      title: "Tarifs Réduits",
      description: "Soins de qualité à des prix accessibles à tous"
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Équipe Experte",
      description: "Médecins qualifiés et personnel dévoué à votre service"
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Technologie Moderne",
      description: "Équipements de pointe pour des diagnostics précis"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nos Services - O.N.G Santé | Soins médicaux complets</title>
        <meta name="description" content="Découvrez notre gamme complète de services médicaux : consultations, imagerie, cardiologie, urgences 24h/24. Tarifs accessibles et équipe experte." />
        <meta name="keywords" content="services médicaux, consultations, imagerie médicale, cardiologie, urgences, analyses laboratoire, prévention santé" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-medical">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Nos{" "}
                <span className="text-white/90">Services</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Une gamme complète de soins médicaux de qualité supérieure
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className={`p-6 hover:shadow-vibrant transition-all duration-300 animate-fade-in group relative ${
                    service.popular ? 'ring-2 ring-accent' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Populaire
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-${service.color}/10 group-hover:scale-110 transition-transform`}>
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
                  
                  <div className="mb-6">
                    <div className={`text-${service.color} font-bold text-lg mb-4`}>
                      {service.price}
                    </div>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant={service.popular ? "hero" : "outline"} 
                    className="w-full group-hover:shadow-soft transition-all"
                    onClick={() => window.open('https://wa.me/2250759950823', '_blank')}
                  >
                    Prendre rendez-vous
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Showcase */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Équipements{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Modernes
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nous investissons dans les technologies les plus avancées pour vous offrir des diagnostics précis
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="animate-fade-in">
                <Card className="overflow-hidden hover:shadow-vibrant transition-shadow">
                  <img
                    src={medicalEquipment1}
                    alt="Scanner médical haute résolution"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Scanner Haute Résolution</h3>
                    <p className="text-muted-foreground">
                      Imagerie médicale précise pour des diagnostics fiables et rapides
                    </p>
                  </div>
                </Card>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Card className="overflow-hidden hover:shadow-vibrant transition-shadow">
                  <img
                    src={medicalEquipment2}
                    alt="IRM dernière génération"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">IRM Dernière Génération</h3>
                    <p className="text-muted-foreground">
                      Technologie avancée pour des examens détaillés en toute sécurité
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pourquoi Nous{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Choisir
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-6 text-center hover:shadow-medical transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-accent">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Prendre Soin de Votre Santé ?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Contactez-nous dès maintenant pour prendre rendez-vous ou obtenir plus d'informations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-accent"
                  onClick={() => window.open('https://wa.me/2250759950823', '_blank')}
                >
                  Prendre rendez-vous
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-accent"
                  onClick={() => document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Faire un don
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;