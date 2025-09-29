import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: "Lancement du nouveau programme de formation en climatisation",
      excerpt: "Nous sommes fiers d'annoncer le lancement de notre nouveau programme de formation spécialisé en froid et climatisation, avec des équipements modernes.",
      date: "15 Mars 2024",
      author: "Équipe AMES-CI",
      category: "Formation",
      readTime: "3 min de lecture",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Distribution de matériel scolaire dans 5 écoles d'Abidjan",
      excerpt: "Dans le cadre de notre programme d'aide à l'éducation, nous avons distribué cahiers, stylos et uniformes à 200 élèves défavorisés.",
      date: "8 Mars 2024",
      author: "Équipe Humanitaire",
      category: "Humanitaire",
      readTime: "2 min de lecture",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Partenariat avec l'ANPE pour l'insertion professionnelle",
      excerpt: "Signature d'un accord de partenariat avec l'Agence Nationale Pour l'Emploi pour faciliter l'insertion professionnelle de nos apprenants.",
      date: "1 Mars 2024",
      author: "Direction",
      category: "Partenariat",
      readTime: "4 min de lecture",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Inauguration du nouveau centre de couture à Treichville",
      excerpt: "Ouverture officielle de notre centre de formation en couture et broderie, équipé de 20 machines industrielles modernes.",
      date: "22 Février 2024",
      author: "Équipe AMES-CI",
      category: "Infrastructure",
      readTime: "3 min de lecture",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Campagne de sensibilisation sur l'hygiène en milieu scolaire",
      excerpt: "Organisation d'une campagne de sensibilisation dans 10 écoles primaires sur l'importance de l'hygiène et la prévention des maladies.",
      date: "18 Février 2024",
      author: "Équipe Santé",
      category: "Santé",
      readTime: "2 min de lecture",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Formation de 50 jeunes en menuiserie aluminium",
      excerpt: "Clôture de la 3ème session de formation en menuiserie aluminium avec un taux de réussite de 95% et 80% d'insertion professionnelle.",
      date: "10 Février 2024",
      author: "Formateurs",
      category: "Formation",
      readTime: "3 min de lecture",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["Tous", "Formation", "Humanitaire", "Partenariat", "Infrastructure", "Santé"];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Formation": "bg-hope/10 text-hope",
      "Humanitaire": "bg-trust/10 text-trust",
      "Partenariat": "bg-purple-100 text-purple-700",
      "Infrastructure": "bg-orange-100 text-orange-700",
      "Santé": "bg-green-100 text-green-700"
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="news" className="py-20 bg-gradient-subtle">
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
              variant="outline"
              size="sm"
              className="hover:bg-hope hover:text-white transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden hover:shadow-hope transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="h-64 lg:h-auto bg-gradient-hero"></div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge className={getCategoryColor("Formation")}>
                  Formation
                </Badge>
                <span className="text-sm text-muted-foreground">Article à la une</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
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
              className="overflow-hidden hover:shadow-trust transition-all duration-300 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-hero relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
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
                  
                  <Button variant="ghost" size="sm" className="text-hope hover:text-hope/80 p-0">
                    Lire plus
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
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
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-hope transition-all"
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