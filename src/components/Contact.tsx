import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: t('contact.phone'),
      details: [t('nav.phone'), "+31 20 123 4568"],
      description: t('contact.emergency_line')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: t('contact.email'),
      details: ["pageinfo@simurghfoundation.nl", "appointments@simurghfoundation.nl"],
      description: t('contact.response_time')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('contact.address'),
      details: ["Simurgh Foundation", "Amsterdam, Netherlands"],
      description: t('contact.serving_area')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('contact.hours'),
      details: [t('contact.office_hours'), t('contact.care_services')],
      description: t('contact.always_here')
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = encodeURIComponent(`Rumi Healthcare - ${formData.subject || 'Contact Form'} from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(`Dear Rumi Healthcare Team,

I am contacting you regarding your home care services.

CONTACT INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject || 'General Inquiry'}

MESSAGE:
${formData.message}

Please contact me at your earliest convenience to discuss how Rumi Healthcare can help with my care needs.

Thank you for your time and I look forward to hearing from you.

Best regards,
${formData.firstName} ${formData.lastName}
${formData.email}
${formData.phone ? formData.phone : ''}`);

    // Open email client
    window.location.href = `mailto:pageinfo@simurghfoundation.nl?subject=${emailSubject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('contact.badge')}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.get_in_touch')}</h3>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-3 rounded-lg flex-shrink-0">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-white">Lau mazirellaan 426</p>
                    <p className="text-white">2525 WV, Den Haag</p>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700">{detail}</p>
                    ))}
                    <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-800 mb-2 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                {t('contact.emergency_contact')}
              </h4>
              <p className="text-red-700 mb-2">
                {t('contact.emergency_desc')}
              </p>
              <p className="text-red-600 text-sm">
                {t('contact.urgent_care')} <br />
                <span className="font-semibold">+31 20 911 CARE</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.send_message')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.first_name')} *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.last_name')} *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('appointment.email_address')} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('appointment.phone_number')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.subject')} *
                </label>
                <select 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">{t('contact.select_subject')}</option>
                  <option value="general">{t('contact.general_inquiry')}</option>
                  <option value="services">{t('contact.services_info')}</option>
                  <option value="appointment">{t('contact.appointment_request')}</option>
                  <option value="billing">{t('contact.billing_question')}</option>
                  <option value="complaint">{t('contact.complaint')}</option>
                  <option value="compliment">{t('contact.compliment')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t('contact.message_placeholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                {t('contact.send_email')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;