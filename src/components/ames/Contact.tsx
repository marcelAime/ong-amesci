import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Music } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.address'),
      content: "Treichville, Immeuble Nana Yamousso\nAbobo BC non loin de l'EPP Gendarmerie\nAbidjan - Côte d'Ivoire",
      color: "hope"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      content: "+225 2721523261\n+225 0778044369\n+225 0142495949\n+225 0554989162",
      action: () => window.open('tel:+2252721523261'),
      color: "trust"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      content: "contact@ong-ames-ci.org",
      action: () => window.open('mailto:contact@ong-ames-ci.org'),
      color: "hope"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      content: "Lun - Ven: 8h00 - 17h00\nSam: 8h00 - 13h00",
      color: "trust"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "https://web.facebook.com/ambassadeursdelespoirci",
      color: "text-blue-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram", 
      url: "https://instagram.com/ames-ci",
      color: "text-pink-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/ames-ci",
      color: "text-blue-400"
    },
    {
      icon: <Music className="w-5 h-5" />,
      name: "TikTok",
      url: "https://tiktok.com/@ames-ci",
      color: "text-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-trust-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous pour toute question, collaboration ou pour nous rejoindre dans notre mission
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informations de{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Contact
                </span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className={`p-6 hover:shadow-hope transition-all duration-300 animate-fade-in ${
                      info.action ? 'cursor-pointer' : ''
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={info.action}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        info.color === 'hope' ? 'bg-hope/10' : 'bg-trust/10'
                      }`}>
                        <div className={info.color === 'hope' ? 'text-hope' : 'text-trust'}>
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Suivez-nous sur les réseaux sociaux
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 p-0 hover:shadow-soft transition-all"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <span className={social.color}>
                      {social.icon}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* WhatsApp Contact */}
            <Card className="p-6 bg-gradient-hero text-white">
              <h4 className="font-semibold mb-2">Contact rapide</h4>
              <p className="text-white/90 mb-4">
                Contactez-nous directement via WhatsApp pour une réponse immédiate
              </p>
              <Button 
                variant="outline-white"
                onClick={() => window.open('https://wa.me/2250778044369', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 hover:shadow-trust transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envoyez-nous un{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Message
                </span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    className="focus:ring-hope focus:border-hope"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre.email@exemple.com"
                    className="focus:ring-hope focus:border-hope"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre demande ou comment vous souhaitez nous aider..."
                    className="focus:ring-hope focus:border-hope"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-hero text-white hover:shadow-hope transition-all"
                  size="lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('contact.form.send')}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="h-64 bg-gradient-subtle relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-hope mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Notre Localisation</h4>
                  <p className="text-muted-foreground">
                    Treichville, Immeuble Nana Yamousso<br />
                    Abobo BC non loin de l'EPP Gendarmerie<br />
                    Abidjan - Côte d'Ivoire
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

export default Contact;