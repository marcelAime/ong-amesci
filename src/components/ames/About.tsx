import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import forumOng from "@/assets/forum-ong-partenaires.jpg";
import colloqueGroup from "@/assets/colloque-large-group.jpg";
import ambassadeursMeeting from "@/assets/ambassadeurs-meeting.jpg";
import delegationQatar from "@/assets/delegation-qatar.jpg";
import examenOphtalmologique from "@/assets/examen-ophtalmologique.jpg";
import soinsMedicaux from "@/assets/soins-medicaux-ames.jpg";
import distributionAlimentaire1 from "@/assets/distribution-alimentaire-1.jpg";
import distributionAlimentaire2 from "@/assets/distribution-alimentaire-2.jpg";
import constructionPompe from "@/assets/construction-pompe.jpg";
import distributionRamadan from "@/assets/distribution-ramadan.jpg";

const About = () => {
  const { t } = useLanguage();

  const carouselImages = [
    { src: forumOng, alt: "Forum des ONG Partenaires AMES-CI" },
    { src: colloqueGroup, alt: "Colloque AMES-CI - Photo de groupe" },
    { src: ambassadeursMeeting, alt: "Réunion des Ambassadeurs de l'Espoir" },
    { src: delegationQatar, alt: "Délégation AMES-CI au Qatar" },
    { src: examenOphtalmologique, alt: "Examen ophtalmologique gratuit" },
    { src: soinsMedicaux, alt: "Soins médicaux AMES-CI" },
    { src: distributionAlimentaire1, alt: "Distribution alimentaire aux populations" },
    { src: distributionAlimentaire2, alt: "Aide alimentaire aux familles vulnérables" },
    { src: constructionPompe, alt: "Construction de pompe à eau" },
    { src: distributionRamadan, alt: "Distribution alimentaire pendant le Ramadan" }
  ];

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
          {/* Carousel */}
          <div className="animate-slide-in-left">
            <Carousel 
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: true,
                })
              ]}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 object-cover rounded-2xl shadow-vibrant transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/90 hover:bg-white shadow-soft border-none" />
              <CarouselNext className="right-4 bg-white/90 hover:bg-white shadow-soft border-none" />
            </Carousel>
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
                  L'ONG Ambassadeurs de l'Espoir en Côte d'Ivoire (AMES-CI) est une organisation de droit ivoirien 
                  à but non lucratif, inscrite dans la société civile. Apolitique et laïque, AMES-CI intervient 
                  dans les domaines de l'éducation, de la formation, de la culture, du social et de l'humanitaire.
                </p>
                <p>
                  <strong className="text-hope">Agréée par l'État de Côte d'Ivoire</strong> et publiée dans le 
                  journal officiel de la République, notre organisation œuvre pour le développement et le bien-être 
                  des communautés à travers plusieurs axes d'intervention stratégiques.
                </p>
                <p>
                  Basée à Treichville, Abidjan, nous nous engageons à construire des infrastructures éducatives, 
                  à promouvoir la culture et les valeurs, à accompagner les jeunes dans leur parcours académique 
                  et professionnel, et à apporter une assistance aux populations vulnérables et défavorisées.
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
              className="p-8 text-center hover:shadow-vibrant transition-all duration-500 animate-fade-in group border-2 hover:border-transparent relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 relative ${
                value.color === 'hope' ? 'bg-hope/10 group-hover:bg-hope/20' : 'bg-trust/10 group-hover:bg-trust/20'
              }`}>
                <div className={value.color === 'hope' ? 'text-hope' : 'text-trust'}>
                  {value.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 relative">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed relative">
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