import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import colloqueGroupPhoto from "@/assets/colloque-group-photo.jpg";
import presidentMeeting1 from "@/assets/president-meeting-1.jpg";
import presidentMeeting2 from "@/assets/president-meeting-2.jpg";
import presidentOfficial from "@/assets/president-official.jpg";
import teamPartenaires from "@/assets/team-partenaires.jpg";
import audienceMarino from "@/assets/audience-marino.jpg";
import audienceYahaya from "@/assets/audience-yahaya.jpg";
import seminaireCdides from "@/assets/seminaire-cdides.jpg";
import campagneOphtalmo1 from "@/assets/campagne-ophtalmo-1.jpg";
import campagneOphtalmo2 from "@/assets/campagne-ophtalmo-2.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const allImages = [
    { 
      image: formationProfessionnelle, 
      title: "Formation Professionnelle",
      event: "Programme de Formation en Soudure - Développement des compétences techniques"
    },
    { 
      image: professionalTraining, 
      title: "Menuiserie Aluminium",
      event: "Atelier de Formation - Menuiserie et travail de l'aluminium"
    },
    { 
      image: trainingCenter, 
      title: "Centre de Formation Moderne",
      event: "Nos Infrastructures - Centre équipé pour l'apprentissage"
    },
    { 
      image: communityDonation, 
      title: "Distribution de Vivres",
      event: "Action Humanitaire - Soutien aux communautés vulnérables"
    },
    { 
      image: medicalDonation, 
      title: "Don de Matériel Médical",
      event: "Santé pour Tous - Distribution d'équipements médicaux"
    },
    { 
      image: constructionProject, 
      title: "Projet d'Infrastructure",
      event: "Développement Communautaire - Construction d'installations"
    },
    { 
      image: presidentSpeaking1, 
      title: "Discours du Président",
      event: "Événement Officiel - Allocution présidentielle"
    },
    { 
      image: presidentSpeaking2, 
      title: "Présentation AMES-CI",
      event: "Conférence - Présentation des activités de l'ONG"
    },
    { 
      image: colloqueAudience, 
      title: "Audience Engagée",
      event: "Colloque - Participation active du public"
    },
    { 
      image: colloquePanel, 
      title: "Panel de Discussion",
      event: "Débat Public - Échanges avec les experts"
    },
    { 
      image: colloqueGroupPhoto, 
      title: "Photo de Groupe",
      event: "Colloque AMES-CI - Rassemblement des participants"
    },
    { 
      image: boardMeeting, 
      title: "Réunion Stratégique",
      event: "Conseil d'Administration - Planification des actions"
    },
    { 
      image: presidentMeeting1, 
      title: "Coordination",
      event: "Réunion de Coordination - Planification des projets"
    },
    { 
      image: presidentMeeting2, 
      title: "Réunion de Travail",
      event: "Session de Travail - Suivi des activités"
    },
    { 
      image: presidentOfficial, 
      title: "Représentation Officielle",
      event: "Événement Officiel - Représentation de l'ONG"
    },
    { 
      image: teamPartenaires, 
      title: "Collaboration avec Partenaires",
      event: "Partenariat - Rencontre avec les collaborateurs"
    },
    { 
      image: youthSports, 
      title: "Sports et Loisirs pour Jeunes",
      event: "Activités Sportives - Promotion du sport chez les jeunes"
    },
    {
      image: audienceMarino,
      title: "Audience M. Bamba Anzoumana dit Marino",
      event: "L'ONG Ambassadeurs de l'Espoir en Côte d'Ivoire a eu l'honneur d'être reçue en audience par M. Bamba Anzoumana dit Marino, figure emblématique et parrain de la jeunesse ivoirienne"
    },
    {
      image: audienceYahaya,
      title: "Audience Professeur Yahaya Karamoko",
      event: "Une délégation de l'ONG Ambassadeurs de l'Espoir en Côte d'Ivoire, conduite par son Président Dr Touré Fetegue Mandjou, a été reçue en audience par le Professeur Yahaya Karamoko, Vice-président de l'UNA chargé de la Recherche et des Relations Extérieures"
    },
    {
      image: seminaireCdides,
      title: "Séminaire CDIDES",
      event: "Les Ambassadeurs d'Espoir Côte d'Ivoire, sous la direction de leur président, Dr Touré Fetegue Mandjou et Charger de la communication Doumbia alassane ont participé à un séminaire scientifique sur la diplomatie économique, organisé par la Fondation CDIDES"
    },
    {
      image: campagneOphtalmo1,
      title: "Campagne Chirurgie Ophtalmologique",
      event: "Campagne de chirurgie ophtalmologique gratuite - 1 000 consultations et 300 opérations réalisées en partenariat avec le PNSO et le Ministère de la Santé"
    },
    {
      image: campagneOphtalmo2,
      title: "Soins Oculaires Gratuits",
      event: "Campagne de santé oculaire - Consultations et soins gratuits pour les populations vulnérables"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Auto-scroll every second
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  return (
    <section id="gallery" className="py-20 bg-energy-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galerie{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Photos
            </span>
          </h2>
          <p className="text-muted-foreground">Découvrez nos activités et réalisations</p>
        </div>

        {/* Gallery Carousel */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <Card className="overflow-hidden border-0 shadow-vibrant">
              <div className="relative">
                <img
                  src={allImages[currentIndex].image}
                  alt={allImages[currentIndex].title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {allImages[currentIndex].title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {allImages[currentIndex].event}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-accent' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
