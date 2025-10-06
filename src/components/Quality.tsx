import React from 'react';
import { Award, Shield, CheckCircle, Star, FileCheck, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Quality = () => {
  const { t } = useLanguage();

  const qualityStandards = [
    {
      icon: <Award className="h-8 w-8" />,
      title: t('quality.certification'),
      description: 'ISO 9001:2015 certified quality management system ensuring consistent service delivery.',
      features: [
        'ISO 9001:2015 Certification',
        'Dutch Healthcare Authority Licensed',
        'Annual Quality Audits',
        'Continuous Improvement Process'
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('quality.quality_image'),
      description: 'Comprehensive quality monitoring and reporting system for transparent care delivery.',
      features: [
        'Real-time Quality Monitoring',
        'Client Satisfaction Surveys',
        'Performance Indicators',
        'Quality Reports'
      ]
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'Systematic approach to maintaining and improving care quality standards.',
      features: [
        'Quality Control Procedures',
        'Staff Training Programs',
        'Care Plan Reviews',
        'Incident Management'
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Professional Standards',
      description: 'Highly qualified and certified healthcare professionals delivering exceptional care.',
      features: [
        'Licensed Healthcare Professionals',
        'Ongoing Professional Development',
        'Background Checks',
        'Regular Competency Assessments'
      ]
    }
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('quality.badge')}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('quality.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('quality.description')}
          </p>
        </div>

        {/* Quality Standards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {qualityStandards.map((standard, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white p-3 rounded-xl w-fit mb-6">
                {standard.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {standard.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {standard.description}
              </p>
              
              <ul className="space-y-2">
                {standard.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quality Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-emerald-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Quality Performance Metrics</h3>
            <p className="text-purple-100">
              Our commitment to excellence is reflected in our quality performance indicators
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-purple-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">ISO 9001</div>
              <div className="text-purple-100">Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Licensed Staff</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Quality Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;