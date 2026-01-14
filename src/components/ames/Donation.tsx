import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Heart, CreditCard, Smartphone, Building, Users, Banknote, Gift, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Validation schema
const donationSchema = z.object({
  amount: z.number()
    .min(1000, 'Montant minimum: 1,000 FCFA')
    .max(100000000, 'Montant maximum: 100,000,000 FCFA'),
  email: z.string()
    .email('Email invalide')
    .max(255, 'Email trop long'),
});

const Donation = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mobile');
  const [email, setEmail] = useState('');
  const [isPaystackLoaded, setIsPaystackLoaded] = useState(false);
  const [paystackKey, setPaystackKey] = useState<string>('');

  // Charger la clé Paystack depuis les secrets
  useEffect(() => {
    const loadPaystackKey = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('paystack-config');
        
        if (error) {
          if (import.meta.env.DEV) {
            console.error('Erreur lors du chargement de la clé Paystack:', error);
          }
          toast({
            title: "Erreur de configuration",
            description: "Impossible de charger la configuration de paiement",
            variant: "destructive"
          });
          return;
        }
        
        if (data?.publicKey) {
          setPaystackKey(data.publicKey);
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error('Erreur:', error);
        }
      }
    };
    
    loadPaystackKey();
  }, [toast]);

  // Vérifier que le script Paystack est chargé
  useEffect(() => {
    if (!paystackKey) return;
    
    const checkPaystack = () => {
      if ((window as any).PaystackPop) {
        setIsPaystackLoaded(true);
      } else {
        setTimeout(checkPaystack, 100);
      }
    };
    checkPaystack();
  }, [paystackKey]);

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
    
    // Validation with zod schema
    const validation = donationSchema.safeParse({ amount, email });
    
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        title: "Validation échouée",
        description: firstError.message,
        variant: "destructive"
      });
      return;
    }

    // Vérification que Paystack est chargé
    if (!(window as any).PaystackPop) {
      toast({
        title: "Erreur de chargement",
        description: "Le système de paiement n'est pas encore prêt. Veuillez réessayer dans quelques secondes.",
        variant: "destructive"
      });
      return;
    }

    // Vérifier que la clé est disponible
    if (!paystackKey) {
      toast({
        title: "Configuration manquante",
        description: "La clé de paiement n'est pas configurée",
        variant: "destructive"
      });
      return;
    }

    try {
      // Initialize Paystack payment (MODE LIVE)
      const handler = (window as any).PaystackPop.setup({
        key: paystackKey,
        email: email,
        amount: amount * 100,
        currency: 'XOF',
        channels: ['card', 'mobile_money', 'bank'],
        ref: 'AMES_' + Math.floor((Math.random() * 1000000000) + 1),
        subaccount: "ACCT_h3lryezmzveyo4e",
        metadata: {
          custom_fields: [
            {
              display_name: "Organisation",
              variable_name: "organisation",
              value: "ONG AMES-CI"
            }
          ],
          ong_name: "ONG AMES-CI",
          website: "https://ong-ames-ci.org"
        },
        callback: function(response: any) {
          toast({
            title: "Don effectué avec succès!",
            description: `Merci pour votre générosité. Référence: ${response.reference}`,
          });
        },
        onClose: function() {
          toast({
            title: "Paiement annulé",
            description: "Vous avez fermé la fenêtre de paiement",
            variant: "destructive"
          });
        }
      });
      handler.openIframe();
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Erreur Paystack:', error);
      }
      toast({
        title: "Erreur de paiement",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    }
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

              {/* Email Input */}
              <div className="mb-8">
                <Label htmlFor="email" className="text-lg font-semibold text-foreground mb-4 block">
                  Votre email
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemple@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 text-lg focus:ring-hope focus:border-hope"
                    required
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Votre email est requis pour confirmer votre don
                </p>
              </div>

              {/* Donate Button */}
              <Button 
                onClick={handleDonate}
                className="w-full h-14 text-lg bg-gradient-hero text-white hover:shadow-hope transition-all"
                disabled={!isPaystackLoaded || !paystackKey}
              >
                <Heart className="w-6 h-6 mr-3" />
                {!isPaystackLoaded ? 'Chargement...' : 'Faire un don'}
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