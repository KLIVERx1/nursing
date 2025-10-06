import React from 'react';
import { Activity, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-2.5 rounded-xl">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Rumi</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent"> Healthcare</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.quick_links')}</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('nav.home')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('nav.services')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('nav.about')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('appointment')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('nav.appointment')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('nav.contact')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.our_services')}</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">{t('services.personal_care')}</li>
                <li className="text-gray-400">{t('services.skilled_nursing')}</li>
                <li className="text-gray-400">{t('services.companionship')}</li>
                <li className="text-gray-400">{t('services.respite_care')}</li>
                <li className="text-gray-400">{t('services.24_7_care')}</li>
                <li className="text-gray-400">{t('services.chronic_care')}</li>
              </ul>
            </div>

            {/* Legal Information */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.legal_info')}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.privacy_policy')}
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.terms_service')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border-t border-gray-800 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.contact_info')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">{t('nav.phone')}</p>
                    <p className="text-gray-400 text-sm">{t('footer.emergency_line')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white">pageinfo@simurghfoundation.nl</p>
                    <p className="text-gray-400 text-sm">{t('footer.response_time')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white">Lau mazirellaan 426</p>
                    <p className="text-white">2525 WV, Den Haag</p>
                    <p className="text-gray-400 text-sm">{t('footer.serving_metro')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-2">Openingstijden</p>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>Maandag: 08:00 - 21:00</p>
                      <p>Dinsdag: 08:00 - 21:00</p>
                      <p>Woensdag: 08:00 - 21:00</p>
                      <p>Donderdag: 08:00 - 21:00</p>
                      <p>Vrijdag: 08:00 - 21:00</p>
                      <p>Zaterdag: 08:00 - 21:00</p>
                      <p>Zondag: 08:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start space-x-3 mb-6">
                <Clock className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-2">Openingstijden</p>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>Maandag: 08:00 - 21:00</p>
                    <p>Dinsdag: 08:00 - 21:00</p>
                    <p>Woensdag: 08:00 - 21:00</p>
                    <p>Donderdag: 08:00 - 21:00</p>
                    <p>Vrijdag: 08:00 - 21:00</p>
                    <p>Zaterdag: 08:00 - 21:00</p>
                    <p>Zondag: 08:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </div>
          </div>
        </div>

        {/* License Information */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center text-xs text-gray-500">
            <p>{t('footer.license_info')}</p>
            <p className="mt-1">{t('footer.accreditation')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;