
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/context/LanguageContext';

function ContactPage() {
  const { t } = useLanguage();
  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '+7 (727) 555-0123',
      link: 'tel:+77275550123',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: 'info@aldispetro.kz',
      link: 'mailto:info@aldispetro.kz',
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      content: t('contact.addressValue'),
      link: null,
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      content: t('contact.hoursValue'),
      link: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('contact.metaTitle')}</title>
        <meta
          name="description"
          content={t('contact.metaDescription')}
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
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {t('contact.title')}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('contact.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-card rounded-2xl shadow-lg p-8 h-full">
                    <h2 className="text-2xl font-semibold mb-6">{t('contact.sendMessage')}</h2>
                    <ContactForm />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="bg-muted/50 rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-6">{t('contact.contactInformation')}</h2>
                    <div className="space-y-6">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-1">{item.title}</p>
                            {item.link ? (
                              <a
                                href={item.link}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">{item.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                    <h3 className="text-lg font-semibold mb-3">{t('contact.needQuote')}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('contact.quoteDescription')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
