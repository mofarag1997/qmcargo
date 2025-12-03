import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col`}>
        <div dir="ltr" style={{ direction: 'ltr' }}>
          <Header language={language} toggleLanguage={toggleLanguage} />
        </div>
        <main className={`flex-grow ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <Routes>
            <Route path="/" element={<Landing language={language} />} />
            <Route path="/services" element={<Services language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <Footer language={language} />
        </div>
      </div>
    </Router>
  );
}
