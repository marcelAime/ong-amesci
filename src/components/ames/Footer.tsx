import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Heart, LogIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import amesLogo from "@/assets/ames-logo.jpg";

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.activities'), href: '#activities' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const services = [
    { label: 'Formation Professionnelle', href: '#activities' },
    { label: 'Développement Social', href: '#activities' },
    { label: 'Aide Humanitaire', href: '#activities' },
    { label: 'Partenariats', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "https://web.facebook.com/ambassadeursdelespoirci"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://instagram.com/ames-ci"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/ames-ci"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/ames-ci"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      name: "TikTok",
      url: "https://www.tiktok.com/@ambassadeurs.de.l5?_t=ZM-90NY3FsOCpk&_r=1"
    }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={amesLogo} 
                alt="AMES-CI Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-white">AMES-CI</h3>
                <p className="text-sm text-white/70">Ambassadeurs de l'Espoir</p>
              </div>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-hope flex-shrink-0" />
                <span className="text-white/80">
                  Treichville, Immeuble Nana Yamousso<br />
                  Abobo BC non loin de l'EPP Gendarmerie<br />
                  Abidjan - Côte d'Ivoire
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-trust flex-shrink-0" />
                  <a 
                    href="tel:+2252721523261" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +225 2721523261
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm pl-7">
                  <a 
                    href="tel:+2250778044369" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +225 0778044369
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm pl-7">
                  <a 
                    href="tel:+2250142495949" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +225 0142495949
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm pl-7">
                  <a 
                    href="tel:+2250554989162" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +225 0554989162
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-hope flex-shrink-0" />
                <a 
                  href="mailto:contact@ong-ames-ci.org" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  contact@ong-ames-ci.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              {t('footer.quicklinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-white/80 hover:text-white transition-colors text-sm hover:underline"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Restez Connecté
            </h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-white/80 text-sm mb-4">
                Recevez nos dernières actualités
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-hope"
                />
                <Button 
                  size="sm"
                  className="bg-hope hover:bg-hope/80 text-white"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">
                Suivez-nous sur les réseaux sociaux
              </h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline-white"
                    size="sm"
                    className="w-10 h-10 p-0"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/auth')}
              className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Connexion Président
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>© 2024 AMES-CI.</span>
              <span>{t('footer.rights')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;