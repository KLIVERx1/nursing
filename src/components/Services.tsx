import React from 'react';
import { Heart, Home, UserCheck, Clock, Shield, Stethoscope } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('services.personal_care'),
      description: t('services.personal_care_desc'),
      features: [
        t('services.bathing_hygiene'),
        t('services.dressing_assistance'),
        t('services.mobility_support'),
        t('services.medication_reminders')
      ]
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: t('services.skilled_nursing'),
      description: t('services.skilled_nursing_desc'),
      features: [
        t('services.wound_care'),
        t('services.iv_therapy'),
        t('services.medication_management'),
        t('services.health_monitoring')
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: t('services.companionship'),
      description: t('services.companionship_desc'),
      features: [
        t('services.social_interaction'),
        t('services.emotional_support'),
        t('services.recreation_activities'),
        t('services.transportation')
      ]
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: t('services.respite_care'),
      description: t('services.respite_care_desc'),
      features: [
        t('services.temporary_relief'),
        t('services.flexible_scheduling'),
        t('services.family_support'),
        t('services.peace_of_mind')
      ]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('services.24_7_care'),
      description: t('services.24_7_care_desc'),
      features: [
        t('services.continuous_monitoring'),
        t('services.night_care'),
        t('services.emergency_response'),
        t('services.live_in_care')
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('services.chronic_care'),
      description: t('services.chronic_care_desc'),
      features: [
        t('services.disease_management'),
        t('services.symptom_monitoring'),
        t('services.treatment_support'),
        t('services.care_coordination')
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('services.badge')}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;