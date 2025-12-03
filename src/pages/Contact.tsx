import svgPaths from "../imports/svg-wi14eunmrb";
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  language: string;
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const translations = {
    ar: {
      pageTitle: 'اتصل بنا',
      pageSubtitle: 'نحن هنا لخدمتك. تواصل معنا الآن',
      formTitle: 'أرسل لنا رسالة',
      nameLabel: 'الاسم',
      namePlaceholder: 'أدخل اسمك الكامل',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'your@email.com',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '+971XXXXXXXXX',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'اكتب رسالتك هنا...',
      submitButton: 'إرسال الرسالة',
      contactInfoTitle: 'معلومات الاتصال',
      phone: '+971526497018',
      email: 'info@qmcargo.ae',
      address: 'دبي ابوهيل مكتب رقم 05',
      addressDetail: 'الإمارات العربية المتحدة',
      hours: 'ساعات العمل',
      hoursDetail: 'الأحد - الخميس: 9 صباحاً - 6 مساءً',
      hoursDetail2: 'الجمعة - السبت: مغلق',
      whatsappButton: 'راسلنا على واتساب',
      callButton: 'اتصل الآن',
    },
    en: {
      pageTitle: 'Contact Us',
      pageSubtitle: 'We are here to serve you. Contact us now',
      formTitle: 'Send Us a Message',
      nameLabel: 'Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+971XXXXXXXXX',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message here...',
      submitButton: 'Send Message',
      contactInfoTitle: 'Contact Information',
      phone: '+971526497018',
      email: 'info@qmcargo.ae',
      address: 'Dubai Abu Hail Office No. 05',
      addressDetail: 'United Arab Emirates',
      hours: 'Working Hours',
      hoursDetail: 'Sunday - Thursday: 9 AM - 6 PM',
      hoursDetail2: 'Friday - Saturday: Closed',
      whatsappButton: 'Message on WhatsApp',
      callButton: 'Call Now',
    }
  };

  const t = translations[language as keyof typeof translations];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `.trim();
    
    const whatsappUrl = `https://wa.me/971526497018?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/971526497018', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+971526497018';
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Tajawal:Bold',sans-serif] text-4xl md:text-5xl mb-4">
            {t.pageTitle}
          </h1>
          <p className="font-['Tajawal:Regular',sans-serif] text-lg md:text-xl text-gray-200">
            {t.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-['Tajawal:Bold',sans-serif] text-2xl md:text-3xl mb-6 text-[#0a1f44]">
                {t.formTitle}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-['Tajawal:Medium',sans-serif] text-gray-700 mb-2">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 font-['Tajawal:Regular',sans-serif]"
                    placeholder={t.namePlaceholder}
                  />
                </div>

                <div>
                  <label className="block font-['Tajawal:Medium',sans-serif] text-gray-700 mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 font-['Tajawal:Regular',sans-serif]"
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                <div>
                  <label className="block font-['Tajawal:Medium',sans-serif] text-gray-700 mb-2">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 font-['Tajawal:Regular',sans-serif]"
                    placeholder={t.phonePlaceholder}
                  />
                </div>

                <div>
                  <label className="block font-['Tajawal:Medium',sans-serif] text-gray-700 mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 font-['Tajawal:Regular',sans-serif] resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-lg font-['Tajawal:Bold',sans-serif] transition-colors"
                >
                  {t.submitButton}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="font-['Tajawal:Bold',sans-serif] text-2xl md:text-3xl mb-6 text-[#0a1f44]">
                  {t.contactInfoTitle}
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="font-['Tajawal:Bold',sans-serif] text-[#0a1f44] mb-2">
                        {language === 'ar' ? 'الهاتف' : 'Phone'}
                      </h3>
                      <a 
                        href={`tel:${t.phone}`}
                        className="font-['Tajawal:Regular',sans-serif] text-gray-600 hover:text-blue-800 block"
                      >
                        {t.phone}
                      </a>
                      <a 
                        href={`tel:${t.phone2}`}
                        className="font-['Tajawal:Regular',sans-serif] text-gray-600 hover:text-blue-800 block"
                      >
                        {t.phone2}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="font-['Tajawal:Bold',sans-serif] text-[#0a1f44] mb-2">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </h3>
                      <a 
                        href={`mailto:${t.email}`}
                        className="font-['Tajawal:Regular',sans-serif] text-gray-600 hover:text-blue-800"
                      >
                        {t.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="font-['Tajawal:Bold',sans-serif] text-[#0a1f44] mb-2">
                        {language === 'ar' ? 'العنوان' : 'Address'}
                      </h3>
                      <p className="font-['Tajawal:Regular',sans-serif] text-gray-600">
                        {t.address}
                      </p>
                      <p className="font-['Tajawal:Regular',sans-serif] text-gray-600">
                        {t.addressDetail}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="font-['Tajawal:Bold',sans-serif] text-[#0a1f44] mb-2">
                        {t.hours}
                      </h3>
                      <p className="font-['Tajawal:Regular',sans-serif] text-gray-600">
                        {t.hoursDetail}
                      </p>
                      <p className="font-['Tajawal:Regular',sans-serif] text-gray-600">
                        {t.hoursDetail2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 font-['Tajawal:Bold',sans-serif] transition-all"
                >
                  <span>{t.whatsappButton}</span>
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 21 24">
                    <path d={svgPaths.p24436500} />
                  </svg>
                </button>

                <button
                  onClick={handleCall}
                  className="w-full bg-[#d4af37] hover:bg-[#c19d2f] text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 font-['Tajawal:Bold',sans-serif] transition-all"
                >
                  <span>{t.callButton}</span>
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 18 18">
                    <path d={svgPaths.p5f79f00} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-96">
        <iframe
          title="QM Cargo Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.7352008938!2d55.28891142345127!3d25.229816710543357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8f0f0f0f0f%3A0x0!2sDubai%20Abu%20Hail!5e0!3m2!1sen!2sae!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
