
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Globe, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function AboutPage() {
  const features = [
    {
      icon: Users,
      title: 'Expert team',
      description: 'Our translators are native speakers with specialized expertise in legal, technical, and business terminology.',
    },
    {
      icon: Globe,
      title: 'Multilingual services',
      description: 'We provide professional translation services across Kazakh, English, and Russian language pairs.',
    },
    {
      icon: Shield,
      title: 'Confidentiality guaranteed',
      description: 'All documents are handled with strict confidentiality protocols and secure data management.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality assurance',
      description: 'Every translation undergoes rigorous quality checks and proofreading by senior linguists.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | ALDIS Petrosolutions</title>
        <meta
          name="description"
          content="Learn about ALDIS Petrosolutions, our expert translation team, and our commitment to delivering accurate, confidential corporate document translation services."
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
                  About ALDIS Petrosolutions
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  We are a professional translation service provider specializing in corporate and legal document translation. With years of experience in the industry, we deliver accurate, reliable, and confidential translation services for businesses operating in Kazakhstan and internationally.
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our expertise</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  ALDIS Petrosolutions has built a reputation for excellence in translating complex corporate documents. Our team comprises certified translators with deep knowledge of legal, financial, and technical terminology across multiple industries including energy, finance, manufacturing, and legal services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that accurate translation is critical for business operations, legal compliance, and international communication. Our rigorous quality control processes ensure that every document maintains its original meaning, tone, and legal validity across languages.
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
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At ALDIS Petrosolutions, we are committed to delivering translation services that meet the highest professional standards. We combine linguistic expertise with industry knowledge to ensure that your documents are translated accurately, maintaining their legal validity and business impact. Your trust and confidentiality are our top priorities.
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
