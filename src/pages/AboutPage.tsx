import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, MapPin, Target, Users, Award, Stethoscope } from "lucide-react";
import medicalCaduceus from "@/assets/medical-caduceus.jpg";
import heroImage from "@/assets/hero-medical-team.jpg";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "1000+", label: "Patients soignés", color: "primary" },
    { icon: <Award className="w-8 h-8" />, number: "5+", label: "Années d'expérience", color: "accent" },
    { icon: <Stethoscope className="w-8 h-8" />, number: "24/7", label: "Service d'urgence", color: "medical" },
    { icon: <Heart className="w-8 h-8" />, number: "100%", label: "Engagement qualité", color: "primary" },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassion",
      description: "Nous traitons chaque patient avec empathie et respect, comme un membre de notre famille.",
      color: "accent"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "Nous nous efforçons constamment d'offrir les meilleurs soins avec les technologies les plus avancées.",
      color: "primary"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessibilité",
      description: "Nous rendons les soins de qualité accessibles à tous, indépendamment du niveau socio-économique.",
      color: "medical"
    }
  ];

  return (
    <>
      <Helmet>
        <title>À propos - O.N.G Santé | Notre mission humanitaire</title>
        <meta name="description" content="Découvrez l'histoire de l'O.N.G Santé, fondée en 2018 pour démocratiser l'accès aux soins de qualité en Côte d'Ivoire. Notre équipe, nos valeurs, notre mission." />
        <meta name="keywords" content="à propos ONG santé, mission humanitaire, équipe médicale, histoire, valeurs, Côte d'Ivoire" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-vibrant">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Notre Mission{" "}
                <span className="text-white/90">Humanitaire</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Depuis 2018, nous transformons l'accès aux soins en Côte d'Ivoire
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-primary font-semibold uppercase tracking-wide text-sm">
                    Notre Histoire
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Une vision{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    transformatrice
                  </span>
                </h2>
                
                <div className="space-y-4 text-muted-foreground mb-8">
                  <p>
                    En mars 2018, un groupe de professionnels de santé passionnés a fondé l'O.N.G Santé 
                    avec une vision claire : démocratiser l'accès aux soins de qualité supérieure en Côte d'Ivoire.
                  </p>
                  <p>
                    Face aux défis d'accessibilité aux soins de santé dans notre pays, nous avons décidé 
                    d'agir concrètement en créant une structure qui combine excellence médicale et tarifs abordables.
                  </p>
                  <p>
                    Aujourd'hui, nous sommes fiers d'avoir soigné plus de 1000 patients et d'avoir établi 
                    un modèle durable de soins de santé communautaires.
                  </p>
                </div>

                <Button variant="hero" size="lg" onClick={() => document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' })}>
                  Faire un don
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="animate-fade-in">
                <div className="relative">
                  <img
                    src={heroImage}
                    alt="Équipe médicale de l'ONG Santé"
                    className="w-full h-96 object-cover rounded-2xl shadow-vibrant"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notre Impact en{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Chiffres
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="p-8 text-center hover:shadow-vibrant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-${stat.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className={`text-${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nos{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Valeurs
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident notre action quotidienne au service de votre santé
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="p-8 hover:shadow-medical transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-12 h-12 bg-${value.color}/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <div className={`text-${value.color}`}>
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rejoignez Notre Mission
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Ensemble, construisons un avenir où chacun a accès aux soins qu'il mérite
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Faire un don
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://wa.me/2250759950823', '_blank')}
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;