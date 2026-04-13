
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Globe, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

function AboutPage() {
  const { t } = useLanguage();
  const features = [
    {
      icon: Users,
      title: t('about.features.teamTitle'),
      description: t('about.features.teamDescription'),
    },
    {
      icon: Globe,
      title: t('about.features.multilingualTitle'),
      description: t('about.features.multilingualDescription'),
    },
    {
      icon: Shield,
      title: t('about.features.confidentialityTitle'),
      description: t('about.features.confidentialityDescription'),
    },
    {
      icon: CheckCircle2,
      title: t('about.features.qualityTitle'),
      description: t('about.features.qualityDescription'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.metaTitle')}</title>
        <meta
          name="description"
          content={t('about.metaDescription')}
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
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {t('about.title')}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {t('about.intro')}
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t('about.expertiseTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('about.expertiseText1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.expertiseText2')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-muted/50 rounded-xl p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t('about.commitmentTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.commitmentText')}
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
