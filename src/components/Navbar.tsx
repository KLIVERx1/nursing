import React, { useState } from 'react';
import { Activity, Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-2.5 rounded-xl">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Rumi</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent"> Healthcare</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('quality')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              {t('nav.quality')}
            </button>
            <button 
              onClick={() => scrollToSection('appointment')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              {t('nav.appointment')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* CTA Button & Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <div className="flex items-center space-x-2 text-purple-600">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">{t('nav.phone')}</span>
            </div>
            <button 
              onClick={() => scrollToSection('appointment')}
              className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('nav.book_now')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('quality')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t('nav.quality')}
              </button>
              <button 
                onClick={() => scrollToSection('appointment')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t('nav.appointment')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t('nav.contact')}
              </button>
              <div className="px-3 py-2">
                <div className="mb-3">
                  <LanguageToggle />
                </div>
                <div className="flex items-center space-x-2 text-purple-600 mb-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">{t('nav.phone')}</span>
                </div>
                <button 
                  onClick={() => scrollToSection('appointment')}
                  className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {t('nav.book_now')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;