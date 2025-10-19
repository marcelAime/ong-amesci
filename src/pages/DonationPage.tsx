import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Stethoscope, Home, Gift, Star, CreditCard, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";

declare global {
  interface Window {
    PaystackPop: any;
  }
}

const DonationPage = () => {
  const [amount, setAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [paystackKey, setPaystackKey] = useState("");
  const { toast } = useToast();

  const predefinedAmounts = [5000, 10000, 25000, 50000, 100000, 250000];

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

  useEffect(() => {
    // Fetch Paystack config on component mount
    const fetchPaystackConfig = async () => {
      try {
        console.log('Tentative de récupération de la clé Paystack...');
        const { data, error } = await supabase.functions.invoke('paystack-config');
        console.log('Réponse Paystack config:', { data, error });
        
        if (error) {
          console.error('Erreur lors de la récupération de la config:', error);
          toast({
            title: "Erreur de configuration",
            description: "Impossible de charger la configuration de paiement",
            variant: "destructive",
          });
          return;
        }
        
        if (data?.publicKey) {
          console.log('Clé Paystack récupérée avec succès:', data.publicKey.substring(0, 20) + '...');
          setPaystackKey(data.publicKey);
          initializePaystack(); // Initialiser Paystack dès qu'on a la clé
        } else {
          console.error('Pas de clé publique dans la réponse:', data);
          toast({
            title: "Configuration manquante",
            description: "Clé Paystack non configurée",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de la config Paystack:', error);
        toast({
          title: "Erreur réseau",
          description: "Impossible de contacter le service de configuration",
          variant: "destructive",
        });
      }
    };
    
    fetchPaystackConfig();
  }, []);

  const initializePaystack = () => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.head.appendChild(script);
  };

  const handleDonation = () => {
    console.log('Tentative de donation avec:', { amount, donorInfo, paystackKey: paystackKey?.substring(0, 20) + '...' });
    
    if (!amount || parseFloat(amount) < 500) {
      toast({
        title: "Montant invalide",
        description: "Le montant minimum est de 500 FCFA",
        variant: "destructive",
      });
      return;
    }

    if (!donorInfo.name || !donorInfo.email) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    if (!paystackKey) {
      console.error('Pas de clé Paystack disponible');
      toast({
        title: "Configuration manquante",
        description: "La clé de paiement n'est pas configurée. Veuillez recharger la page.",
        variant: "destructive",
      });
      return;
    }

    if (!window.PaystackPop) {
      console.log('PaystackPop non disponible, initialisation...');
      initializePaystack();
      setTimeout(() => handleDonation(), 2000);
      return;
    }

    console.log('Lancement du processus de paiement Paystack...');
    setIsLoading(true);

    try {
      const handler = window.PaystackPop.setup({
        key: paystackKey,
        email: donorInfo.email,
        amount: parseFloat(amount) * 100, // Paystack utilise les centimes
        currency: 'XOF', // Franc CFA
        ref: 'ong_donation_' + Date.now(),
        subaccount: "ACCT_h3lryezmzveyo4e",
        metadata: {
          donor_name: donorInfo.name,
          donor_phone: donorInfo.phone,
          message: donorInfo.message,
          custom_fields: [
            {
              display_name: "Organisation",
              variable_name: "organisation",
              value: "ONG AMES-CI"
            },
            {
              display_name: "Nom du donateur",
              variable_name: "donor_name",
              value: donorInfo.name
            },
            {
              display_name: "Téléphone",
              variable_name: "donor_phone", 
              value: donorInfo.phone
            }
          ],
          ong_name: "ONG AMES-CI",
          website: "https://ong-ames-ci.org"
        },
        callback: function(response: any) {
          console.log('Paiement réussi:', response);
          toast({
            title: "Don réussi !",
            description: `Merci ${donorInfo.name} pour votre générosité. Référence: ${response.reference}`,
          });
          
          // Reset form
          setAmount("");
          setDonorInfo({
            name: "",
            email: "", 
            phone: "",
            message: ""
          });
          setIsLoading(false);
        },
        onClose: function() {
          console.log('Paiement fermé par l\'utilisateur');
          setIsLoading(false);
          toast({
            title: "Transaction annulée",
            description: "Votre don n'a pas été traité",
            variant: "destructive",
          });
        }
      });
      
      console.log('Ouverture de l\'iframe Paystack...');
      handler.openIframe();
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du paiement:', error);
      setIsLoading(false);
      toast({
        title: "Erreur de paiement",
        description: "Impossible d'initialiser le système de paiement. Veuillez réessayer.",
        variant: "destructive",
      });
    }
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

        {/* Donation Form */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 shadow-vibrant">
                <div className="text-center mb-8">
                  <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Faites Votre Don
                  </h2>
                  <p className="text-muted-foreground">
                    Choisissez le montant de votre contribution et aidez-nous à sauver des vies
                  </p>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <Label className="text-base font-semibold mb-4 block">Montant du don (FCFA)</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((predefinedAmount) => (
                      <Button
                        key={predefinedAmount}
                        variant={amount === predefinedAmount.toString() ? "hero" : "outline"}
                        onClick={() => setAmount(predefinedAmount.toString())}
                        className="h-12"
                      >
                        {predefinedAmount.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Autre montant"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-center text-lg font-semibold h-12"
                  />
                </div>

                {/* Donor Information */}
                <div className="space-y-6 mb-8">
                  <h3 className="text-lg font-semibold text-foreground">Vos informations</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                        placeholder="Votre nom complet"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                      placeholder="+225 0759950823"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Textarea
                      id="message"
                      value={donorInfo.message}
                      onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                      placeholder="Un message d'encouragement pour notre équipe..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Security Info */}
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Paiement sécurisé avec Paystack</span>
                </div>

                {/* Donation Button */}
                <Button
                  onClick={handleDonation}
                  variant="hero"
                  size="lg"
                  className="w-full text-lg h-14"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Traitement en cours..."
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      Faire un don de {amount ? parseFloat(amount).toLocaleString() : '0'} FCFA
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  Vos informations de paiement sont sécurisées par Paystack.
                  Vous recevrez un reçu par email après votre don.
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
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ensemble, Changeons des Vies
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Rejoignez notre communauté de donateurs et contribuez à un avenir plus sain pour tous
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-medical"
                onClick={() => window.open('https://wa.me/2250759950823', '_blank')}
              >
                Nous contacter pour plus d'infos
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DonationPage;