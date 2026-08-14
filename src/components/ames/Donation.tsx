import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Donation = () => {
  const { t } = useLanguage();

  const impactExamples = [
    {
      amount: 5000,
      impact: "Formation d'un jeune pendant 1 semaine",
      icon: <Users className="w-5 h-5" />
    },
    {
      amount: 25000,
      impact: "Équipement complet pour un apprenant",
      icon: <Gift className="w-5 h-5" />
    },
    {
      amount: 100000,
      impact: "Formation complète d'un bénéficiaire",
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const handleDonate = () => {
    window.open('https://paystack.shop/pay/fyx1vv7xc2', '_blank');
  };

  return (
    <section id="donate" className="py-20 bg-trust-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Faire un Don
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Votre générosité nous permet de continuer notre mission et d'aider plus de personnes dans le besoin
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation CTA */}
          <div className="lg:col-span-2">
            <Card className="p-8 text-center">
              <div className="w-20 h-20 bg-hope/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-hope" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Soutenez Notre{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Mission
                </span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Chaque contribution compte. Votre don nous permet de former des jeunes, 
                d'équiper nos centres et d'accompagner les plus vulnérables.
              </p>
              
              <Button 
                disabled
                className="h-14 px-12 text-lg bg-gradient-hero text-white transition-all"
              >
                <Heart className="w-6 h-6 mr-3" />
                Faire un don maintenant
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Paiement sécurisé via Paystack
              </p>
            </Card>
          </div>

          {/* Impact & Info */}
          <div className="space-y-6">
            {/* Impact Examples */}
            <Card className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                L'impact de votre don
              </h4>
              <div className="space-y-4">
                {impactExamples.map((example, index) => (
                  <div 
                    key={example.amount}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-trust/10 flex items-center justify-center text-trust flex-shrink-0">
                      {example.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {example.amount.toLocaleString()} FCFA
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {example.impact}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trust Indicators */}
            <Card className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Transparence et confiance
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-hope border-hope">
                    Sécurisé
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Paiements sécurisés SSL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-trust border-trust">
                    Transparent
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Rapports d'activité réguliers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-hope border-hope">
                    Impact
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Suivi des réalisations
                  </span>
                </div>
              </div>
            </Card>

            {/* Partnership CTA */}
            <Card className="p-6 bg-gradient-hero text-white">
              <h4 className="font-semibold mb-2">Devenir Partenaire</h4>
              <p className="text-white/90 text-sm mb-4">
                Explorez nos opportunités de partenariat pour un impact plus important
              </p>
              <Button 
                variant="outline-white"
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nous contacter
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
