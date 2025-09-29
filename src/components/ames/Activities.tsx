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
      title: t('activities.training.title'),
      description: t('activities.training.description'),
      features: [
        "Soudure professionnelle",
        "Froid & Climatisation", 
        "Menuiserie Aluminium",
        "Couture et Broderie"
      ],
      color: "hope",
      image: professionalTraining
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: t('activities.social.title'),
      description: t('activities.social.description'),
      features: [
        "Construction d'infrastructures",
        "Projets communautaires",
        "Amélioration des quartiers",
        "Accès à l'eau potable"
      ],
      color: "trust",
      image: trainingCenter
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: t('activities.humanitarian.title'),
      description: t('activities.humanitarian.description'),
      features: [
        "Distribution de vivres",
        "Assistance médicale",
        "Soutien scolaire",
        "Aide d'urgence"
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
    <section id="activities" className="py-20 bg-gradient-subtle">
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
              className="p-6 text-center hover:shadow-hope transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-${stat.color}/10`}>
                <div className={`text-${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
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
                <Card className="p-8 h-full hover:shadow-vibrant transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-${activity.color}/10`}>
                    <div className={`text-${activity.color}`}>
                      {activity.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {activity.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {activity.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-${activity.color}`}></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline"
                    className={`border-${activity.color} text-${activity.color} hover:bg-${activity.color} hover:text-white transition-all`}
                    onClick={() => window.open('https://wa.me/2250778044369', '_blank')}
                  >
                    En savoir plus
                  </Button>
                </Card>
              </div>

              {/* Image */}
              {activity.image && (
                <div className={`animate-slide-in-right ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-hope"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-${activity.color}/20 to-transparent rounded-2xl`}></div>
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
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-hope transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nous rejoindre
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-trust transition-all"
                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
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