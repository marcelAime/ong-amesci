import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import teamMeeting from "@/assets/team-meeting.jpg";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t('about.mission.title'),
      description: t('about.mission.text'),
      color: "hope"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: t('about.vision.title'),
      description: t('about.vision.text'),
      color: "trust"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('about.values.title'),
      description: t('about.values.text'),
      color: "hope"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="animate-slide-in-left">
            <img
              src={teamMeeting}
              alt="Équipe AMES-CI en réunion"
              className="w-full h-96 object-cover rounded-2xl shadow-hope"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-hope rounded-full"></div>
                <p className="text-hope font-semibold uppercase tracking-wide text-sm">
                  Notre Histoire
                </p>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Une Organisation{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Engagée
                </span>
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'ONG Ambassadeurs de l'Espoir pour des Activités du Bien-être et Développement Social (AMES-CI) 
                  est une organisation à but non lucratif dédiée à l'amélioration des conditions de vie des 
                  communautés en Côte d'Ivoire.
                </p>
                <p>
                  Basée à Treichville, Abidjan, notre organisation se concentre sur la formation professionnelle, 
                  le développement social et l'assistance humanitaire pour créer un impact positif durable.
                </p>
                <p>
                  Nous croyons fermement que chaque individu mérite l'opportunité de réaliser son potentiel et 
                  de contribuer au développement de sa communauté.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="p-8 text-center hover:shadow-hope transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-${value.color}/10 group-hover:scale-110 transition-transform`}>
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
  );
};

export default About;