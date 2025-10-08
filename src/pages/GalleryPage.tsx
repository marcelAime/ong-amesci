import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ames/Navbar";
import Footer from "@/components/ames/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import formationProfessionnelle from "@/assets/formation-professionnelle.jpg";
import professionalTraining from "@/assets/professional-training.jpg";
import trainingCenter from "@/assets/training-center.jpg";
import communityDonation from "@/assets/community-donation.jpg";
import constructionProject from "@/assets/construction-project.jpg";
import youthSports from "@/assets/ames-youth-sports.jpg";
import medicalDonation from "@/assets/ames-medical-donation.jpg";
import boardMeeting from "@/assets/ames-board-meeting.jpg";
import communityProject from "@/assets/ames-community-project.jpg";
import conferenceAudience from "@/assets/ames-conference-audience.jpg";
import constructionTraining from "@/assets/ames-construction-training.jpg";
import trainingGroup from "@/assets/ames-training-group.jpg";
import partnershipEvent from "@/assets/ames-partnership-event.jpg";
import presidentSpeaking1 from "@/assets/president-speaking-1.jpg";
import presidentSpeaking2 from "@/assets/president-speaking-2.jpg";
import colloqueAudience from "@/assets/colloque-audience.jpg";
import colloquePanel from "@/assets/colloque-panel.jpg";
import presidentMeeting1 from "@/assets/president-meeting-1.jpg";
import presidentMeeting2 from "@/assets/president-meeting-2.jpg";
import presidentOfficial from "@/assets/president-official.jpg";
import teamPartenaires from "@/assets/team-partenaires.jpg";
import colloqueGroupPhoto from "@/assets/colloque-group-photo.jpg";

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const galleryItems = [
    { image: formationProfessionnelle, title: "Formation Professionnelle", description: "Cours de formation en soudure", category: "Formation" },
    { image: professionalTraining, title: "Session de Formation", description: "Formation en menuiserie aluminium", category: "Formation" },
    { image: trainingCenter, title: "Centre de Formation", description: "Infrastructure moderne de formation", category: "Formation" },
    { image: communityDonation, title: "Don Communautaire", description: "Distribution de vivres aux communautés", category: "Humanitaire" },
    { image: constructionProject, title: "Projet de Construction", description: "Construction d'infrastructures communautaires", category: "Projets" },
    { image: youthSports, title: "Activités Sportives Jeunesse", description: "Programme de développement sportif", category: "Événements" },
    { image: medicalDonation, title: "Don de Matériel Médical", description: "Soutien au système de santé", category: "Humanitaire" },
    { image: boardMeeting, title: "Réunion du Conseil", description: "Planification stratégique", category: "Organisation" },
    { image: communityProject, title: "Projet Communautaire", description: "Développement local", category: "Projets" },
    { image: conferenceAudience, title: "Audience de Conférence", description: "Sensibilisation communautaire", category: "Événements" },
    { image: constructionTraining, title: "Formation en Construction", description: "Apprentissage des métiers du bâtiment", category: "Formation" },
    { image: trainingGroup, title: "Groupe de Formation", description: "Session collective de formation", category: "Formation" },
    { image: partnershipEvent, title: "Soirée de Partenariat", description: "Rencontre avec nos partenaires", category: "Organisation" },
    { image: presidentSpeaking1, title: "Discours du Président", description: "Allocution lors du colloque arabophone", category: "Événements" },
    { image: presidentSpeaking2, title: "Intervention Présidentielle", description: "Présentation des projets AMESCI", category: "Événements" },
    { image: colloqueAudience, title: "Audience au Colloque", description: "Participants au colloque arabophone", category: "Événements" },
    { image: colloquePanel, title: "Panel de Discussion", description: "Débat sur l'insertion professionnelle", category: "Événements" },
    { image: presidentMeeting1, title: "Réunion Présidentielle", description: "Coordination des activités", category: "Organisation" },
    { image: presidentMeeting2, title: "Session de Travail", description: "Planification stratégique", category: "Organisation" },
    { image: presidentOfficial, title: "Représentation Officielle", description: "Présence aux événements majeurs", category: "Organisation" },
    { image: teamPartenaires, title: "Équipe et Partenaires", description: "Collaboration interorganisationnelle", category: "Partenariat" },
    { image: colloqueGroupPhoto, title: "Photo de Groupe", description: "Participants au colloque arabophone", category: "Événements" }
  ];

  const categories = ["Tous", "Formation", "Projets", "Humanitaire", "Événements", "Organisation", "Partenariat"];

  const filteredItems = selectedCategory === "Tous" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-8"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Galerie Complète
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez toutes nos activités et projets à travers ces images
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-hope hover:bg-hope/90" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-hope transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
