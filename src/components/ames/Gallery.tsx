import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import trainingGroup from "@/assets/ames-training-group.jpg";
import constructionTraining from "@/assets/ames-construction-training.jpg";
import youthSports from "@/assets/ames-youth-sports.jpg";
import partnershipEvent from "@/assets/ames-partnership-event.jpg";
import boardMeeting from "@/assets/ames-board-meeting.jpg";
import communityProject from "@/assets/ames-community-project.jpg";
import medicalDonation from "@/assets/ames-medical-donation.jpg";
import mediaInterview from "@/assets/ames-media-interview.jpg";
import conferenceAudience from "@/assets/ames-conference-audience.jpg";

const Gallery = () => {
  const { t } = useLanguage();

  const galleryItems = [
    {
      image: youthSports,
      title: "Tournoi de Football Jeunes",
      description: "Organisation d'activités sportives pour la jeunesse",
      category: "Événements"
    },
    {
      image: trainingGroup,
      title: "Formation Professionnelle",
      description: "Groupe de jeunes en formation technique",
      category: "Formation"
    },
    {
      image: constructionTraining,
      title: "Formation en Construction",
      description: "Apprentissage des métiers du bâtiment",
      category: "Formation"
    },
    {
      image: medicalDonation,
      title: "Don de Matériel Médical",
      description: "Soutien aux infrastructures de santé",
      category: "Humanitaire"
    },
    {
      image: communityProject,
      title: "Projet Communautaire",
      description: "Construction de puits à Bayola",
      category: "Projets"
    },
    {
      image: boardMeeting,
      title: "Réunion Stratégique",
      description: "Planification des activités",
      category: "Organisation"
    },
    {
      image: mediaInterview,
      title: "Couverture Médiatique",
      description: "Interview sur nos activités",
      category: "Événements"
    },
    {
      image: conferenceAudience,
      title: "Conférence Publique",
      description: "Sensibilisation communautaire",
      category: "Événements"
    },
    {
      image: partnershipEvent,
      title: "Soirée de Partenariat",
      description: "Rencontre avec nos partenaires",
      category: "Organisation"
    }
  ];

  const categories = ["Tous", "Formation", "Projets", "Humanitaire", "Événements", "Organisation"];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Galerie
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos activités et projets à travers ces images de nos interventions sur le terrain
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="hover:bg-hope hover:text-white transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.title}
              className="overflow-hidden hover:shadow-hope transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-hope transition-all"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir plus
                    </Button>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-hope/90 text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-hope text-hope hover:bg-hope hover:text-white transition-all"
          >
            Voir plus d'images
          </Button>
        </div>

        {/* Video Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nos Vidéos
            </h3>
            <p className="text-muted-foreground">
              Découvrez nos activités en mouvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="aspect-video bg-gradient-hope rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-sm">Formation Professionnelle</p>
                </div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Présentation de nos formations</h4>
              <p className="text-sm text-muted-foreground">Découvrez nos programmes de formation technique</p>
            </Card>

            <Card className="p-6">
              <div className="aspect-video bg-gradient-trust rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-sm">Projets Communautaires</p>
                </div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Impact dans la communauté</h4>
              <p className="text-sm text-muted-foreground">Nos réalisations et témoignages</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;