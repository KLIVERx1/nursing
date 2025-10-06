import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-emerald-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%237c3aed%22 fill-opacity=%220.04%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4 mr-2" />
              {t('hero.badge')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.title').split(' ').slice(0, 1).join(' ')}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent"> {t('hero.title').split(' ').slice(1, 3).join(' ')} </span>
              {t('hero.title').split(' ').slice(3).join(' ')}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToAppointment}
                className="group bg-gradient-to-r from-purple-600 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                {t('hero.schedule_consultation')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600">750+</div>
                <div className="text-gray-600">{t('hero.happy_families')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600">{t('hero.care_available')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className="text-gray-600">{t('hero.years_experience')}</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional nurse providing home care"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('hero.certified')}</div>
                    <div className="text-sm text-gray-600">{t('hero.licensed_professionals')}</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('hero.support')}</div>
                    <div className="text-sm text-gray-600">{t('hero.always_available')}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-emerald-200 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;