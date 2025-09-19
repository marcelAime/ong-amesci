import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Heart,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-primary" />
            <p className="text-primary font-semibold uppercase tracking-wide text-sm">
              Contact
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nous sommes là{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              pour vous
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à nous contacter pour toute question ou pour 
            prendre rendez-vous. Notre équipe est disponible pour vous aider.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Informations de contact
            </h3>
            
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-soft transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Adresse</h4>
                    <p className="text-muted-foreground">
                      Abidjan, Côte d'Ivoire<br />
                      Centre médical O.N.G Santé
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-medical" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Téléphone</h4>
                    <p className="text-muted-foreground">
                      +225 0759950823<br />
                      Urgences: +225 0759950823
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground">
                      contact@ongsante.ci<br />
                      info@ongsante.ci
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Horaires</h4>
                    <p className="text-muted-foreground">
                      Lun - Ven: 7h00 - 19h00<br />
                      Sam - Dim: 8h00 - 18h00<br />
                      <span className="text-accent font-medium">Urgences 24h/24</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="p-8 shadow-medical">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Envoyez-nous un message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Votre prénom"
                      className="border-input focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Votre nom"
                      className="border-input focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="votre.email@exemple.com"
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+225 XX XX XX XX XX"
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input 
                    id="subject" 
                    placeholder="Objet de votre message"
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Décrivez votre demande ou question..."
                    rows={5}
                    className="border-input focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                >
                  Envoyer le message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;