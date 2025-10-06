import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfService = () => {
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
              <Scale className="h-4 w-4 mr-2" />
              Algemene Voorwaarden
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Algemene Voorwaarden
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
              <FileText className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">1. Algemene Bepalingen</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Rumi Healthcare 
              en de cliënt betreffende de verlening van thuiszorgdiensten. Door gebruik te maken van onze 
              diensten gaat u akkoord met deze voorwaarden.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">2. Dienstverlening</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Zorgverlening</h3>
                <p className="text-gray-600">
                  Rumi Healthcare verleent thuiszorgdiensten conform het overeengekomen zorgplan. 
                  Wij streven naar de hoogste kwaliteit van zorg en handelen volgens professionele standaarden.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Zorgplan</h3>
                <p className="text-gray-600">
                  Voor elke cliënt wordt een individueel zorgplan opgesteld in overleg met de cliënt, 
                  familie en behandelend arts. Dit plan wordt regelmatig geëvalueerd en aangepast.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">3. Rechten en Plichten</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">3.1 Rechten van de cliënt</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Recht op kwalitatief goede zorg</li>
                  <li>Recht op respect voor privacy en waardigheid</li>
                  <li>Recht op informatie over de zorgverlening</li>
                  <li>Recht op inspraak in het zorgplan</li>
                  <li>Recht op klachtenprocedure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">3.2 Plichten van de cliënt</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Tijdige betaling van facturen</li>
                  <li>Verstrekking van juiste en volledige informatie</li>
                  <li>Respectvolle behandeling van zorgverleners</li>
                  <li>Tijdige melding van wijzigingen in zorgbehoefte</li>
                  <li>Naleving van afspraken</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tarieven en Betaling</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Onze tarieven zijn gebaseerd op de NZa-tarieven en worden jaarlijks aangepast. 
                Facturen worden maandelijks verzonden en dienen binnen 30 dagen te worden betaald.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Let op:</strong> Bij niet-tijdige betaling kunnen administratiekosten in rekening worden gebracht.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Annulering en Opzegging</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">5.1 Annulering afspraken</h3>
                <p className="text-gray-600">
                  Afspraken kunnen tot 24 uur van tevoren kosteloos worden geannuleerd. 
                  Bij latere annulering kunnen kosten in rekening worden gebracht.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">5.2 Opzegging overeenkomst</h3>
                <p className="text-gray-600">
                  De zorgovereenkomst kan door beide partijen worden opgezegd met inachtneming 
                  van een opzegtermijn van één maand.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">6. Aansprakelijkheid</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Rumi Healthcare is verzekerd voor beroepsaansprakelijkheid. Onze aansprakelijkheid 
              is beperkt tot het bedrag dat door onze verzekeraar wordt uitgekeerd. Wij zijn niet 
              aansprakelijk voor schade door overmacht of door handelen buiten onze instructies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy en Gegevensbescherming</h2>
            <p className="text-gray-600 leading-relaxed">
              Wij gaan zorgvuldig om met uw persoonlijke gegevens conform ons privacybeleid en 
              de AVG. Medische gegevens worden alleen gedeeld met betrokken zorgverleners en 
              met uw toestemming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Klachten</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Heeft u een klacht over onze dienstverlening? Wij nemen klachten serieus en 
              streven naar een snelle en adequate oplossing.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Klachtencontact:</strong><br />
                E-mail: klachten@rumihealthcare.nl<br />
                Telefoon: +31 20 123 4567<br />
                Schriftelijk: Lau mazirellaan 426, 2525 WV Den Haag
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Toepasselijk Recht</h2>
            <p className="text-gray-600 leading-relaxed">
              Op deze overeenkomst is Nederlands recht van toepassing. Geschillen worden 
              voorgelegd aan de bevoegde rechter in Nederland.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Slotbepalingen</h2>
            <p className="text-gray-600 leading-relaxed">
              Deze algemene voorwaarden kunnen worden gewijzigd. Wijzigingen worden tijdig 
              aan cliënten gecommuniceerd. Bij strijdigheid tussen deze voorwaarden en 
              individuele afspraken prevaleren de individuele afspraken.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;