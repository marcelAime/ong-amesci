import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Heart, 
  CreditCard,
  Shield,
  Users,
  Stethoscope,
  Building2
} from "lucide-react";

declare global {
  interface Window {
    PaystackPop: any;
  }
}

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paystackKey, setPaystackKey] = useState("");
  const { toast } = useToast();

  const presetAmounts = [5000, 10000, 25000, 50000, 100000];

  useEffect(() => {
    // Set default test key - replace with your real key
    setPaystackKey('pk_test_f4f43d0c13566687c18b6dc35f89fc455c90a7c2');
  }, []);

  const initializePaystack = () => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.head.appendChild(script);
  };

  const handleDonation = () => {
    if (!amount || !donorName || !email) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    if (!paystackKey) {
      toast({
        title: "Chargement en cours",
        description: "Initialisation du système de paiement...",
      });
      return;
    }

    if (!window.PaystackPop) {
      initializePaystack();
      setTimeout(() => handleDonation(), 1000);
      return;
    }

    setIsLoading(true);

    const handler = window.PaystackPop.setup({
      key: paystackKey,
      email: email,
      amount: parseInt(amount) * 100, // Paystack utilise les centimes
      currency: 'XOF', // Franc CFA
      ref: 'ong_donation_' + Date.now(),
      metadata: {
        donor_name: donorName,
        message: message,
        custom_fields: [
          {
            display_name: "Nom du donateur",
            variable_name: "donor_name",
            value: donorName
          }
        ]
      },
      callback: function(response: any) {
        toast({
          title: "Don réussi !",
          description: `Merci ${donorName} pour votre générosité. Référence: ${response.reference}`,
        });
        
        // Reset form
        setAmount("");
        setDonorName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
      },
      onClose: function() {
        setIsLoading(false);
        toast({
          title: "Transaction annulée",
          description: "Votre don n'a pas été traité",
          variant: "destructive",
        });
      }
    });
    
    handler.openIframe();
  };

  return (
    <section id="donation" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-primary" />
            <p className="text-primary font-semibold uppercase tracking-wide text-sm">
              Faire un don
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Soutenez notre{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              mission
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque don compte pour améliorer l'accès aux soins de santé 
            de qualité à prix abordable dans notre communauté.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Impact Section */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Votre impact
            </h3>
            
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-soft transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">5 000 FCFA</h4>
                    <p className="text-muted-foreground">
                      Permet une consultation médicale complète pour une famille
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-medical" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">25 000 FCFA</h4>
                    <p className="text-muted-foreground">
                      Finance une campagne de sensibilisation dans un quartier
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">100 000 FCFA</h4>
                    <p className="text-muted-foreground">
                      Contribue à l'achat d'équipement médical moderne
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Donation Form */}
          <div className="animate-fade-in">
            <Card className="p-8 shadow-medical">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Paiement sécurisé avec Paystack</span>
              </div>
              
              <div className="space-y-6">
                {/* Preset Amounts */}
                <div>
                  <Label className="text-base font-medium">Montant du don (FCFA)</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2 mb-4">
                    {presetAmounts.map((preset) => (
                      <Button
                        key={preset}
                        variant={amount === preset.toString() ? "default" : "outline"}
                        onClick={() => setAmount(preset.toString())}
                        className="h-12"
                      >
                        {preset.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Montant personnalisé"
                    className="text-lg h-12"
                  />
                </div>

                {/* Donor Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="donorName">Nom complet *</Label>
                    <Input 
                      id="donorName"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Votre nom"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Un message d'encouragement..."
                    rows={3}
                    className="mt-2 resize-none"
                  />
                </div>

                <Button 
                  onClick={handleDonation}
                  disabled={isLoading}
                  className="w-full h-12 text-lg"
                  size="lg"
                >
                  {isLoading ? (
                    "Traitement en cours..."
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      Faire un don de {amount ? `${parseInt(amount).toLocaleString()} FCFA` : '...'}
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Vos informations de paiement sont sécurisées par Paystack.
                  Vous recevrez un reçu par email après votre don.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;