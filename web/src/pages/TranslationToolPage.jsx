
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TranslationForm from '@/components/TranslationForm';
import { useLanguage } from '@/context/LanguageContext';

function TranslationToolPage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('translationPage.metaTitle')}</title>
        <meta
          name="description"
          content={t('translationPage.metaDescription')}
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {t('translationPage.title')}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('translationPage.description')}
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
                <TranslationForm />
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default TranslationToolPage;
