import svgPaths from "../imports/svg-wi14eunmrb";
import { Package, Ship, Plane, Truck, Globe, Shield } from 'lucide-react';

interface ServicesProps {
  language: string;
}

export default function Services({ language }: ServicesProps) {
  const translations = {
    ar: {
      pageTitle: 'خدماتنا',
      pageSubtitle: 'نقدم مجموعة شاملة من خدمات الشحن والنقل لتلبية جميع احتياجاتكم',
      service3Title: 'الشحن البري',
      service3Desc: 'خدمات نقل برية موثوقة داخل الإمارات ودول الخليج',
      service4Title: 'التخليص الجمركي',
      service4Desc: 'خدمات تخليص جمركي متكاملة لتسهيل إجراءات الاستيراد والتصدير',
      service6Title: 'التأمين على البضائع',
      service6Desc: 'حماية شاملة لبضائعكم ضد جميع المخاطر أثناء النقل',
      whyChooseTitle: 'لماذا تختار خدماتنا؟',
      feature1: 'تتبع الشحنات لحظياً',
      feature2: 'أسعار تنافسية',
      feature3: 'فريق محترف',
      feature4: 'تغطية عالمية',
      ctaTitle: 'هل تحتاج إلى عرض أسعار؟',
      ctaText: 'اتصل بنا الآن للحصول على عرض أسعار مخصص لاحتياجاتك',
      ctaButton: 'احصل على عرض سعر',
    },
    en: {
      pageTitle: 'Our Services',
      pageSubtitle: 'We offer a comprehensive range of shipping and transport services to meet all your needs',
      service3Title: 'Land Transport',
      service3Desc: 'Reliable land transport services within UAE and GCC countries',
      service4Title: 'Customs Clearance',
      service4Desc: 'Complete customs clearance services to facilitate import and export procedures',
      service6Title: 'Cargo Insurance',
      service6Desc: 'Comprehensive protection for your goods against all risks during transport',
      whyChooseTitle: 'Why Choose Our Services?',
      feature1: 'Real-time Tracking',
      feature2: 'Competitive Prices',
      feature3: 'Professional Team',
      feature4: 'Global Coverage',
      ctaTitle: 'Need a Quote?',
      ctaText: 'Contact us now to get a customized quote for your needs',
      ctaButton: 'Get a Quote',
    }
  };

  const t = translations[language as keyof typeof translations];

  const services = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: t.service3Title,
      description: t.service3Desc,
      color: 'gold'
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: t.service4Title,
      description: t.service4Desc,
      color: 'gold'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: t.service6Title,
      description: t.service6Desc,
      color: 'gold'
    }
  ];

  const features = [
    t.feature1,
    t.feature2,
    t.feature3,
    t.feature4
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Tajawal:Bold',sans-serif] text-4xl md:text-5xl mb-4">
            {t.pageTitle}
          </h1>
          <p className="font-['Tajawal:Regular',sans-serif] text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            {t.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  service.color === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-[#d4af37]/20 text-[#d4af37]'
                }`}>
                  {service.icon}
                </div>
                <h3 className="font-['Tajawal:Bold',sans-serif] text-xl mb-3 text-[#0a1f44]">
                  {service.title}
                </h3>
                <p className="font-['Tajawal:Regular',sans-serif] text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Tajawal:Bold',sans-serif] text-3xl md:text-4xl text-center mb-12 text-[#0a1f44]">
            {t.whyChooseTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 20 20">
                    <path d={svgPaths.p1754dec0} />
                  </svg>
                </div>
                <p className="font-['Tajawal:Bold',sans-serif] text-lg">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#d4af37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Tajawal:Bold',sans-serif] text-3xl md:text-4xl text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="font-['Tajawal:Regular',sans-serif] text-lg text-white/90 mb-8">
            {t.ctaText}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#d4af37] px-8 py-4 rounded-lg font-['Tajawal:Bold',sans-serif] hover:bg-gray-100 transition-colors shadow-lg"
          >
            {t.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}
