import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Stethoscope, Home, Gift, Star, CreditCard } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DonationPage = () => {
  const impactItems = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "5,000 FCFA",
      description: "Permet une consultation médicale complète pour un patient démuni",
      color: "primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "15,000 FCFA",
      description: "Finance un examen d'imagerie médicale (radiographie ou échographie)",
      color: "medical"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "50,000 FCFA",
      description: "Couvre les frais d'une intervention chirurgicale mineure",
      color: "accent"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "100,000 FCFA",
      description: "Permet d'équiper une salle de consultation avec du matériel médical",
      color: "primary"
    }
  ];

  const handleDonate = () => {
    window.open('https://paystack.shop/pay/fyx1vv7xc2', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Faire un Don - O.N.G Santé | Soutenez notre mission</title>
        <meta name="description" content="Soutenez l'O.N.G Santé en faisant un don. Chaque contribution aide à rendre les soins médicaux accessibles aux populations défavorisées de Côte d'Ivoire." />
        <meta name="keywords" content="don ONG santé, donation, soutien médical, aide humanitaire, Côte d'Ivoire, santé accessible" />
        <link rel="canonical" href="/donation" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Faire un{" "}
                <span className="text-white/90">Don</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Votre générosité transforme des vies et rend les soins accessibles à tous
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                L'Impact de Votre{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Générosité
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Chaque don, aussi petit soit-il, fait une différence concrète dans la vie de nos patients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {impactItems.map((item, index) => (
                <Card 
                  key={item.title}
                  className="p-6 hover:shadow-vibrant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <div className={`text-${item.color}`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className={`text-lg font-bold text-${item.color} mb-2 text-center`}>
                    {item.title}
                  </div>
                  <p className="text-muted-foreground text-sm text-center">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation CTA */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 shadow-vibrant text-center">
                <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Faites Votre Don
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Choisissez le montant de votre contribution et aidez-nous à sauver des vies. 
                  Chaque geste compte !
                </p>

                <Button
                  disabled
                  variant="hero"
                  size="lg"
                  className="text-lg h-16 px-12"
                >
                  <CreditCard className="w-6 h-6 mr-3" />
                  Faire un don maintenant
                </Button>

                <p className="text-sm text-muted-foreground mt-6">
                  Paiement 100% sécurisé via Paystack. Vous recevrez un reçu par email.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Témoignages de{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Reconnaissance
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie K.",
                  role: "Mère de famille",
                  message: "Grâce aux donateurs, mon fils a pu recevoir les soins qu'il méritait. Merci du fond du cœur !",
                  rating: 5
                },
                {
                  name: "Dr. Kouassi",
                  role: "Médecin bénévole",
                  message: "Chaque don nous permet d'acquérir du matériel médical et de soigner plus de patients dans le besoin.",
                  rating: 5
                },
                {
                  name: "Jean-Baptiste M.",
                  role: "Patient soigné",
                  message: "L'ONG Santé m'a sauvé la vie avec des soins de qualité à prix abordable. Une vraie bénédiction !",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card 
                  key={testimonial.name}
                  className="p-6 hover:shadow-medical transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "{testimonial.message}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-medical">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ensemble, Changeons des Vies
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Votre contribution fait la différence. Rejoignez notre communauté de donateurs.
              </p>
              <Button
                onClick={handleDonate}
                className="bg-white text-primary hover:bg-white/90 text-lg h-14 px-10"
              >
                <Heart className="w-5 h-5 mr-2" />
                Faire un don
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DonationPage;
