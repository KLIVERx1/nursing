import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Appointment = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    t('services.personal_care'),
    t('services.skilled_nursing'),
    t('services.companionship'),
    t('services.respite_care'),
    t('services.24_7_care'),
    t('services.chronic_care'),
    "Consultation"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(`Rumi Healthcare - Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(`Dear Rumi Healthcare Team,

I would like to schedule a consultation for your home care services.

PERSONAL INFORMATION:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

SERVICE DETAILS:
Service Needed: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

ADDITIONAL INFORMATION:
${formData.message || 'No additional information provided.'}

Please contact me to confirm this appointment and discuss my specific care needs.

Thank you for your time and I look forward to hearing from you soon.

Best regards,
${formData.name}
${formData.phone}
${formData.email}`);

    // Open email client
    window.location.href = `mailto:pageinfo@simurghfoundation.nl?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-purple-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('appointment.badge')}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('appointment.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('appointment.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    {t('appointment.full_name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    {t('appointment.phone_number')} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  {t('appointment.email_address')} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('appointment.service_needed')} *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">{t('appointment.select_service')}</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    {t('appointment.preferred_date')} *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    {t('appointment.preferred_time')} *
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">{t('appointment.select_time')}</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="inline h-4 w-4 mr-1" />
                  {t('appointment.additional_info')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t('appointment.additional_info_placeholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('appointment.send_email')}
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('appointment.why_choose_title')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('appointment.free_assessment')}</h4>
                    <p className="text-gray-600">{t('appointment.free_assessment_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('appointment.personalized_plan')}</h4>
                    <p className="text-gray-600">{t('appointment.personalized_plan_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('appointment.meet_caregiver')}</h4>
                    <p className="text-gray-600">{t('appointment.meet_caregiver_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('appointment.flexible_scheduling_title')}</h4>
                    <p className="text-gray-600">{t('appointment.flexible_scheduling_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-emerald-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">{t('appointment.immediate_assistance')}</h3>
              <p className="mb-6 text-purple-100">
                {t('appointment.immediate_assistance_desc')}
              </p>
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="h-5 w-5" />
                <span className="text-lg font-semibold">{t('nav.phone')}</span>
              </div>
              <p className="text-sm text-purple-100">
                {t('appointment.response_time')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;