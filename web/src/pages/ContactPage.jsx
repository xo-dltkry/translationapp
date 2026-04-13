
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+7 (727) 555-0123',
      link: 'tel:+77275550123',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@aldispetro.kz',
      link: 'mailto:info@aldispetro.kz',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Almaty, Kazakhstan',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | ALDIS Petrosolutions</title>
        <meta
          name="description"
          content="Get in touch with ALDIS Petrosolutions for professional translation services. Contact us for quotes, inquiries, or to discuss your translation needs."
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
                  Contact us
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Have questions about our translation services? Get in touch with our team
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-card rounded-2xl shadow-lg p-8 h-full">
                    <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
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
                    <h2 className="text-2xl font-semibold mb-6">Contact information</h2>
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
                    <h3 className="text-lg font-semibold mb-3">Need a quote?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For translation quotes, please provide details about your document type, language pair, word count, and deadline. We typically respond within 24 hours with a detailed quote and timeline.
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
