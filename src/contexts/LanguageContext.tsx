import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'nl';
  setLanguage: (lang: 'en' | 'nl') => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation dictionary
const translations: Record<string, Record<'en' | 'nl', string>> = {
  // Navigation
  'nav.home': { en: 'Home', nl: 'Home' },
  'nav.services': { en: 'Services', nl: 'Diensten' },
  'nav.about': { en: 'About', nl: 'Over Ons' },
  'nav.quality': { en: 'Quality', nl: 'Kwaliteit' },
  'nav.appointment': { en: 'Appointment', nl: 'Afspraak' },
  'nav.contact': { en: 'Contact', nl: 'Contact' },
  'nav.book_now': { en: 'Book Now', nl: 'Boek Nu' },
  'nav.phone': { en: '+31 20 123 4567', nl: '+31 20 123 4567' },

  // Hero Section
  'hero.badge': { en: 'Premium Healthcare Provider', nl: 'Premium Zorgverlener' },
  'hero.title': { en: 'Exceptional Home Care Excellence', nl: 'Uitzonderlijke Thuiszorg Excellentie' },
  'hero.subtitle': { en: 'Premium, personalized healthcare services delivered with compassion in the comfort of your home. Our certified professionals provide 24/7 support with unmatched quality and care.', nl: 'Premium, gepersonaliseerde zorgdiensten geleverd met medeleven in het comfort van uw eigen huis. Onze gecertificeerde professionals bieden 24/7 ondersteuning met ongeëvenaarde kwaliteit en zorg.' },
  'hero.schedule_consultation': { en: 'Schedule Consultation', nl: 'Plan Consultatie' },
  'hero.learn_more': { en: 'Learn More', nl: 'Meer Informatie' },
  'hero.happy_families': { en: 'Happy Families', nl: 'Tevreden Families' },
  'hero.care_available': { en: 'Care Available', nl: 'Zorg Beschikbaar' },
  'hero.years_experience': { en: 'Years Experience', nl: 'Jaar Ervaring' },
  'hero.certified': { en: 'Certified', nl: 'Gecertificeerd' },
  'hero.licensed_professionals': { en: 'Licensed Professionals', nl: 'Erkende Professionals' },
  'hero.support': { en: '24/7 Support', nl: '24/7 Ondersteuning' },
  'hero.always_available': { en: 'Always Available', nl: 'Altijd Beschikbaar' },

  // About Section - Mission & Vision
  'about.mission_vision': { en: 'Mission & Vision', nl: 'Missie & Visie' },
  'about.exclusion_criteria': { en: 'Exclusion Criteria', nl: 'Exclusiecriteria' },
  'about.organization': { en: 'Organization', nl: 'Organisatie' },
  'about.participation': { en: 'Participation', nl: 'Medezeggenschap' },
  'about.governance': { en: 'Governance', nl: 'Governance' },
  'about.privacy': { en: 'Privacy', nl: 'Privacy' },
  'about.complaints': { en: 'Complaints', nl: 'Klachten' },

  // Quality Section
  'quality.badge': { en: 'Quality Assurance', nl: 'Kwaliteitsborging' },
  'quality.title': { en: 'Quality Standards', nl: 'Kwaliteitsnormen' },
  'quality.quality_image': { en: 'Quality Image', nl: 'Kwaliteitsbeeld' },
  'quality.certification': { en: 'Certification', nl: 'Certificering' },
  'quality.description': { en: 'We maintain the highest quality standards in healthcare delivery through continuous monitoring, certification, and improvement processes.', nl: 'Wij handhaven de hoogste kwaliteitsnormen in zorgverlening door continue monitoring, certificering en verbeterprocessen.' },

  // Services Section
  'services.badge': { en: 'Our Services', nl: 'Onze Diensten' },
  'services.title': { en: 'Comprehensive Care Services', nl: 'Uitgebreide Zorgdiensten' },
  'services.subtitle': { en: 'We provide a full range of professional home care services tailored to meet your unique needs and preferences.', nl: 'Wij bieden een volledig scala aan professionele thuiszorgdiensten op maat om aan uw unieke behoeften en voorkeuren te voldoen.' },
  
  'services.personal_care': { en: 'Personal Care', nl: 'Persoonlijke Verzorging' },
  'services.personal_care_desc': { en: 'Assistance with daily activities including bathing, dressing, grooming, and mobility support.', nl: 'Hulp bij dagelijkse activiteiten zoals baden, aankleden, verzorging en mobiliteitsondersteuning.' },
  'services.bathing_hygiene': { en: 'Bathing & Hygiene', nl: 'Baden & Hygiëne' },
  'services.dressing_assistance': { en: 'Dressing Assistance', nl: 'Aankleedhulp' },
  'services.mobility_support': { en: 'Mobility Support', nl: 'Mobiliteitsondersteuning' },
  'services.medication_reminders': { en: 'Medication Reminders', nl: 'Medicatie Herinneringen' },

  'services.skilled_nursing': { en: 'Skilled Nursing', nl: 'Verpleegkundige Zorg' },
  'services.skilled_nursing_desc': { en: 'Professional nursing care including wound care, medication management, and health monitoring.', nl: 'Professionele verpleegkundige zorg inclusief wondverzorging, medicatiebeheer en gezondheidsmonitoring.' },
  'services.wound_care': { en: 'Wound Care', nl: 'Wondverzorging' },
  'services.iv_therapy': { en: 'IV Therapy', nl: 'Infuustherapie' },
  'services.medication_management': { en: 'Medication Management', nl: 'Medicatiebeheer' },
  'services.health_monitoring': { en: 'Health Monitoring', nl: 'Gezondheidsmonitoring' },

  'services.companionship': { en: 'Companionship', nl: 'Gezelschap' },
  'services.companionship_desc': { en: 'Social interaction and emotional support to combat loneliness and improve quality of life.', nl: 'Sociale interactie en emotionele ondersteuning om eenzaamheid te bestrijden en de levenskwaliteit te verbeteren.' },
  'services.social_interaction': { en: 'Social Interaction', nl: 'Sociale Interactie' },
  'services.emotional_support': { en: 'Emotional Support', nl: 'Emotionele Ondersteuning' },
  'services.recreation_activities': { en: 'Recreation Activities', nl: 'Recreatieve Activiteiten' },
  'services.transportation': { en: 'Transportation', nl: 'Vervoer' },

  'services.respite_care': { en: 'Respite Care', nl: 'Respijtzorg' },
  'services.respite_care_desc': { en: 'Temporary care services to give family caregivers a break while ensuring continuous care.', nl: 'Tijdelijke zorgdiensten om familieverzorgers een pauze te geven terwijl continue zorg wordt gegarandeerd.' },
  'services.temporary_relief': { en: 'Temporary Relief', nl: 'Tijdelijke Verlichting' },
  'services.flexible_scheduling': { en: 'Flexible Scheduling', nl: 'Flexibele Planning' },
  'services.family_support': { en: 'Family Support', nl: 'Familieondersteuning' },
  'services.peace_of_mind': { en: 'Peace of Mind', nl: 'Gemoedsrust' },

  'services.24_7_care': { en: '24/7 Care', nl: '24/7 Zorg' },
  'services.24_7_care_desc': { en: 'Round-the-clock care services for clients requiring continuous monitoring and assistance.', nl: 'Rondeklokzorg voor cliënten die continue monitoring en hulp nodig hebben.' },
  'services.continuous_monitoring': { en: 'Continuous Monitoring', nl: 'Continue Monitoring' },
  'services.night_care': { en: 'Night Care', nl: 'Nachtzorg' },
  'services.emergency_response': { en: 'Emergency Response', nl: 'Noodrespons' },
  'services.live_in_care': { en: 'Live-in Care', nl: 'Inwonende Zorg' },

  'services.chronic_care': { en: 'Chronic Care', nl: 'Chronische Zorg' },
  'services.chronic_care_desc': { en: 'Specialized care for clients with chronic conditions requiring ongoing medical attention.', nl: 'Gespecialiseerde zorg voor cliënten met chronische aandoeningen die voortdurende medische aandacht vereisen.' },
  'services.disease_management': { en: 'Disease Management', nl: 'Ziektebeheer' },
  'services.symptom_monitoring': { en: 'Symptom Monitoring', nl: 'Symptoommonitoring' },
  'services.treatment_support': { en: 'Treatment Support', nl: 'Behandelingsondersteuning' },
  'services.care_coordination': { en: 'Care Coordination', nl: 'Zorgcoördinatie' },

  'services.custom_care_title': { en: 'Need a Custom Care Plan?', nl: 'Heeft u een Aangepast Zorgplan Nodig?' },
  'services.custom_care_desc': { en: 'Every individual has unique needs. Our care coordinators will work with you to create a personalized care plan that fits your lifestyle and budget.', nl: 'Elk individu heeft unieke behoeften. Onze zorgcoördinatoren werken met u samen om een gepersonaliseerd zorgplan te creëren dat past bij uw levensstijl en budget.' },

  // About Section
  'about.badge': { en: 'About Rumi Healthcare', nl: 'Over Rumi Healthcare' },
  'about.title': { en: 'Dedicated to Your Well-being', nl: 'Toegewijd aan Uw Welzijn' },
  'about.description1': { en: 'For over 20 years, Rumi Healthcare has been a trusted partner in providing exceptional home healthcare services. Our team of licensed professionals is committed to enhancing the quality of life for our clients while allowing them to maintain their independence and dignity in the comfort of their own homes.', nl: 'Al meer dan 20 jaar is Rumi Healthcare een vertrouwde partner in het leveren van uitzonderlijke thuiszorgdiensten. Ons team van erkende professionals is toegewijd aan het verbeteren van de levenskwaliteit van onze cliënten terwijl zij hun onafhankelijkheid en waardigheid kunnen behouden in het comfort van hun eigen huis.' },
  'about.description2': { en: 'We understand that choosing home care is a significant decision. That\'s why we focus on building meaningful relationships based on trust, respect, and personalized care plans tailored to each individual\'s unique needs.', nl: 'Wij begrijpen dat het kiezen van thuiszorg een belangrijke beslissing is. Daarom richten wij ons op het opbouwen van betekenisvolle relaties gebaseerd op vertrouwen, respect en gepersonaliseerde zorgplannen afgestemd op de unieke behoeften van elk individu.' },

  'about.compassion': { en: 'Compassion', nl: 'Medeleven' },
  'about.compassion_desc': { en: 'We treat every client with dignity, respect, and genuine care.', nl: 'Wij behandelen elke cliënt met waardigheid, respect en oprechte zorg.' },
  'about.trust': { en: 'Trust', nl: 'Vertrouwen' },
  'about.trust_desc': { en: 'Building lasting relationships through reliability and transparency.', nl: 'Duurzame relaties opbouwen door betrouwbaarheid en transparantie.' },
  'about.excellence': { en: 'Excellence', nl: 'Excellentie' },
  'about.excellence_desc': { en: 'Maintaining the highest standards of professional healthcare.', nl: 'Het handhaven van de hoogste normen van professionele gezondheidszorg.' },
  'about.family': { en: 'Family', nl: 'Familie' },
  'about.family_desc': { en: 'Treating your family as our own with personalized attention.', nl: 'Uw familie behandelen als onze eigen familie met persoonlijke aandacht.' },

  'about.mission_title': { en: 'Our Mission', nl: 'Onze Missie' },
  'about.mission_text': { en: '"To provide exceptional, compassionate home healthcare services that enhance the quality of life for our clients and their families. We are committed to delivering personalized care with dignity, respect, and the highest professional standards, enabling our clients to live comfortably and independently in their own homes."', nl: '"Het leveren van uitzonderlijke, medelevende thuiszorgdiensten die de levenskwaliteit van onze cliënten en hun families verbeteren. Wij zijn toegewijd aan het leveren van gepersonaliseerde zorg met waardigheid, respect en de hoogste professionele normen, waardoor onze cliënten comfortabel en onafhankelijk in hun eigen huis kunnen leven."' },

  // Appointment Section
  'appointment.badge': { en: 'Book Appointment', nl: 'Boek Afspraak' },
  'appointment.title': { en: 'Schedule Your Consultation', nl: 'Plan Uw Consultatie' },
  'appointment.subtitle': { en: 'Take the first step towards quality home care. Schedule a free consultation to discuss your needs and learn how we can help.', nl: 'Zet de eerste stap naar kwaliteitsvolle thuiszorg. Plan een gratis consultatie om uw behoeften te bespreken en te leren hoe wij kunnen helpen.' },

  'appointment.full_name': { en: 'Full Name', nl: 'Volledige Naam' },
  'appointment.phone_number': { en: 'Phone Number', nl: 'Telefoonnummer' },
  'appointment.email_address': { en: 'Email Address', nl: 'E-mailadres' },
  'appointment.service_needed': { en: 'Service Needed', nl: 'Benodigde Dienst' },
  'appointment.select_service': { en: 'Select a service', nl: 'Selecteer een dienst' },
  'appointment.preferred_date': { en: 'Preferred Date', nl: 'Gewenste Datum' },
  'appointment.preferred_time': { en: 'Preferred Time', nl: 'Gewenste Tijd' },
  'appointment.select_time': { en: 'Select time', nl: 'Selecteer tijd' },
  'appointment.additional_info': { en: 'Additional Information', nl: 'Aanvullende Informatie' },
  'appointment.additional_info_placeholder': { en: 'Please tell us about your specific care needs or any questions you have...', nl: 'Vertel ons over uw specifieke zorgbehoeften of vragen die u heeft...' },
  'appointment.send_email': { en: 'Send Email Request', nl: 'Verstuur E-mail Verzoek' },

  'appointment.success_title': { en: 'Appointment Request Received!', nl: 'Afspraakverzoek Ontvangen!' },
  'appointment.success_message': { en: 'Thank you for your interest in our services. Our care coordinator will contact you within 24 hours to confirm your appointment and discuss your specific needs.', nl: 'Dank u voor uw interesse in onze diensten. Onze zorgcoördinator zal u binnen 24 uur contacteren om uw afspraak te bevestigen en uw specifieke behoeften te bespreken.' },
  'appointment.what_happens_next': { en: 'What happens next?', nl: 'Wat gebeurt er nu?' },
  'appointment.step1': { en: 'We\'ll call you to confirm your appointment', nl: 'Wij bellen u om uw afspraak te bevestigen' },
  'appointment.step2': { en: 'Discuss your specific care needs', nl: 'Uw specifieke zorgbehoeften bespreken' },
  'appointment.step3': { en: 'Create a personalized care plan', nl: 'Een gepersonaliseerd zorgplan opstellen' },
  'appointment.step4': { en: 'Schedule your first care visit', nl: 'Uw eerste zorgbezoek inplannen' },
  'appointment.schedule_another': { en: 'Schedule Another Appointment', nl: 'Plan Nog Een Afspraak' },

  'appointment.why_choose_title': { en: 'Why Choose Our Consultation?', nl: 'Waarom Kiezen voor Onze Consultatie?' },
  'appointment.free_assessment': { en: 'Free Assessment', nl: 'Gratis Beoordeling' },
  'appointment.free_assessment_desc': { en: 'Comprehensive evaluation of your care needs at no cost.', nl: 'Uitgebreide evaluatie van uw zorgbehoeften zonder kosten.' },
  'appointment.personalized_plan': { en: 'Personalized Plan', nl: 'Gepersonaliseerd Plan' },
  'appointment.personalized_plan_desc': { en: 'Custom care plan tailored to your specific requirements.', nl: 'Aangepast zorgplan op maat van uw specifieke vereisten.' },
  'appointment.meet_caregiver': { en: 'Meet Your Caregiver', nl: 'Ontmoet Uw Zorgverlener' },
  'appointment.meet_caregiver_desc': { en: 'Introduction to your dedicated care professional.', nl: 'Kennismaking met uw toegewijde zorgprofessional.' },
  'appointment.flexible_scheduling_title': { en: 'Flexible Scheduling', nl: 'Flexibele Planning' },
  'appointment.flexible_scheduling_desc': { en: 'Care schedules that work around your lifestyle.', nl: 'Zorgschema\'s die aansluiten bij uw levensstijl.' },

  'appointment.immediate_assistance': { en: 'Need Immediate Assistance?', nl: 'Heeft u Directe Hulp Nodig?' },
  'appointment.immediate_assistance_desc': { en: 'For urgent care needs or questions, call us directly. Our care coordinators are available 24/7.', nl: 'Voor urgente zorgbehoeften of vragen, bel ons direct. Onze zorgcoördinatoren zijn 24/7 beschikbaar.' },
  'appointment.response_time': { en: 'Average response time: Under 2 hours', nl: 'Gemiddelde responstijd: Onder 2 uur' },

  // Testimonials Section
  'testimonials.badge': { en: 'Client Stories', nl: 'Cliëntverhalen' },
  'testimonials.title': { en: 'What Our Families Say', nl: 'Wat Onze Families Zeggen' },
  'testimonials.subtitle': { en: 'Don\'t just take our word for it. Here\'s what our clients and their families have to say about our care services.', nl: 'Geloof ons niet zomaar op ons woord. Hier is wat onze cliënten en hun families zeggen over onze zorgdiensten.' },

  'testimonials.client_satisfaction': { en: 'Client Satisfaction', nl: 'Cliënttevredenheid' },
  'testimonials.ready_title': { en: 'Ready to Experience Quality Care?', nl: 'Klaar om Kwaliteitszorg te Ervaren?' },
  'testimonials.ready_desc': { en: 'Join hundreds of families who trust VitalCare Plus for their home healthcare needs. Schedule your free consultation today.', nl: 'Sluit u aan bij honderden families die VitalCare Plus vertrouwen voor hun thuiszorgbehoeften. Plan vandaag nog uw gratis consultatie.' },
  'testimonials.get_started': { en: 'Get Started Today', nl: 'Begin Vandaag' },

  // Contact Section
  'contact.badge': { en: 'Get In Touch', nl: 'Neem Contact Op' },
  'contact.title': { en: 'Contact Us Today', nl: 'Neem Vandaag Contact Op' },
  'contact.subtitle': { en: 'Have questions about our services? Need immediate assistance? We\'re here to help. Reach out to us anytime.', nl: 'Heeft u vragen over onze diensten? Heeft u directe hulp nodig? Wij zijn er om te helpen. Neem altijd contact met ons op.' },

  'contact.get_in_touch': { en: 'Get in Touch', nl: 'Neem Contact Op' },
  'contact.phone': { en: 'Phone', nl: 'Telefoon' },
  'contact.email': { en: 'Email', nl: 'E-mail' },
  'contact.address': { en: 'Address', nl: 'Adres' },
  'contact.hours': { en: 'Hours', nl: 'Openingstijden' },
  'contact.emergency_line': { en: '24/7 Care Line Available', nl: '24/7 Zorglijn Beschikbaar' },
  'contact.response_time': { en: 'We respond within 2 hours', nl: 'Wij reageren binnen 2 uur' },
  'contact.serving_area': { en: 'Serving Netherlands nationwide', nl: 'Dienstverlening in heel Nederland' },
  'contact.office_hours': { en: 'Office: Mon-Fri 8AM-6PM', nl: 'Kantoor: Ma-Vr 8:00-18:00' },
  'contact.care_services': { en: 'Care Services: 24/7', nl: 'Zorgdiensten: 24/7' },
  'contact.always_here': { en: 'Always here when you need us', nl: 'Altijd hier wanneer u ons nodig heeft' },

  'contact.emergency_contact': { en: 'Emergency Contact', nl: 'Noodcontact' },
  'contact.emergency_desc': { en: 'For immediate medical emergencies, call 112.', nl: 'Voor directe medische noodgevallen, bel 112.' },
  'contact.urgent_care': { en: 'For urgent care needs after hours, call our 24/7 line:', nl: 'Voor urgente zorgbehoeften buiten kantooruren, bel onze 24/7 lijn:' },

  'contact.send_message': { en: 'Send Us a Message', nl: 'Stuur Ons een Bericht' },
  'contact.first_name': { en: 'First Name', nl: 'Voornaam' },
  'contact.last_name': { en: 'Last Name', nl: 'Achternaam' },
  'contact.subject': { en: 'Subject', nl: 'Onderwerp' },
  'contact.select_subject': { en: 'Select a subject', nl: 'Selecteer een onderwerp' },
  'contact.general_inquiry': { en: 'General Inquiry', nl: 'Algemene Vraag' },
  'contact.services_info': { en: 'Services Information', nl: 'Diensteninformatie' },
  'contact.appointment_request': { en: 'Appointment Request', nl: 'Afspraakverzoek' },
  'contact.billing_question': { en: 'Billing Question', nl: 'Factureringsvraag' },
  'contact.complaint': { en: 'Complaint or Concern', nl: 'Klacht of Zorg' },
  'contact.compliment': { en: 'Compliment', nl: 'Compliment' },
  'contact.message': { en: 'Message', nl: 'Bericht' },
  'contact.message_placeholder': { en: 'Please tell us how we can help you...', nl: 'Vertel ons hoe wij u kunnen helpen...' },
  'contact.send_email': { en: 'Send Email', nl: 'Verstuur E-mail' },

  // Footer
  'footer.description': { en: 'Rumi Healthcare provides compassionate, professional home healthcare services. Your trusted partner in maintaining independence and dignity at home.', nl: 'Rumi Healthcare biedt medelevende, professionele thuiszorgdiensten. Uw vertrouwde partner in het behouden van onafhankelijkheid en waardigheid thuis.' },
  'footer.quick_links': { en: 'Quick Links', nl: 'Snelle Links' },
  'footer.our_services': { en: 'Our Services', nl: 'Onze Diensten' },
  'footer.legal_info': { en: 'Legal Information', nl: 'Juridische Informatie' },
  'footer.contact_info': { en: 'Contact Info', nl: 'Contactinformatie' },
  'footer.emergency_line': { en: '24/7 Care Line', nl: '24/7 Zorglijn' },
  'footer.response_time': { en: 'We respond within 2 hours', nl: 'Wij reageren binnen 2 uur' },
  'footer.serving_metro': { en: 'Serving Netherlands', nl: 'Dienstverlening in Nederland' },
  'footer.copyright': { en: '© 2024 Rumi Healthcare. All rights reserved. Licensed healthcare provider.', nl: '© 2024 Rumi Healthcare. Alle rechten voorbehouden. Erkende zorgverlener.' },
  'footer.privacy_policy': { en: 'Privacy Policy', nl: 'Privacybeleid' },
  'footer.terms_service': { en: 'Terms of Service', nl: 'Servicevoorwaarden' },
  'footer.license_info': { en: 'Licensed Home Care Agency | Dutch Healthcare Authority | KvK: 12345678', nl: 'Erkend Thuiszorgbureau | Nederlandse Zorgautoriteit | KvK: 12345678' },
  'footer.accreditation': { en: 'ISO 9001 Certified | Equal Opportunity Employer', nl: 'ISO 9001 Gecertificeerd | Gelijke Kansen Werkgever' }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'nl'>('en');

  const t = (key: string, fallback?: string): string => {
    const translation = translations[key];
    if (translation && translation[language]) {
      return translation[language];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};