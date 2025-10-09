import { useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import amesLogo from "@/assets/ames-logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigationItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.activities', href: '#activities' },
    { key: 'nav.news', href: '#news' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={amesLogo} 
              alt="AMES-CI Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="hidden md:block">
              <span className="text-lg font-bold text-hope">AMES-CI</span>
              <div className="text-xs text-muted-foreground">Ambassadeurs de l'Espoir</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Button
                key={item.key}
                variant="ghost"
                className="text-foreground hover:text-accent hover:bg-accent/10"
                onClick={() => {
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t(item.key)}
              </Button>
            ))}
          </div>

          {/* Language Selector & Donate Button */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="relative group">
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
                <ChevronDown className="w-3 h-3" />
              </Button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-md shadow-soft opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors first:rounded-t-md last:rounded-b-md ${
                      language === lang.code ? 'bg-muted text-accent' : ''
                    }`}
                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
            
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('nav.donate')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.key}
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-accent hover:bg-accent/10"
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  {t(item.key)}
                </Button>
              ))}
              
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={`px-3 py-1 rounded-md text-sm transition-colors ${
                        language === lang.code ? 'bg-accent text-white' : 'bg-muted text-foreground hover:bg-accent/10'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.donate')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;