import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://storage.googleapis.com/gpt-engineer-file-uploads/Q4sLhJ9wpwNtwORoW2IoENyfGm43/uploads/1758293373151-ong1.jpg" 
              alt="Logo O.N.G Santé" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">O.N.G Santé</h1>
              <p className="text-xs text-muted-foreground">Soins de qualité accessible</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" className="ml-4" onClick={() => window.open('https://paystack.shop/pay/fyx1vv7xc2', '_blank')}>
              Faire un don
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2" onClick={() => window.open('https://paystack.shop/pay/fyx1vv7xc2', '_blank')}>
                Faire un don
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;