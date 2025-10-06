import React from 'react';
import { Users, Award, Heart, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: t('about.compassion'),
      description: t('about.compassion_desc')
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t('about.trust'),
      description: t('about.trust_desc')
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: t('about.excellence'),
      description: t('about.excellence_desc')
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('about.family'),
      description: t('about.family_desc')
    }
  ];

  const stats = [
    { number: "20+", label: t('hero.years_experience') },
    { number: "750+", label: t('hero.happy_families') },
    { number: "75+", label: "Care Professionals" },
    { number: "24/7", label: t('hero.care_available') }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {t('about.badge')}
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.title').split(' ').slice(0, 2).join(' ')}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent"> {t('about.title').split(' ').slice(2).join(' ')}</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              {t('about.description1')}
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              {t('about.description2')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <div className="text-purple-600">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Image & Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/6823618/pexels-photo-6823618.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional healthcare team"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-purple-200 rounded-2xl transform -rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission_title')}</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('about.mission_text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;