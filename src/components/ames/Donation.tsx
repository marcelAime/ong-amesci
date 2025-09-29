import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heart, CreditCard, Smartphone, Building, Users, Banknote, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Donation = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mobile');

  const predefinedAmounts = [5000, 10000, 25000, 50000, 100000, 250000];

  const paymentMethods = [
    {
      id: 'mobile',
      name: 'Mobile Money',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Orange Money, MTN Money, Moov Money'
    },
    {
      id: 'card',
      name: 'Carte Bancaire',
      icon: <CreditCard className="w-5 h-5" />,
      description: 'Visa, Mastercard'
    },
    {
      id: 'transfer',
      name: 'Virement Bancaire',
      icon: <Building className="w-5 h-5" />,
      description: 'Transfert direct'
    }
  ];

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
    const amount = selectedAmount || parseFloat(customAmount);
    
    if (!amount || amount < 1000) {
      toast({
        title: "Montant invalide",
        description: "Le montant minimum est de 1,000 FCFA",
        variant: "destructive"
      });
      return;
    }

    // Here you would integrate with your payment processor
    toast({
      title: "Redirection vers le paiement",
      description: `Montant: ${amount.toLocaleString()} FCFA`,
    });
  };

  return (
    <section id="donate" className="py-20 bg-gradient-subtle">
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
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Choisissez votre{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Contribution
                </span>
              </h3>

              {/* Amount Selection */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Montant du don</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      className={`h-16 ${selectedAmount === amount ? 'bg-hope text-white' : 'hover:border-hope hover:text-hope'}`}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                    >
                      <div className="text-center">
                        <div className="font-bold">{amount.toLocaleString()}</div>
                        <div className="text-xs">FCFA</div>
                      </div>
                    </Button>
                  ))}
                </div>
                
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="Montant personnalisé (FCFA)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-12 h-16 text-center text-lg focus:ring-hope focus:border-hope"
                  />
                  <Banknote className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Mode de paiement</h4>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <Card
                      key={method.id}
                      className={`p-4 cursor-pointer transition-all ${
                        paymentMethod === method.id 
                          ? 'border-hope bg-hope/5' 
                          : 'hover:border-hope/50'
                      }`}
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          paymentMethod === method.id ? 'bg-hope text-white' : 'bg-hope/10 text-hope'
                        }`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-foreground">{method.name}</h5>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          paymentMethod === method.id 
                            ? 'border-hope bg-hope' 
                            : 'border-muted-foreground'
                        }`}>
                          {paymentMethod === method.id && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
              <Button 
                onClick={handleDonate}
                className="w-full h-14 text-lg bg-gradient-hero text-white hover:shadow-hope transition-all"
              >
                <Heart className="w-6 h-6 mr-3" />
                Faire un don de {(selectedAmount || parseFloat(customAmount) || 0).toLocaleString()} FCFA
              </Button>
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
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-hope transition-all"
                onClick={() => window.open('https://wa.me/2250778044369', '_blank')}
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