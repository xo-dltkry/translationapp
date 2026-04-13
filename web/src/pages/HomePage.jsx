
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, FileCheck, BarChart3, Award, Scale, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

function HomePage() {
  const { t } = useLanguage();
  const services = [
    {
      icon: FileText,
      title: t('home.services.contractsTitle'),
      description: t('home.services.contractsDescription'),
    },
    {
      icon: FileCheck,
      title: t('home.services.invoicesTitle'),
      description: t('home.services.invoicesDescription'),
    },
    {
      icon: BarChart3,
      title: t('home.services.reportsTitle'),
      description: t('home.services.reportsDescription'),
    },
    {
      icon: Award,
      title: t('home.services.certificatesTitle'),
      description: t('home.services.certificatesDescription'),
    },
    {
      icon: Scale,
      title: t('home.services.legalTitle'),
      description: t('home.services.legalDescription'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('home.metaTitle')}</title>
        <meta
          name="description"
          content={t('home.metaDescription')}
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {t('home.title')}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  {t('home.description')}
                </p>
                <Link to="/translate">
                  <Button size="lg" className="transition-all duration-200 active:scale-[0.98]">
                    {t('home.cta')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('home.servicesTitle')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('home.servicesDescription')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center mt-12"
              >
                <Link to="/translate">
                  <Button variant="outline" size="lg" className="transition-all duration-200">
                    {t('home.ctaSecondary')}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
