import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import hopitalPorbouet from "@/assets/hopital-porbouet.jpg";
import coursCommences from "@/assets/cours-commences.jpg";
import rencontreCdides from "@/assets/rencontre-cdides.jpg";
import audienceMarino from "@/assets/audience-marino.jpg";
import colloqueArabophones1 from "@/assets/colloque-arabophones-1.jpg";
import colloqueArabophones2 from "@/assets/colloque-arabophones-2.jpg";
import colloqueArabophones3 from "@/assets/colloque-arabophones-3.jpg";

const News = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 1,
      title: "Colloque sur l'insertion professionnelle des diplômés arabophones",
      excerpt: "L'ONG AMESCI a organisé un colloque d'envergure sur l'insertion professionnelle des diplômés arabophones en Côte d'Ivoire, réunissant experts et parties prenantes.",
      date: "20 Avril 2023",
      author: "Dr Touré Fétègue Mandjou",
      category: "Événements",
      readTime: "8 min de lecture",
      image: colloqueArabophones1,
      fullContent: "Les images du colloque sur l'insertion professionnelle des diplômés arabophones en Côte d'Ivoire témoignent de la participation active des différents acteurs du secteur éducatif et professionnel.",
      images: [colloqueArabophones1, colloqueArabophones2, colloqueArabophones3]
    },
    {
      id: 2,
      title: "Audience accordée par M. Bamba Anzoumana dit Marino",
      excerpt: "L'ONG Ambassadeurs de l'Espoir a eu l'honneur d'être reçue par M. Bamba Anzoumana dit Marino, figure emblématique et parrain de la jeunesse ivoirienne.",
      date: "15 Mars 2024",
      author: "Équipe AMESCI",
      category: "Partenariat",
      readTime: "5 min de lecture",
      image: audienceMarino,
      fullContent: `M. Bamba Anzoumana dit Marino se distingue par :
- Sa générosité légendaire envers les plus démunis
- Son engagement constant auprès de la jeunesse
- Sa parole d'honneur qui fait de lui un homme de confiance
- Son dévouement remarquable pour le développement social
- Sa vision philanthropique qui inspire et mobilise

Véritable mécène social, il incarne les valeurs de solidarité et d'espoir qui guident notre mission humanitaire.

Dans les prochains jours, nous aurons le plaisir de vous annoncer une série complète d'actions sociales et humanitaires qui toucheront plusieurs villes, de Touba à Abidjan.

Au nom de l'ONG Ambassadeurs de l'Espoir en Côte d'Ivoire, son président, le Docteur Touré Fetegue Mandjou, tient à exprimer ses sincères remerciements à M. Bamba Anzoumana dit Marino pour son soutien précieux.`
    },
    {
      id: 3,
      title: "Rencontre entre l'ONG AMESCI et la délégation CDIDES",
      excerpt: "L'ONG Ambassadeurs de l'Espoir en Côte d'Ivoire (AMESCI) a accueilli la délégation de la Chambre de Diplomatie Islamique pour le Développement Économique et Social.",
      date: "10 Mars 2024",
      author: "Direction",
      category: "Partenariat",
      readTime: "6 min de lecture",
      image: rencontreCdides,
      fullContent: `La réception s'est déroulée au centre de formation professionnelle d'AMESCI, situé à Abobo BC, à proximité de l'école de la gendarmerie.

Le Dr Touré Fétègue Mandjou, président d'AMESCI, a accordé une attention particulière aux propos tenus par Son Excellence Dr Mamady Moussa et sa délégation.

Suite aux échanges, le président d'AMESCI a exprimé sa volonté absolue d'établir une collaboration fructueuse qui servira les intérêts de la nation ivoirienne.

La rencontre s'est achevée par les remerciements du président d'AMESCI adressés à la CDIDES pour cette marque de considération et cette initiative de rapprochement.

Cette rencontre marque une étape importante dans le renforcement des partenariats entre organisations œuvrant pour le développement socio-économique en Côte d'Ivoire.`
    },
    {
      id: 4,
      title: "Les cours ont bien commencé",
      excerpt: "Le nouveau semestre de formation professionnelle a débuté avec succès dans notre centre. Les apprenants sont motivés et engagés dans leurs parcours.",
      date: "5 Mars 2024",
      author: "Équipe Formation",
      category: "Formation",
      readTime: "3 min de lecture",
      image: coursCommences
    },
    {
      id: 5,
      title: "Visite à l'hôpital général de Porbouet",
      excerpt: "L'équipe d'AMESCI a rendu visite aux patients de l'hôpital général de Porbouet dans le cadre de nos actions humanitaires de soutien aux personnes vulnérables.",
      date: "28 Février 2024",
      author: "Équipe Humanitaire",
      category: "Humanitaire",
      readTime: "4 min de lecture",
      image: hopitalPorbouet
    }
  ];

  const categories = ["Tous", "Formation", "Humanitaire", "Partenariat", "Événements"];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Formation": "bg-hope/10 text-hope",
      "Humanitaire": "bg-trust/10 text-trust",
      "Partenariat": "bg-purple-100 text-purple-700",
      "Événements": "bg-orange-100 text-orange-700"
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="news" className="py-20 bg-ames-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Actualités & Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suivez nos dernières actualités, événements et réalisations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline-hope"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden hover:shadow-vibrant transition-all duration-500 group border-2 hover:border-transparent">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="h-64 lg:h-auto relative overflow-hidden">
              <img 
                src={newsItems[0].image} 
                alt={newsItems[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>
            <div className="p-8 relative">
              <div className="flex items-center gap-4 mb-4">
                <Badge className={getCategoryColor(newsItems[0].category)}>
                  {newsItems[0].category}
                </Badge>
                <span className="text-sm text-muted-foreground">Article à la une</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-hope transition-colors">
                {newsItems[0].title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {newsItems[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {newsItems[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {newsItems[0].author}
                  </div>
                </div>
                
                <Button variant="ghost" className="text-hope hover:text-hope/80">
                  Lire l'article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(1).map((article, index) => (
            <Card 
              key={article.id}
              className="overflow-hidden hover:shadow-vibrant transition-all duration-500 animate-fade-in group cursor-pointer border-2 hover:border-transparent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-hope transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-hope hover:text-hope/80 p-0 group-hover:translate-x-1 transition-transform">
                    Lire plus
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline-hope"
            size="lg"
            onClick={() => navigate('/news')}
          >
            Voir toutes les actualités
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 p-8 bg-gradient-hero text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Restez informé de nos actualités
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières nouvelles et événements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white/40"
            />
            <Button 
              variant="outline-white"
            >
              S'inscrire
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default News;