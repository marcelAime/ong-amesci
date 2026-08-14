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
        disabled
        className="fixed bottom-6 right-6 z-50 h-auto px-6 py-3 rounded-full shadow-vibrant bg-accent hover:bg-accent/90 transition-all duration-300 flex items-center gap-2"
      >
        <Heart className="h-5 w-5 text-white animate-pulse" />
        <span className="text-white font-semibold text-sm">Faire un don</span>
      </Button>
    </>
  );
};

export default FloatingDonation;
