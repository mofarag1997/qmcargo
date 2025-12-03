import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const translations = {
    ar: {
      companyName: 'QM Cargo',
      tagline: 'لخدمات الشحن والنقل',
      contactInfo: 'معلومات الاتصال',
      address: 'دبي ابوهيل مكتب رقم 05',
      phone: '+971526497018',
      email: 'info@qmcargo.ae',
      rights: '© 2025 QM Cargo. جميع الحقوق محفوظة'
    },
    en: {
      companyName: 'QM Cargo',
      tagline: 'Shipping and Transport Services',
      contactInfo: 'Contact Information',
      address: 'Dubai Abu Hail Office No. 05',
      phone: '+971526497018',
      email: 'info@qmcargo.ae',
      rights: '© 2025 QM Cargo. All rights reserved'
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <footer className="bg-[#0a1f44] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-['Tajawal:Bold',sans-serif] text-xl mb-4">
              {t.companyName}
            </h3>
            <p className="font-['Tajawal:Regular',sans-serif] text-gray-300">
              {t.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Tajawal:Bold',sans-serif] mb-4">
              {t.contactInfo}
            </h4>
            <div className="space-y-3 font-['Tajawal:Regular',sans-serif] text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <a href={`tel:${t.phone}`} className="hover:text-[#d4af37] transition-colors">
                  {t.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <a href={`mailto:${t.email}`} className="hover:text-[#d4af37] transition-colors">
                  {t.email}
                </a>
              </div>
            </div>
          </div>

          {/* Empty space for balance */}
          <div></div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-['Tajawal:Regular',sans-serif] text-gray-400">
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
