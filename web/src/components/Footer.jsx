
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-lg font-bold text-foreground">ALDIS Petrosolutions</span>
            <p className="mt-4 text-sm leading-relaxed">
              Professional corporate document translation services specializing in contracts, invoices, reports, certificates, and legal documents.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</span>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors duration-200">
                Home
              </Link>
              <Link to="/translate" className="text-sm hover:text-primary transition-colors duration-200">
                Translation Tool
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact Information</span>
            <div className="mt-4 flex flex-col space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+7 (727) 555-0123</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@aldispetro.kz</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Almaty, Kazakhstan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} ALDIS Petrosolutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
