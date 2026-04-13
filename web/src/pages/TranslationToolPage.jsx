
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TranslationForm from '@/components/TranslationForm';

function TranslationToolPage() {
  return (
    <>
      <Helmet>
        <title>Translation Tool | ALDIS Petrosolutions</title>
        <meta
          name="description"
          content="Translate your documents and text between Kazakh, English, and Russian with ALDIS Petrosolutions professional translation tool."
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
                  Translation tool
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Upload your document or enter text to translate between Kazakh, English, and Russian
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
