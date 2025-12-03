import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
}

export default function Header({ language, toggleLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const translations = {
    ar: {
      home: 'الرئيسية',
      services: 'الخدمات',
      aboutUs: 'من نحن',
      contact: 'اتصل بنا',
      companyName: 'QM Cargo'
    },
    en: {
      home: 'Home',
      services: 'Services',
      aboutUs: 'About Us',
      contact: 'Contact',
      companyName: 'QM Cargo'
    }
  };

  const t = translations[language as keyof typeof translations];

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/services', label: t.services },
    { path: '/contact', label: t.contact },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Always Left */}
          <div style={{ order: 1 }}>
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-800 text-white px-4 py-2 rounded-md">
                <span className="font-['Tajawal:Bold',sans-serif]">{t.companyName}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" style={{ order: 2 }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-['Tajawal:Medium',sans-serif] transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-800'
                    : 'text-gray-700 hover:text-blue-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle Button - Desktop */}
          <button
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-2 bg-[#d4af37] text-white px-4 py-2 rounded-full hover:bg-[#c19d2f] transition-colors"
            aria-label="Toggle language"
            dir="ltr"
            style={{ direction: 'ltr', order: 3 }}
          >
            <Globe className="w-4 h-4" style={{ transform: language === 'ar' ? 'scaleX(-1)' : 'scaleX(1)' }} />
            <span className="font-['Tajawal:Medium',sans-serif]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {language === 'ar' ? 'English' : 'العربية'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2" style={{ order: 3 }}>
            <button
              onClick={toggleLanguage}
              className="p-2 bg-[#d4af37] text-white rounded-full hover:bg-[#c19d2f] transition-colors"
              aria-label="Toggle language"
              dir="ltr"
              style={{ direction: 'ltr' }}
            >
              <Globe className="w-5 h-5" style={{ transform: language === 'ar' ? 'scaleX(-1)' : 'scaleX(1)' }} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-md font-['Tajawal:Medium',sans-serif] transition-colors ${
                  location.pathname === link.path
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
