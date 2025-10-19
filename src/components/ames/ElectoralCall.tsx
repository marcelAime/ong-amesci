import { Card } from "@/components/ui/card";
import { Vote, CheckCircle2 } from "lucide-react";
import presidentVoterCard from "@/assets/president-voter-card.jpg";
import presidentElectoralCall from "@/assets/president-electoral-call.jpg";

const ElectoralCall = () => {
  const steps = [
    "Retirer votre carte d'électeur",
    "Vous présenter aux urnes le 25 octobre 2025 pour exprimer votre choix",
    "Faire entendre votre voix, car chaque vote compte !"
  ];

  return (
    <section id="electoral-call" className="py-20 bg-gradient-to-br from-hope/5 via-background to-trust/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-6">
            <Vote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Appel à la Participation Électorale 🗳️
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden hover:shadow-hope transition-all duration-300">
            <img 
              src={presidentElectoralCall} 
              alt="Président de l'ONG AMES-CI avec carte d'électeur"
              className="w-full h-[400px] object-cover"
            />
          </Card>
          <Card className="overflow-hidden hover:shadow-trust transition-all duration-300">
            <img 
              src={presidentVoterCard} 
              alt="Remise de carte d'électeur"
              className="w-full h-[400px] object-cover"
            />
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-subtle border-2 border-hope/20">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                En ma qualité de président de l'ONG « <span className="font-bold text-hope">Ambassadeurs de l'Espoir en Côte d'Ivoire</span> », j'adresse un appel à tous les citoyens.
              </p>
              
              <div className="bg-hope/10 border-l-4 border-hope p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-foreground flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-hope flex-shrink-0 mt-1" />
                  Être un citoyen modèle, c'est accomplir ses devoirs envers la nation pour exercer pleinement ses droits.
                </p>
              </div>

              <p className="text-lg text-foreground font-medium">
                Le vote en est l'élément fondamental.
              </p>

              <p className="text-lg text-foreground">
                Je vous invite instamment à :
              </p>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-trust/10 rounded-lg hover:bg-trust/20 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-hero text-white font-bold flex items-center justify-center text-lg">
                      {index + 1}
                    </div>
                    <p className="text-lg text-foreground pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6">
                <p className="text-lg text-foreground font-semibold">
                  Votre participation est essentielle. Elle témoigne de votre engagement civique envers la Côte d'Ivoire.
                </p>

                <div className="text-center py-6">
                  <p className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    Ensemble, construisons une démocratie forte et inclusive ! 🤝
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ElectoralCall;
