import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/ames/Navbar";
import Footer from "@/components/ames/Footer";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import hopitalPorbouet from "@/assets/hopital-porbouet.jpg";
import coursCommences from "@/assets/cours-commences.jpg";
import rencontreCdides from "@/assets/rencontre-cdides.jpg";
import audienceMarino from "@/assets/audience-marino.jpg";
import colloqueArabophones1 from "@/assets/colloque-arabophones-1.jpg";
import colloqueArabophones2 from "@/assets/colloque-arabophones-2.jpg";
import colloqueArabophones3 from "@/assets/colloque-arabophones-3.jpg";

const NewsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const newsItems = [
    {
      id: 1,
      title: "Colloque sur l'insertion professionnelle des diplômés arabophones",
      excerpt: "L'ONG AMESCI a organisé un colloque d'envergure sur l'insertion professionnelle des diplômés arabophones en Côte d'Ivoire.",
      date: "20 Avril 2023",
      author: "Dr Touré Fétègue Mandjou",
      category: "Événements",
      readTime: "8 min",
      image: colloqueArabophones1,
      fullContent: "Les images du colloque témoignent de la participation active des différents acteurs du secteur éducatif et professionnel. Ce colloque historique a réuni plus de 200 participants, incluant des représentants du gouvernement, des institutions académiques, des organisations internationales et des diplômés arabophones. Les discussions ont porté sur les défis de l'insertion professionnelle, les opportunités du marché du travail, et les stratégies d'accompagnement pour faciliter l'intégration des diplômés arabophones dans le tissu économique ivoirien.",
      images: [colloqueArabophones1, colloqueArabophones2, colloqueArabophones3]
    },
    {
      id: 2,
      title: "Audience accordée par M. Bamba Anzoumana dit Marino",
      excerpt: "L'ONG Ambassadeurs de l'Espoir a eu l'honneur d'être reçue par M. Bamba Anzoumana dit Marino, parrain de la jeunesse ivoirienne.",
      date: "15 Mars 2024",
      author: "Équipe AMESCI",
      category: "Partenariat",
      readTime: "5 min",
      image: audienceMarino,
      fullContent: "M. Bamba Anzoumana dit Marino se distingue par sa générosité légendaire envers les plus démunis, son engagement constant auprès de la jeunesse, et sa parole d'honneur qui fait de lui un homme de confiance. Véritable mécène social, il incarne les valeurs de solidarité et d'espoir qui guident notre mission humanitaire. Dans les prochains jours, nous aurons le plaisir de vous annoncer une série complète d'actions sociales et humanitaires qui toucheront plusieurs villes, de Touba à Abidjan."
    },
    {
      id: 3,
      title: "Rencontre entre l'ONG AMESCI et la délégation CDIDES",
      excerpt: "L'ONG AMESCI a accueilli la délégation de la Chambre de Diplomatie Islamique pour le Développement Économique et Social.",
      date: "10 Mars 2024",
      author: "Direction",
      category: "Partenariat",
      readTime: "6 min",
      image: rencontreCdides,
      fullContent: "La réception s'est déroulée au centre de formation professionnelle d'AMESCI, situé à Abobo BC. Le Dr Touré Fétègue Mandjou, président d'AMESCI, a accordé une attention particulière aux propos tenus par Son Excellence Dr Mamady Moussa et sa délégation. Suite aux échanges, le président d'AMESCI a exprimé sa volonté absolue d'établir une collaboration fructueuse qui servira les intérêts de la nation ivoirienne. Cette rencontre marque une étape importante dans le renforcement des partenariats entre organisations œuvrant pour le développement socio-économique en Côte d'Ivoire."
    },
    {
      id: 4,
      title: "Don de matériel médical à l'hôpital de Port-Bouët",
      excerpt: "L'AMESCI a effectué un don important de matériel médical à l'hôpital de Port-Bouët pour améliorer les soins aux patients.",
      date: "5 Février 2024",
      author: "Équipe Humanitaire",
      category: "Humanitaire",
      readTime: "4 min",
      image: hopitalPorbouet,
      fullContent: "Dans le cadre de notre mission humanitaire, l'AMESCI a procédé à un don substantiel de matériel médical à l'hôpital de Port-Bouët. Ce don comprend des équipements essentiels permettant d'améliorer significativement la qualité des soins offerts aux patients. Cette action s'inscrit dans notre engagement continu à soutenir le système de santé ivoirien et à faciliter l'accès aux soins pour les populations les plus vulnérables."
    },
    {
      id: 5,
      title: "Lancement des cours de formation professionnelle 2024",
      excerpt: "Nouvelle session de formation en soudure, menuiserie aluminium et froid & climatisation au centre d'Abobo.",
      date: "15 Janvier 2024",
      author: "Direction Formation",
      category: "Formation",
      readTime: "5 min",
      image: coursCommences,
      fullContent: "Le centre de formation professionnelle d'AMESCI a ouvert ses portes pour une nouvelle session de formation. Plus de 150 jeunes bénéficient de formations qualifiantes en soudure, menuiserie aluminium, froid & climatisation et couture. Ces formations, entièrement gratuites, visent à doter les jeunes de compétences professionnelles recherchées sur le marché du travail, favorisant ainsi leur insertion professionnelle et leur autonomisation économique."
    }
  ];

  const categories = ["Tous", "Événements", "Partenariat", "Humanitaire", "Formation", "Projets"];

  const filteredNews = selectedCategory === "Tous" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Événements": "bg-trust/10 text-trust",
      "Partenariat": "bg-energy/10 text-energy",
      "Humanitaire": "bg-hope/10 text-hope",
      "Formation": "bg-accent/10 text-accent",
      "Projets": "bg-primary/10 text-primary"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

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
              Toutes les Actualités
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Restez informé de toutes nos actions et événements
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

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover:shadow-hope transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {item.fullContent}
                    </p>
                    {item.images && item.images.length > 1 && (
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {item.images.slice(1).map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`${item.title} ${idx + 2}`}
                            className="w-full h-20 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </div>
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

export default NewsPage;
