import { useState } from "react";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingDonation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDonateClick = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-vibrant bg-accent hover:bg-accent/90 hover:scale-110 transition-all duration-300"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Heart className="h-6 w-6 text-white animate-pulse" />
        )}
      </Button>

      {/* Popup Card */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-vibrant border-2 border-accent animate-scale-in">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Faire un don</h3>
                <p className="text-sm text-muted-foreground">Soutenez notre mission</p>
              </div>
            </div>
            
            <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
              Votre générosité aide à transformer des vies et à bâtir un avenir meilleur pour les communautés.
            </p>
            
            <Button
              onClick={handleDonateClick}
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              <Heart className="w-4 h-4 mr-2" />
              Faire un don maintenant
            </Button>
            
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Paiement 100% sécurisé via Paystack
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingDonation;
