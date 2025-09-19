import { Button } from "@/components/ui/button";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">O.N.G Santé</h2>
                <p className="text-primary-foreground/80">Soins de qualité accessible</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Depuis 2018, nous nous engageons à offrir des soins de santé 
              de qualité supérieure à des tarifs accessibles pour toutes les 
              populations de Côte d'Ivoire.
            </p>
            
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-primary">
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-primary">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  Abidjan, Côte d'Ivoire
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  +225 0759950823
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  contact@ongsante.ci
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 O.N.G Santé. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;