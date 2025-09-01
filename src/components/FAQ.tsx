import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Clock, Euro, Phone, Users, Award, CheckCircle, ThumbsUp, ThumbsDown, ExternalLink, Star } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [helpfulVotes, setHelpfulVotes] = useState<{[key: number]: {helpful: number, notHelpful: number}}>({});

  const faqs = [
    {
      question: 'Wie diskret arbeiten Sie wirklich?',
      answer: 'Absolute Diskretion ist unser oberstes Gebot. Unsere Mitarbeiter sind speziell geschult, tragen neutrale Arbeitskleidung ohne Firmenlogo und verwenden unauffällige Fahrzeuge. Wir sprechen niemals mit Nachbarn oder Dritten über Ihren Auftrag und behandeln alle Informationen streng vertraulich.',
      category: 'services',
      icon: Shield,
      testimonial: '"Das Team war so diskret, dass nicht einmal meine Nachbarn etwas bemerkt haben." - Maria K.',
      relatedQuestions: [1, 7],
      hasContactButton: true,
      contactText: 'Diskrete Beratung anfragen'
    },
    {
      question: 'Wie schnell können Sie reagieren?',
      answer: 'Wir verstehen, dass Sie schnelle Hilfe benötigen. Innerhalb von 24 Stunden nach Ihrer Anfrage melden wir uns bei Ihnen zurück. In dringenden Fällen sind wir oft schon am selben oder nächsten Tag für eine Besichtigung vor Ort.',
      category: 'process',
      icon: Clock,
      testimonial: '"Anruf am Montag, Besichtigung am Dienstag - so schnell hatte ich nicht erwartet!" - Thomas H.',
      relatedQuestions: [2, 9],
      hasContactButton: true,
      contactText: 'Jetzt Notfall-Termin anfragen'
    },
    {
      question: 'Wie lange dauern die Arbeiten?',
      answer: 'Die Dauer hängt vom Umfang der Arbeiten ab. Eine normale Wohnung (60-80m²) benötigt meist 1-3 Tage. Größere Objekte oder komplexere Fälle können länger dauern. Nach der Besichtigung geben wir Ihnen einen genauen Zeitplan.',
      category: 'process',
      icon: Clock,
      testimonial: '"Meine 70m² Wohnung war in 2 Tagen komplett entrümpelt und gereinigt." - Sandra M.',
      relatedQuestions: [1, 4],
      hasContactButton: true,
      contactText: 'Zeitplan besprechen'
    },
    {
      question: 'Was kostet eine Entrümpelung?',
      answer: 'Die Kosten variieren je nach Wohnungsgröße, Füllgrad und gewünschten Zusatzleistungen. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot ohne versteckte Kosten. Ratenzahlung ist möglich.',
      category: 'pricing',
      icon: Euro,
      testimonial: '"Faire Preise und keine versteckten Kosten - genau wie versprochen." - Robert L.',
      relatedQuestions: [8, 4],
      hasContactButton: true,
      contactText: 'Kostenloses Angebot anfordern'
    },
    {
      question: 'Was ist alles in Ihren Leistungen enthalten?',
      answer: 'Unser Service umfasst: Vollständige Entrümpelung und Abtransport von Sperrmüll, Tiefen- und Spezialreinigung aller Oberflächen, Desinfektion der Räume für absolute Hygiene, Geruchsneutralisation, Entfernung alter Böden oder gründliche Reinigung der bestehenden sowie Malerarbeiten.',
      category: 'services',
      icon: CheckCircle,
      testimonial: '"Alles aus einer Hand - von der Entrümpelung bis zur Endreinigung." - Julia B.',
      relatedQuestions: [5, 10],
      hasContactButton: true,
      contactText: 'Vollservice anfragen'
    },
    {
      question: 'Was passiert mit persönlichen Gegenständen?',
      answer: 'Wir gehen sehr behutsam mit persönlichen Gegenständen um. Vor Beginn der Arbeiten besprechen wir mit Ihnen, welche Gegenstände aufbewahrt werden sollen. Wertgegenstände und wichtige Dokumente werden separat gesammelt und Ihnen übergeben.',
      category: 'services',
      icon: Shield,
      testimonial: '"Alle wichtigen Dokumente wurden sorgfältig aussortiert und mir übergeben." - Michael K.',
      relatedQuestions: [0, 4],
      hasContactButton: true,
      contactText: 'Beratung zu persönlichen Gegenständen'
    },
    {
      question: 'In welchen Gebieten arbeiten Sie?',
      answer: 'Wir sind deutschlandweit tätig. Unsere Haupteinsatzgebiete sind Nordrhein-Westfalen, Hessen, Rheinland-Pfalz und angrenzende Bundesländer. Für andere Regionen fragen Sie gerne nach - wir finden eine Lösung.',
      category: 'contact',
      icon: Users,
      testimonial: '"Auch in meiner kleinen Stadt waren sie schnell vor Ort." - Christine L.',
      relatedQuestions: [9, 1],
      hasContactButton: true,
      contactText: 'Verfügbarkeit in Ihrer Region prüfen'
    },
    {
      question: 'Übernehmen Sie auch extreme Fälle?',
      answer: 'Ja, wir haben Erfahrung mit allen Arten von Messie-Situationen, auch in extremen Fällen. Unser Team ist speziell ausgebildet und ausgerüstet. Kein Fall ist für uns zu schwierig - wir finden immer eine Lösung.',
      category: 'services',
      icon: Award,
      testimonial: '"Selbst mein extremer Fall war für das Team kein Problem." - Anonymous',
      relatedQuestions: [0, 4],
      hasContactButton: true,
      contactText: 'Beratung für schwierige Fälle'
    },
    {
      question: 'Übernimmt die Krankenkasse die Kosten?',
      answer: 'In manchen Fällen können Kosten über die Krankenkasse, Pflegeversicherung oder das Sozialamt abgerechnet werden. Wir beraten Sie gerne zu den Möglichkeiten und unterstützen Sie bei der Antragstellung.',
      category: 'pricing',
      icon: Euro,
      testimonial: '"Die Unterstützung bei der Kostenübernahme war sehr hilfreich." - Familie Schmidt',
      relatedQuestions: [3, 9],
      hasContactButton: true,
      contactText: 'Kostenübernahme prüfen lassen'
    },
    {
      question: 'Wie kann ich Sie kontaktieren?',
      answer: 'Sie erreichen uns telefonisch unter +49 176 70211430, per WhatsApp, E-Mail oder über unser Kontaktformular. Alle Kontaktaufnahmen werden diskret behandelt. Auch anonyme Anfragen sind möglich.',
      category: 'contact',
      icon: Phone,
      testimonial: '"Sehr freundliche und verständnisvolle Beratung am Telefon." - Andrea W.',
      relatedQuestions: [0, 1],
      hasContactButton: true,
      contactText: 'Jetzt kontaktieren'
    },
    {
      question: 'Sind Sie versichert und zertifiziert?',
      answer: 'Ja, wir verfügen über eine umfassende Betriebshaftpflichtversicherung und sind nach ISO 9001 zertifiziert. Unsere Mitarbeiter sind geschult und haben Erfahrung im Umgang mit sensiblen Situationen.',
      category: 'services',
      icon: Award,
      testimonial: '"Das Gefühl der Sicherheit durch die Versicherung war sehr beruhigend." - Klaus M.',
      relatedQuestions: [0, 7],
      hasContactButton: true,
      contactText: 'Versicherungsdetails erfragen'
    },
    {
      question: 'Wie umweltfreundlich entsorgen Sie?',
      answer: 'Nachhaltigkeit ist uns wichtig. Wir sortieren alle Materialien fachgerecht, recyceln was möglich ist und arbeiten nur mit zertifizierten Entsorgungsunternehmen zusammen. Brauchbare Gegenstände spenden wir an soziale Einrichtungen.',
      category: 'services',
      icon: CheckCircle,
      testimonial: '"Toll zu wissen, dass meine alten Möbel gespendet wurden." - Petra H.',
      relatedQuestions: [4, 5],
      hasContactButton: true,
      contactText: 'Umweltfreundliche Entsorgung besprechen'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleVote = (index: number, isHelpful: boolean) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [index]: {
        helpful: (prev[index]?.helpful || 0) + (isHelpful ? 1 : 0),
        notHelpful: (prev[index]?.notHelpful || 0) + (!isHelpful ? 1 : 0)
      }
    }));
  };

  const handleContactClick = (contactText: string) => {
    // Scroll to contact section or open contact modal
    let contactSection = document.getElementById('kontakt');
    if (!contactSection) {
      contactSection = document.getElementById('contact-form');
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Häufige Fragen
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const votes = helpfulVotes[index] || { helpful: 0, notHelpful: 0 };
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      
                      {/* Customer Testimonial */}
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                              <Star className="w-4 h-4 text-blue-600 fill-current" />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-blue-800 italic">{faq.testimonial}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Contact Button */}
                      {faq.hasContactButton && (
                        <div className="mb-4">
                          <button
                            onClick={() => handleContactClick(faq.contactText!)}
                            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{faq.contactText}</span>
                          </button>
                        </div>
                      )}
                      
                      {/* Related Questions */}
                      {faq.relatedQuestions.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Ähnliche Fragen:</h4>
                          <div className="flex flex-wrap gap-2">
                            {faq.relatedQuestions.map((relatedIndex) => (
                              <button
                                key={relatedIndex}
                                onClick={() => setOpenIndex(relatedIndex)}
                                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                              >
                                {faqs[relatedIndex]?.question.substring(0, 30)}...
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Voting System */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">War diese Antwort hilfreich?</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleVote(index, true)}
                              className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors duration-200"
                            >
                              <ThumbsUp className="w-4 h-4" />
                              <span className="text-sm">{votes.helpful}</span>
                            </button>
                            <button
                              onClick={() => handleVote(index, false)}
                              className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors duration-200"
                            >
                              <ThumbsDown className="w-4 h-4" />
                              <span className="text-sm">{votes.notHelpful}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        

      </div>
    </section>
  );
};

export default FAQ;