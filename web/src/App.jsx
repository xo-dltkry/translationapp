
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import TranslationToolPage from './pages/TranslationToolPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useLanguage } from '@/context/LanguageContext';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/translate" element={<TranslationToolPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t('notFound.title')}</h1>
        <p className="text-muted-foreground mb-6">{t('notFound.description')}</p>
        <a href="/" className="text-primary hover:underline">
          {t('notFound.backToHome')}
        </a>
      </div>
    </div>
  );
}

export default App;
