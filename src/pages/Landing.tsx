import svgPaths from "../imports/svg-wi14eunmrb";
import imgHero from "figma:asset/1e4ffca655e66a7099ce7f3fbe7e8d5fccdc1398.png";
import imgTrucks from "figma:asset/5226d1b578902040a84f09b9c9a303d1ebdbbcf8.png";
import imgWarehouse from "figma:asset/ae85efcaaee7b37e826b7d7059a77a02f3a9fc29.png";
import { MessageCircle } from 'lucide-react';

interface LandingProps {
  language: string;
}

export default function Landing({ language }: LandingProps) {
  const translations = {
    ar: {
      heroTag: 'شريكك الموثوق في الشحن الدولي',
      companyName: 'QM Cargo',
      serviceTitle: 'لخدمات الشحن والنقل',
      address: 'العنوان دبي ابوهيل مكتب رقم 05',
      whatsapp: 'تواصل واتساب',
      call: 'اتصل الآن',
      stat1: '100%',
      stat1Label: 'موثوقية',
      stat2: '24/7',
      stat2Label: 'دعم متواصل',
      stat3: '500',
      stat3Label: 'عميل راضٍ',
      aboutTag: 'من نحن',
      aboutTitle1: 'رواد الشحن والنقل',
      aboutTitle2: 'في دولة الإمارات',
      aboutText1: 'كيو ام كارجو لخدمات الشحن هي شركة رائدة في مجال الشحن والنقل الدولي، نوفر حلول شحن متكاملة',
      aboutText2: 'نفخر بخبرتنا الواسعة وفريقنا المحترف الذي يضمن وصول شحناتكم بأمان وفي الوقت المحدد.',
      aboutText3: 'نلتزم بتقديم أفضل الخدمات اللوجستية بأسعار تنافسية، مع التركيز على رضا',
      aboutText4: 'العملاء والجودة العالية في كل مرحلة من مراحل الشحن.',
      feature1: 'سرعه شحن',
      feature2: 'مرخص رسمياً',
      feature2Sub: 'من حكومة دبي',
      whyTag: 'لماذا تختارنا',
      whyTitle1: 'نحن الخيار الأمثل',
      whyTitle2: 'لخدمات الشحن',
      whySubtitle: 'نجمع بين الخبرة والاحترافية لنقدم لك أفضل تجربة شحن',
      service1Title: 'دعم متواصل',
      service1Text: 'فريق دعم متاح على مدار الساعة للإجابة على استفساراتك وحل مشاكلك',
      service2Title: 'موثوقية عالية',
      service2Text: 'شركة مرخصة ومعتمدة مع سجل حافل من النجاحات وآلاف العملاء الراضين',
      service3Title: 'أسعار تنافسية',
      service3Text: 'نقدم أفضل الأسعار في السوق مع خصومات خاصة للعملاء الدائمين',
    },
    en: {
      heroTag: 'Your Trusted Partner in International Shipping',
      companyName: 'QM Cargo',
      serviceTitle: 'Shipping and Transport Services',
      address: 'Address: Dubai Abu Hail Office No. 05',
      whatsapp: 'WhatsApp',
      call: 'Call Now',
      stat1: '100%',
      stat1Label: 'Reliability',
      stat2: '24/7',
      stat2Label: 'Continuous Support',
      stat3: '500',
      stat3Label: 'Satisfied Clients',
      aboutTag: 'About Us',
      aboutTitle1: 'Leaders in Shipping',
      aboutTitle2: 'and Transport in UAE',
      aboutText1: 'QM Cargo is a leading company in international shipping and transport, providing comprehensive shipping solutions',
      aboutText2: 'We pride ourselves on our extensive experience and professional team that ensures your shipments arrive safely and on time.',
      aboutText3: 'We are committed to providing the best logistics services at competitive prices, focusing on customer',
      aboutText4: 'satisfaction and high quality at every stage of shipping.',
      feature1: 'Fast Shipping',
      feature2: 'Officially Licensed',
      feature2Sub: 'By Dubai Government',
      whyTag: 'Why Choose Us',
      whyTitle1: 'We Are the Best Choice',
      whyTitle2: 'for Shipping Services',
      whySubtitle: 'We combine experience and professionalism to provide you with the best shipping experience',
      service1Title: 'Continuous Support',
      service1Text: 'Support team available 24/7 to answer your questions and solve your problems',
      service2Title: 'High Reliability',
      service2Text: 'Licensed and accredited company with a proven track record of success and thousands of satisfied customers',
      service3Title: 'Competitive Prices',
      service3Text: 'We offer the best prices in the market with special discounts for regular customers',
    }
  };

  const t = translations[language as keyof typeof translations];

  const handleWhatsApp = () => {
    window.open('https://wa.me/971526497018', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+971526497018';
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          <img 
            src={imgHero} 
            alt="" 
            className="absolute h-[205.71%] left-0 max-w-none top-[-52.86%] w-full object-cover"
          />
          <img 
            src={imgTrucks} 
            alt="" 
            className="absolute inset-0 max-w-none object-cover w-full h-full"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[rgba(10,31,68,0.9)] to-[rgba(30,64,175,0.8)]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-6">
            {/* Tag */}
            <div className="backdrop-blur-sm bg-[rgba(212,175,55,0.2)] px-4 py-2 rounded-full">
              <p className="font-['Tajawal:Medium',sans-serif] text-[#d4af37] text-sm md:text-base">
                {t.heroTag}
              </p>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="font-['Tajawal:Bold',sans-serif] text-white text-4xl md:text-6xl">
                {t.companyName}
              </h1>
              <h2 className="font-['Tajawal:Bold',sans-serif] text-[#d4af37] text-4xl md:text-6xl">
                {t.serviceTitle}
              </h2>
            </div>

            {/* Address */}
            <p className="font-['Tajawal:Regular',sans-serif] text-gray-200 text-lg md:text-2xl">
              {t.address}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 font-['Tajawal:Bold',sans-serif] transition-all transform hover:scale-105"
              >
                <span>{t.whatsapp}</span>
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="white" viewBox="0 0 21 24">
                  <path d={svgPaths.p24436500} />
                </svg>
              </button>

              <button
                onClick={handleCall}
                className="bg-[#d4af37] hover:bg-[#c19d2f] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 font-['Tajawal:Bold',sans-serif] transition-all transform hover:scale-105"
              >
                <span>{t.call}</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="white" viewBox="0 0 18 18">
                  <path d={svgPaths.p5f79f00} />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
              <div className="backdrop-blur-md bg-[rgba(255,255,255,0.1)] px-6 py-4 rounded-lg">
                <p className="font-['Tajawal:Bold',sans-serif] text-[#d4af37] text-2xl md:text-3xl">{t.stat1}</p>
                <p className="font-['Tajawal:Regular',sans-serif] text-gray-200 text-sm">{t.stat1Label}</p>
              </div>
              <div className="backdrop-blur-md bg-[rgba(255,255,255,0.1)] px-6 py-4 rounded-lg">
                <p className="font-['Tajawal:Bold',sans-serif] text-[#d4af37] text-2xl md:text-3xl">{t.stat2}</p>
                <p className="font-['Tajawal:Regular',sans-serif] text-gray-200 text-sm">{t.stat2Label}</p>
              </div>
              <div className="backdrop-blur-md bg-[rgba(255,255,255,0.1)] px-6 py-4 rounded-lg">
                <p className="font-['Tajawal:Bold',sans-serif] text-[#d4af37] text-2xl md:text-3xl">{t.stat3}</p>
                <p className="font-['Tajawal:Regular',sans-serif] text-gray-200 text-sm">{t.stat3Label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-500 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="bg-[rgba(30,64,175,0.1)] inline-block px-4 py-2 rounded-full">
                  <p className="font-['Tajawal:Medium',sans-serif] text-blue-800">
                    {t.aboutTag}
                  </p>
                </div>

                <div>
                  <h2 className="font-['Tajawal:Bold',sans-serif] text-[#0a1f44] text-3xl md:text-4xl">
                    {t.aboutTitle1}
                  </h2>
                  <h3 className="font-['Tajawal:Bold',sans-serif] text-blue-800 text-3xl md:text-4xl">
                    {t.aboutTitle2}
                  </h3>
                </div>

                <div className="space-y-4 font-['Tajawal:Regular',sans-serif] text-gray-700 text-lg">
                  <p>{t.aboutText1}</p>
                  <p>{t.aboutText2}</p>
                  <p>{t.aboutText3}</p>
                  <p>{t.aboutText4}</p>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-3 bg-[rgba(30,64,175,0.2)] px-6 py-3 rounded-lg">
                    <div className="w-12 h-12 bg-[rgba(30,64,175,0.2)] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" fill="#1E40AF" viewBox="0 0 20 20">
                        <path d={svgPaths.pb158180} />
                      </svg>
                    </div>
                    <span className="font-['Tajawal:Bold',sans-serif] text-[#0a1f44]">{t.feature1}</span>
                  </div>

                  <div className="flex items-center gap-3 bg-[rgba(212,175,55,0.2)] px-6 py-3 rounded-lg">
                    <div className="w-12 h-12 bg-[rgba(212,175,55,0.2)] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" fill="#D4AF37" viewBox="0 0 20 20">
                        <path d={svgPaths.p1754dec0} />
                      </svg>
                    </div>
                    <div>
                      <p className="font-['Tajawal:Bold',sans-serif] text-[#0a1f44]">{t.feature2}</p>
                      <p className="font-['Tajawal:Regular',sans-serif] text-gray-600 text-sm">{t.feature2Sub}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={imgWarehouse} 
                  alt="Warehouse" 
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#0a1f44] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-[rgba(212,175,55,0.2)] inline-block px-4 py-2 rounded-full mb-6">
              <p className="font-['Tajawal:Medium',sans-serif] text-[#d4af37]">
                {t.whyTag}
              </p>
            </div>

            <h2 className="font-['Tajawal:Bold',sans-serif] text-white text-3xl md:text-4xl mb-2">
              {t.whyTitle1}
            </h2>
            <h3 className="font-['Tajawal:Bold',sans-serif] text-[#d4af37] text-3xl md:text-4xl mb-6">
              {t.whyTitle2}
            </h3>
            <p className="font-['Tajawal:Regular',sans-serif] text-white text-lg">
              {t.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Service Card 1 */}
            <div className="backdrop-blur-md bg-[rgba(255,255,255,0.1)] rounded-xl p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="white" viewBox="0 0 30 30">
                  <path d={svgPaths.p1edb7e80} />
                </svg>
              </div>
              <h4 className="font-['Tajawal:Bold',sans-serif] text-white text-xl text-center mb-3">
                {t.service1Title}
              </h4>
              <p className="font-['Tajawal:Regular',sans-serif] text-gray-200 text-center text-sm">
                {t.service1Text}
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="backdrop-blur-md bg-[rgba(255,255,255,0.1)] rounded-xl p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="white" viewBox="0 0 30 30">
                  <path d={svgPaths.p2f5284a0} />
                </svg>
              </div>
              <h4 className="font-['Tajawal:Bold',sans-serif] text-white text-xl text-center mb-3">
                {t.service2Title}
              </h4>
              <p className="font-['Tajawal:Regular',sans-serif] text-gray-200 text-center text-sm">
                {t.service2Text}
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="backdrop-blur-md bg-[rgba(255,255,255,0.1)] rounded-xl p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-8" fill="white" viewBox="0 0 19 30">
                  <path d={svgPaths.p26bc640} />
                </svg>
              </div>
              <h4 className="font-['Tajawal:Bold',sans-serif] text-white text-xl text-center mb-3">
                {t.service3Title}
              </h4>
              <p className="font-['Tajawal:Regular',sans-serif] text-gray-200 text-center text-sm">
                {t.service3Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971526497018"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </div>
  );
}
