import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Building, HandHeart, GraduationCap, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import professionalTraining from "@/assets/professional-training.jpg";
import trainingCenter from "@/assets/training-center.jpg";

const Activities = () => {
  const { t } = useLanguage();

  const activities = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Éducation et Formation",
      description: "Construction d'écoles, d'universités et de centres de formation professionnelle pour offrir des opportunités d'apprentissage de qualité.",
      features: [
        "Construction d'écoles et universités",
        "Centres de formation professionnelle",
        "Formation culturelle islamique",
        "Orientation des élèves arabophones"
      ],
      color: "hope",
      image: professionalTraining
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Culture et Recherche",
      description: "Promotion de la culture, des valeurs et encouragement de la recherche pour le développement intellectuel et social.",
      features: [
        "Promotion de la culture et des valeurs",
        "Encouragement de la recherche",
        "Formation continue",
        "Préservation du patrimoine"
      ],
      color: "trust",
      image: trainingCenter
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Action Sociale et Humanitaire",
      description: "Assistance aux populations vulnérables, campagnes de sensibilisation et soutien aux personnes dans le besoin.",
      features: [
        "Assistance aux populations vulnérables",
        "Campagnes de sensibilisation sanitaire",
        "Lutte contre diverses maladies",
        "Soutien aux personnes défavorisées"
      ],
      color: "hope"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "500+",
      label: "Bénéficiaires formés",
      color: "hope"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      number: "4",
      label: "Spécialités techniques",
      color: "trust"
    },
    {
      icon: <Building className="w-6 h-6" />,
      number: "15+",
      label: "Projets réalisés",
      color: "hope"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      number: "10+",
      label: "Années d'expérience",
      color: "trust"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-ames-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('activities.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos programmes de formation, nos projets de développement et nos actions humanitaires
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-6 text-center hover:shadow-vibrant transition-all duration-500 animate-fade-in group border-2 hover:border-transparent relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 relative ${
                stat.color === 'hope' ? 'bg-hope/10 group-hover:bg-hope/20' : 'bg-trust/10 group-hover:bg-trust/20'
              }`}>
                <div className={stat.color === 'hope' ? 'text-hope' : 'text-trust'}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2 relative">{stat.number}</div>
              <div className="text-sm text-muted-foreground relative">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="space-y-16">
          {activities.map((activity, index) => (
            <div 
              key={activity.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`animate-slide-in-left ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Card className="p-8 h-full hover:shadow-vibrant transition-all duration-500 group border-2 hover:border-transparent relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 relative ${
                    activity.color === 'hope' ? 'bg-hope/10 group-hover:bg-hope/20' : 'bg-trust/10 group-hover:bg-trust/20'
                  }`}>
                    <div className={activity.color === 'hope' ? 'text-hope' : 'text-trust'}>
                      {activity.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 relative">
                    {activity.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed relative">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-3 mb-8 relative">
                    {activity.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.color === 'hope' ? 'bg-hope' : 'bg-trust'
                        }`}></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={activity.color === "hope" ? "outline-hope" : "outline-trust"}
                    onClick={() => window.open('https://wa.me/2250778044369', '_blank')}
                    className="relative"
                  >
                    En savoir plus
                  </Button>
                </Card>
              </div>

              {/* Image */}
              {activity.image && (
                <div className={`animate-slide-in-right ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative group">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-vibrant transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl group-hover:from-black/30 transition-colors duration-500"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-hero text-white">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez-nous dans notre mission
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Ensemble, nous pouvons créer un impact positif durable dans nos communautés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nous rejoindre
              </Button>
              <Button 
                variant="outline-white"
                onClick={() => window.open('https://paystack.shop/pay/fyx1vv7xc2', '_blank')}
              >
                Faire un don
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Activities;