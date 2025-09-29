import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.activities': 'Nos Activités',
    'nav.news': 'Actualités',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.donate': 'Faire un Don',
    
    // Hero Section
    'hero.title': 'Ambassadeurs de l\'Espoir',
    'hero.subtitle': 'Ensemble pour le Développement Social et le Bien-être en Côte d\'Ivoire',
    'hero.description': 'Depuis notre création, nous œuvrons pour améliorer les conditions de vie des communautés à travers des programmes de formation professionnelle, de développement social et d\'aide humanitaire.',
    'hero.support': 'Nous Soutenir',
    'hero.contact': 'Nous Contacter',
    
    // About Section
    'about.title': 'À Propos de l\'AMES-CI',
    'about.mission.title': 'Notre Mission',
    'about.mission.text': 'Promouvoir le bien-être social et le développement communautaire à travers l\'éducation, la formation professionnelle et l\'assistance humanitaire.',
    'about.vision.title': 'Notre Vision',
    'about.vision.text': 'Être un acteur de référence dans le développement social en Côte d\'Ivoire, contribuant à l\'autonomisation des communautés.',
    'about.values.title': 'Nos Valeurs',
    'about.values.text': 'Intégrité, solidarité, excellence et engagement envers le développement durable.',
    
    // Activities Section
    'activities.title': 'Nos Activités',
    'activities.training.title': 'Formation Professionnelle',
    'activities.training.description': 'Nous offrons des programmes de formation en soudure, froid & climatisation, menuiserie aluminium et couture.',
    'activities.social.title': 'Développement Social',
    'activities.social.description': 'Projets communautaires visant à améliorer les infrastructures et les conditions de vie.',
    'activities.humanitarian.title': 'Aide Humanitaire',
    'activities.humanitarian.description': 'Distribution de vivres, équipements et assistance aux populations vulnérables.',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    
    // Footer
    'footer.description': 'ONG dédiée au développement social et au bien-être des communautés en Côte d\'Ivoire.',
    'footer.quicklinks': 'Liens Rapides',
    'footer.followus': 'Suivez-nous',
    'footer.rights': 'Tous droits réservés.',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.activities': 'Our Activities',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',
    
    // Hero Section
    'hero.title': 'Ambassadors of Hope',
    'hero.subtitle': 'Together for Social Development and Well-being in Côte d\'Ivoire',
    'hero.description': 'Since our creation, we work to improve living conditions of communities through professional training programs, social development and humanitarian aid.',
    'hero.support': 'Support Us',
    'hero.contact': 'Contact Us',
    
    // About Section
    'about.title': 'About AMES-CI',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'Promote social well-being and community development through education, professional training and humanitarian assistance.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be a reference actor in social development in Côte d\'Ivoire, contributing to community empowerment.',
    'about.values.title': 'Our Values',
    'about.values.text': 'Integrity, solidarity, excellence and commitment to sustainable development.',
    
    // Activities Section
    'activities.title': 'Our Activities',
    'activities.training.title': 'Professional Training',
    'activities.training.description': 'We offer training programs in welding, refrigeration & air conditioning, aluminum carpentry and sewing.',
    'activities.social.title': 'Social Development',
    'activities.social.description': 'Community projects aimed at improving infrastructure and living conditions.',
    'activities.humanitarian.title': 'Humanitarian Aid',
    'activities.humanitarian.description': 'Distribution of food, equipment and assistance to vulnerable populations.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    
    // Footer
    'footer.description': 'NGO dedicated to social development and community well-being in Côte d\'Ivoire.',
    'footer.quicklinks': 'Quick Links',
    'footer.followus': 'Follow Us',
    'footer.rights': 'All rights reserved.',
  },
  
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.activities': 'أنشطتنا',
    'nav.news': 'الأخبار',
    'nav.gallery': 'المعرض',
    'nav.contact': 'اتصل بنا',
    'nav.donate': 'تبرع',
    
    // Hero Section
    'hero.title': 'سفراء الأمل',
    'hero.subtitle': 'معاً من أجل التنمية الاجتماعية والرفاه في ساحل العاج',
    'hero.description': 'منذ إنشائنا، نعمل على تحسين ظروف معيشة المجتمعات من خلال برامج التدريب المهني والتنمية الاجتماعية والمساعدات الإنسانية.',
    'hero.support': 'ادعمنا',
    'hero.contact': 'اتصل بنا',
    
    // About Section
    'about.title': 'حول منظمة AMES-CI',
    'about.mission.title': 'مهمتنا',
    'about.mission.text': 'تعزيز الرفاه الاجتماعي والتنمية المجتمعية من خلال التعليم والتدريب المهني والمساعدة الإنسانية.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.text': 'أن نكون جهة مرجعية في التنمية الاجتماعية في ساحل العاج، مساهمين في تمكين المجتمعات.',
    'about.values.title': 'قيمنا',
    'about.values.text': 'النزاهة والتضامن والتميز والالتزام بالتنمية المستدامة.',
    
    // Activities Section
    'activities.title': 'أنشطتنا',
    'activities.training.title': 'التدريب المهني',
    'activities.training.description': 'نقدم برامج تدريبية في اللحام والتبريد والتكييف ونجارة الألمنيوم والخياطة.',
    'activities.social.title': 'التنمية الاجتماعية',
    'activities.social.description': 'مشاريع مجتمعية تهدف إلى تحسين البنية التحتية وظروف المعيشة.',
    'activities.humanitarian.title': 'المساعدة الإنسانية',
    'activities.humanitarian.description': 'توزيع المواد الغذائية والمعدات ومساعدة السكان المستضعفين.',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال',
    
    // Footer
    'footer.description': 'منظمة غير حكومية مكرسة للتنمية الاجتماعية ورفاه المجتمع في ساحل العاج.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.followus': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};