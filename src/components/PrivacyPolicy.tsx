import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={goBack}
            className="flex items-center text-purple-600 hover:text-purple-700 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Terug naar website
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Privacybeleid
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacybeleid
            </h1>
            <p className="text-xl text-gray-600">
              Laatst bijgewerkt: December 2024
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">1. Inleiding</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Rumi Healthcare respecteert uw privacy en is toegewijd aan het beschermen van uw persoonlijke gegevens. 
              Dit privacybeleid legt uit hoe wij uw persoonlijke informatie verzamelen, gebruiken, delen en beschermen 
              wanneer u onze thuiszorgdiensten gebruikt.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">2. Gegevens die wij verzamelen</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Persoonlijke identificatiegegevens:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Naam, adres, telefoonnummer, e-mailadres</li>
                  <li>Geboortedatum en geslacht</li>
                  <li>BSN (Burgerservicenummer)</li>
                  <li>Contactgegevens van noodcontactpersonen</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Medische informatie:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Medische geschiedenis en huidige gezondheidstoestand</li>
                  <li>Medicatie en behandelplannen</li>
                  <li>Zorgbehoeften en voorkeuren</li>
                  <li>Informatie van zorgverleners</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">3. Hoe wij uw gegevens gebruiken</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Het verlenen van gepersonaliseerde thuiszorgdiensten</li>
              <li>Het opstellen en uitvoeren van zorgplannen</li>
              <li>Communicatie over uw zorg en afspraken</li>
              <li>Facturering en administratieve doeleinden</li>
              <li>Kwaliteitsverbetering van onze diensten</li>
              <li>Naleving van wettelijke verplichtingen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Delen van gegevens</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Wij delen uw persoonlijke gegevens alleen in de volgende gevallen:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Met zorgverleners die betrokken zijn bij uw zorg</li>
              <li>Met zorgverzekeraars voor declaratiedoeleinden</li>
              <li>Wanneer wettelijk verplicht (bijvoorbeeld bij meldingsplicht)</li>
              <li>Met uw uitdrukkelijke toestemming</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Beveiliging van gegevens</h2>
            <p className="text-gray-600 leading-relaxed">
              Wij nemen passende technische en organisatorische maatregelen om uw persoonlijke gegevens 
              te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging. 
              Dit omvat encryptie, toegangscontroles en regelmatige beveiligingsaudits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Uw rechten</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Onder de AVG heeft u de volgende rechten:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Recht op inzage in uw persoonlijke gegevens</li>
              <li>Recht op rectificatie van onjuiste gegevens</li>
              <li>Recht op verwijdering van gegevens</li>
              <li>Recht op beperking van verwerking</li>
              <li>Recht op gegevensoverdraagbaarheid</li>
              <li>Recht van bezwaar tegen verwerking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Bewaartermijnen</h2>
            <p className="text-gray-600 leading-relaxed">
              Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk voor de doeleinden 
              waarvoor zij zijn verzameld. Medische gegevens worden bewaard conform de wettelijke 
              bewaartermijnen (minimaal 15 jaar na laatste behandeling).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Voor vragen over dit privacybeleid of het uitoefenen van uw rechten kunt u contact 
              opnemen met onze Functionaris Gegevensbescherming:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700">
                <strong>E-mail:</strong> privacy@rumihealthcare.nl<br />
                <strong>Telefoon:</strong> +31 20 123 4567<br />
                <strong>Adres:</strong> Lau mazirellaan 426, 2525 WV Den Haag
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Wijzigingen</h2>
            <p className="text-gray-600 leading-relaxed">
              Wij kunnen dit privacybeleid van tijd tot tijd wijzigen. Wijzigingen worden 
              gepubliceerd op onze website en, indien nodig, aan u gecommuniceerd.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;