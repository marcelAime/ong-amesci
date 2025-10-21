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
  Send,
  MessageCircle
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      primary: "+225 0759950823",
      secondary: "Urgences: +225 0759950823",
      description: "Appelez-nous pour vos urgences ou prendre rendez-vous",
      color: "medical",
      action: () => window.open('tel:+2250759950823', '_blank')
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      primary: "+225 0759950823",
      secondary: "Réponse rapide garantie",
      description: "Contactez-nous via WhatsApp pour une réponse immédiate",
      color: "accent",
      action: () => window.open('https://wa.me/2250759950823', '_blank')
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      primary: "contact@ongsante.ci",
      secondary: "info@ongsante.ci",
      description: "Envoyez-nous vos questions par email",
      color: "primary",
      action: () => window.open('mailto:contact@ongsante.ci', '_blank')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      primary: "Abidjan, Côte d'Ivoire",
      secondary: "Centre médical O.N.G Santé",
      description: "Venez nous rendre visite à notre centre médical",
      color: "medical",
      action: () => {}
    }
  ];

  const officeHours = [
    { day: "Lundi - Vendredi", hours: "7h00 - 19h00", isToday: false },
    { day: "Samedi", hours: "8h00 - 18h00", isToday: false },
    { day: "Dimanche", hours: "8h00 - 18h00", isToday: false },
    { day: "Urgences", hours: "24h/24 - 7j/7", isEmergency: true }
  ];

  const faqs = [
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Vous pouvez nous contacter par téléphone au +225 0759950823 ou via WhatsApp. Notre équipe vous donnera un créneau adapté à vos besoins."
    },
    {
      question: "Acceptez-vous les urgences ?",
      answer: "Oui, nous avons un service d'urgence disponible 24h/24 et 7j/7. N'hésitez pas à nous appeler immédiatement en cas d'urgence médicale."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont volontairement accessibles. Une consultation générale commence à partir de 5,000 FCFA. Contactez-nous pour plus de détails."
    },
    {
      question: "Où êtes-vous situés ?",
      answer: "Notre centre médical est situé à Abidjan, Côte d'Ivoire. Contactez-nous pour obtenir l'adresse exacte et les indications."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - O.N.G Santé | Nous contacter</title>
        <meta name="description" content="Contactez l'O.N.G Santé pour prendre rendez-vous ou obtenir des informations. Téléphone: +225 0759950823, Email: contact@ongsante.ci. Urgences 24h/24." />
        <meta name="keywords" content="contact ONG santé, rendez-vous médical, urgences, téléphone, email, WhatsApp, adresse Abidjan" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Nous{" "}
                <span className="text-white/90">Contacter</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Notre équipe est là pour vous accompagner dans tous vos besoins de santé
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Plusieurs Moyens de{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Nous Joindre
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choisissez le moyen de contact qui vous convient le mieux
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className="p-6 hover:shadow-vibrant transition-all duration-300 animate-fade-in cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={method.action}
                >
                  <div className={`w-12 h-12 bg-${method.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <div className={`text-${method.color}`}>
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  
                  <div className={`text-${method.color} font-medium mb-1`}>
                    {method.primary}
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    {method.secondary}
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    {method.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Hours */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="p-8 shadow-vibrant">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">
                      Envoyez-nous un message
                    </h3>
                  </div>
                  
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
                        placeholder="+225 0759950823"
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

                    <Button variant="hero" size="lg" className="w-full group">
                      Envoyer le message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Hours & Info */}
              <div className="space-y-8 animate-fade-in">
                {/* Office Hours */}
                <Card className="p-8 shadow-medical">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-medical" />
                    <h3 className="text-2xl font-semibold text-foreground">
                      Nos horaires
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div 
                        key={schedule.day}
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          schedule.isEmergency 
                            ? 'bg-accent/10 border border-accent/20' 
                            : 'bg-secondary/50'
                        }`}
                      >
                        <span className={`font-medium ${
                          schedule.isEmergency ? 'text-accent' : 'text-foreground'
                        }`}>
                          {schedule.day}
                        </span>
                        <span className={`${
                          schedule.isEmergency 
                            ? 'text-accent font-semibold' 
                            : 'text-muted-foreground'
                        }`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-8 shadow-soft">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Actions rapides
                  </h3>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="hero" 
                      className="w-full justify-start h-12"
                      onClick={() => window.open('https://wa.me/2250759950823', '_blank')}
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      Contacter via WhatsApp
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start h-12"
                      onClick={() => window.open('tel:+2250759950823', '_blank')}
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      Appeler maintenant
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start h-12"
                      onClick={() => window.open('https://paystack.shop/pay/fyx1vv7xc2', '_blank')}
                    >
                      <Heart className="w-5 h-5 mr-3" />
                      Faire un don
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Questions{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Fréquentes
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trouvez rapidement les réponses à vos questions les plus courantes
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card 
                  key={faq.question}
                  className="p-6 hover:shadow-soft transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-semibold text-foreground mb-3 text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-20 bg-gradient-medical">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Urgence Médicale ?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Notre équipe d'urgence est disponible 24h/24 et 7j/7 pour vous aider
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-medical bg-red-600/20 border-red-300"
                  onClick={() => window.open('tel:+2250759950823', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler l'urgence
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-medical"
                  onClick={() => window.open('https://wa.me/2250759950823', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp urgence
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;