import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import formationProfessionnelle from "@/assets/formation-professionnelle.jpg";
import professionalTraining from "@/assets/professional-training.jpg";
import trainingCenter from "@/assets/training-center.jpg";
import communityDonation from "@/assets/community-donation.jpg";
import constructionProject from "@/assets/construction-project.jpg";
import youthSports from "@/assets/ames-youth-sports.jpg";
import medicalDonation from "@/assets/ames-medical-donation.jpg";
import boardMeeting from "@/assets/ames-board-meeting.jpg";
import presidentSpeaking1 from "@/assets/president-speaking-1.jpg";
import presidentSpeaking2 from "@/assets/president-speaking-2.jpg";
import colloqueAudience from "@/assets/colloque-audience.jpg";
import colloquePanel from "@/assets/colloque-panel.jpg";
import presidentMeeting1 from "@/assets/president-meeting-1.jpg";
import presidentOfficial from "@/assets/president-official.jpg";
import teamPartenaires from "@/assets/team-partenaires.jpg";

const Gallery = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryCategories = [
    {
      title: "Formation Professionnelle",
      items: [
        { image: formationProfessionnelle, title: "Formation en Soudure", description: "Cours pratiques de soudure" },
        { image: professionalTraining, title: "Menuiserie Aluminium", description: "Formation complète" },
        { image: trainingCenter, title: "Centre Moderne", description: "Infrastructure de formation" },
      ]
    },
    {
      title: "Action Humanitaire",
      items: [
        { image: communityDonation, title: "Distribution de Vivres", description: "Aide aux communautés" },
        { image: medicalDonation, title: "Don de Matériel Médical", description: "Soutien à la santé" },
        { image: constructionProject, title: "Infrastructures", description: "Projets de construction" },
      ]
    },
    {
      title: "Colloque Arabophone",
      items: [
        { image: presidentSpeaking1, title: "Discours Président", description: "Allocution officielle" },
        { image: presidentSpeaking2, title: "Présentation AMESCI", description: "Vision et projets" },
        { image: colloqueAudience, title: "Audience Engagée", description: "Participation active" },
        { image: colloquePanel, title: "Panel Discussion", description: "Débat d'experts" },
      ]
    },
    {
      title: "Gouvernance & Partenariats",
      items: [
        { image: boardMeeting, title: "Réunion Stratégique", description: "Planification" },
        { image: presidentMeeting1, title: "Coordination", description: "Activités AMESCI" },
        { image: presidentOfficial, title: "Représentation", description: "Événements majeurs" },
        { image: teamPartenaires, title: "Collaboration", description: "Partenaires clés" },
      ]
    },
    {
      title: "Activités Jeunesse",
      items: [
        { image: youthSports, title: "Sports & Loisirs", description: "Programme jeunesse" },
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryCategories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryCategories.length]);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </div>

        {/* Animated Category Slider */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            {galleryCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`transition-all duration-1000 ${
                  currentSlide === catIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="bg-gradient-to-r from-accent/10 to-hope/10 p-6 rounded-t-2xl">
                  <h3 className="text-2xl font-bold text-foreground text-center">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-background/50 rounded-b-2xl">
                  {category.items.map((item, itemIndex) => (
                    <Card 
                      key={itemIndex}
                      className="overflow-hidden hover:shadow-vibrant transition-all duration-300 group animate-fade-in"
                      style={{ animationDelay: `${itemIndex * 100}ms` }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-xs">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-accent' : 'w-2 bg-muted'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/gallery')}
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
          >
            {t('gallery.viewMore')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
