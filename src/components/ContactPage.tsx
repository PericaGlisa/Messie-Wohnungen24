import React, { useEffect } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle, Star } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ContactForm from './ContactForm';

const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const region = searchParams.get('region');
  const city = searchParams.get('city');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Kontakt - Messie-Wohnungen24.de';
  }, []);

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Telefonischer Kontakt",
      description: "In vielen Fällen können wir Ihnen ein genaues Angebot auch ohne Vor-Ort-Termin machen.",
      action: "Jetzt anrufen",
      link: "tel:+4917670211430",
      highlight: "Sofortige Beratung"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: "WhatsApp Nachricht",
      description: "Senden Sie uns einfach Ihre Anfrage per WhatsApp und erhalten Sie Ihr Angebot innerhalb weniger Stunden.",
      action: "WhatsApp öffnen",
      link: "https://wa.me/4917670211430",
      highlight: "Antwort in wenigen Stunden"
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-600" />,
      title: "Kontaktformular",
      description: "Beschreiben Sie uns Ihr Anliegen detailliert über unser Formular für ein präzises Angebot.",
      action: "Formular ausfüllen",
      link: "#contact-form",
      highlight: "Detaillierte Anfrage"
    }
  ];

  const advantages = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Schnelle Reaktion",
      description: "Unser Team ist bereit, so schnell wie möglich vor Ort zu sein."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Absolute Diskretion",
      description: "Wir arbeiten diskret und respektvoll in jeder Situation."
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      title: "Zuverlässiges Ergebnis",
      description: "Professionelle Ausführung und garantierte Zufriedenheit."
    }
  ];

  return (
    <div id="kontakt" className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kontaktieren Sie uns
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Unser Team ist bereit, so schnell wie möglich vor Ort zu sein und Ihnen ein schnelles, faires und kostenloses Angebot zu erstellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4917670211430"
                onClick={(e) => {
                  // For desktop users, show the phone number
                  if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
                    e.preventDefault();
                    alert('Telefonnummer: +49 176 70211430\n\nKopieren Sie diese Nummer und rufen Sie uns an!');
                  }
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/4917670211430"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wählen Sie Ihren bevorzugten Kontaktweg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              📞 Rufen Sie uns an – in vielen Fällen können wir Ihnen ein genaues Angebot auch ohne Vor-Ort-Termin machen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {method.highlight}
                  </span>
                </div>
                {method.link.startsWith('#') ? (
                  <button
                    onClick={() => {
                      const element = document.querySelector(method.link);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    {method.action}
                  </button>
                ) : (
                  <a
                    href={method.link}
                    target={method.link.includes('wa.me') ? '_blank' : undefined}
                    rel={method.link.includes('wa.me') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      // For desktop users and tel: links, show the phone number
                      if (method.link.startsWith('tel:') && !navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
                        e.preventDefault();
                        alert('Telefonnummer: +49 176 70211430\n\nKopieren Sie diese Nummer und rufen Sie uns an!');
                      }
                    }}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    {method.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Was uns auszeichnet
            </h2>
            <p className="text-xl text-gray-600">
              Schnelle Reaktion, absolute Diskretion und zuverlässiges Ergebnis – das ist es, was uns auszeichnet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/90 to-green-50/90"></div>
          <img 
            src="/images/17.webp" 
            srcSet="
              /images/optimized/17-320w.webp 320w,
              /images/optimized/17-480w.webp 480w,
              /images/optimized/17-768w.webp 768w,
              /images/optimized/17-1024w.webp 1024w
            "
            sizes="100vw"
            alt="Kontakt Hintergrund" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm region={region} city={city} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            👉 Kontaktieren Sie uns und bringen Sie Ihre Räume zurück ins Leben!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Lassen Sie uns gemeinsam Ordnung in Ihr Leben bringen. Unser erfahrenes Team steht bereit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4917670211430"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +49 176 70211430
            </a>
            <a
              href="https://wa.me/4917670211430"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <p className="text-gray-300">+49 176 70211430</p>
              <p className="text-sm text-gray-400 mt-1">24/7 Erreichbar</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">E-Mail</h3>
              <p className="text-gray-300">info@messie-wohnungen24.de</p>
              <p className="text-sm text-gray-400 mt-1">Antwort innerhalb 24h</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Einsatzgebiet</h3>
              <p className="text-gray-300">Deutschlandweit</p>
              <p className="text-sm text-gray-400 mt-1">Schnell vor Ort</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;