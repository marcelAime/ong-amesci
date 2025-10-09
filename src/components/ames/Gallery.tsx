import { Card } from "@/components/ui/card";
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
import colloqueGroupPhoto from "@/assets/colloque-group-photo.jpg";
import presidentMeeting1 from "@/assets/president-meeting-1.jpg";
import presidentMeeting2 from "@/assets/president-meeting-2.jpg";
import presidentOfficial from "@/assets/president-official.jpg";
import teamPartenaires from "@/assets/team-partenaires.jpg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const newPosition = prev + 1;
        // Reset to 0 when we've scrolled through one complete set (17 images * 320px width)
        if (newPosition >= 17 * 320) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const allImages = [
    { image: formationProfessionnelle, title: "Formation en Soudure" },
    { image: professionalTraining, title: "Menuiserie Aluminium" },
    { image: trainingCenter, title: "Centre Moderne" },
    { image: communityDonation, title: "Distribution de Vivres" },
    { image: medicalDonation, title: "Don de Matériel Médical" },
    { image: constructionProject, title: "Infrastructures" },
    { image: presidentSpeaking1, title: "Discours Président" },
    { image: presidentSpeaking2, title: "Présentation AMESCI" },
    { image: colloqueAudience, title: "Audience Engagée" },
    { image: colloquePanel, title: "Panel Discussion" },
    { image: colloqueGroupPhoto, title: "Photo de Groupe" },
    { image: boardMeeting, title: "Réunion Stratégique" },
    { image: presidentMeeting1, title: "Coordination" },
    { image: presidentMeeting2, title: "Réunion de Travail" },
    { image: presidentOfficial, title: "Représentation" },
    { image: teamPartenaires, title: "Collaboration" },
    { image: youthSports, title: "Sports & Loisirs" },
  ];

  // Double the array for seamless looping
  const displayImages = [...allImages, ...allImages];

  return (
    <section id="gallery" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Continuous Scrolling Gallery */}
        <div className="relative">
          <div 
            className="flex gap-6 transition-transform duration-100 ease-linear"
            style={{ 
              transform: `translateX(-${currentSlide}px)`,
              width: `${displayImages.length * 320}px`
            }}
          >
            {displayImages.map((item, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 w-72 overflow-hidden hover:shadow-vibrant transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
