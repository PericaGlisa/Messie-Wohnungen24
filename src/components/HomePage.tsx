import React, { Suspense, useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import StatisticsSection from './StatisticsSection';
import VirtualizedSuccessStories from './VirtualizedSuccessStories';
import RegionsSection from './RegionsSection';
import ContactForm from './ContactForm';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Messie-Wohnungen24.de - Professionelle Entrümpelung & Reinigung';
  }, []);

  // Sample data for StatisticsSection
  const stats = [
    { number: '500+', label: 'Erfolgreiche Projekte' },
    { number: '98%', label: 'Kundenzufriedenheit' }
  ];

  // Sample data for VirtualizedSuccessStories
  const successStories = [
    {
      quote: "Ich dachte, meine Situation wäre unlösbar. Das Team hat mir nicht nur praktisch geholfen, sondern auch Mut gemacht. Endlich kann ich wieder durchatmen.",
      author: "Thomas M.",
      location: "Frankfurt",
      rating: 5,
      project: "Wohnungsentrümpelung",
      date: "März 2024",
      verified: true,
      duration: "3 Tage",
      beforeImage: "/images/3.webp",
    afterImage: "/images/4.webp",
      helpfulVotes: 23
    },
    {
      quote: "Die Diskretion war perfekt. Niemand hat etwas mitbekommen. Das Team war so verständnisvoll und professionell. Ich bin unendlich dankbar.",
      author: "Sandra K.",
      location: "München",
      rating: 5,
      project: "Nachlassentrümpelung",
      date: "Februar 2024",
      verified: true,
      duration: "2 Tage",
      beforeImage: "/images/5.webp",
    afterImage: "/images/6.webp",
      helpfulVotes: 18
    },
    {
      quote: "Nach Jahren der Scham habe ich endlich den Mut gefasst. Die Mitarbeiter haben mich nie verurteilt. Mein Zuhause ist jetzt wieder ein Ort der Ruhe.",
      author: "Michael R.",
      location: "Stuttgart",
      rating: 5,
      project: "Messie-Wohnung",
      date: "Januar 2024",
      verified: true,
      duration: "4 Tage",
      beforeImage: "/images/7.webp",
    afterImage: "/images/8.webp",
      helpfulVotes: 31
    },
    {
      quote: "Das Team war unglaublich einfühlsam und professionell. Sie haben nicht nur meine Wohnung gereinigt, sondern mir auch geholfen, wieder Hoffnung zu fassen.",
      author: "Julia B.",
      location: "Düsseldorf",
      rating: 5,
      project: "Komplette Wohnungsreinigung",
      date: "Dezember 2023",
      verified: true,
      duration: "5 Tage",
      beforeImage: "/images/13.webp",
    afterImage: "/images/14.webp",
      helpfulVotes: 27
    },
    {
      quote: "Ich war skeptisch, aber das Ergebnis hat mich überzeugt. Meine Wohnung sieht aus wie neu und ich fühle mich endlich wieder wohl zu Hause.",
      author: "Robert K.",
      location: "Hannover",
      rating: 5,
      project: "Entrümpelung & Renovierung",
      date: "November 2023",
      verified: true,
      duration: "6 Tage",
      beforeImage: "/images/19.webp",
    afterImage: "/images/20.webp",
      helpfulVotes: 19
    },
    {
      quote: "Die Zusammenarbeit war von Anfang bis Ende perfekt. Diskret, schnell und das Ergebnis übertraf alle meine Erwartungen. Vielen Dank!",
      author: "Carmen L.",
      location: "Bremen",
      rating: 5,
      project: "Nachlassräumung",
      date: "Oktober 2023",
      verified: true,
      duration: "3 Tage",
      beforeImage: "/images/17.webp",
    afterImage: "/images/18.webp",
      helpfulVotes: 22
    }
  ];

  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <StatisticsSection stats={stats} />
      <VirtualizedSuccessStories stories={successStories} />
      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <FAQ />
      </Suspense>
      
      {/* Contact Form Section */}
      <RegionsSection />
      
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
          <ContactForm region={undefined} city={undefined} />
        </div>
      </section>
    </main>
  );
};

export default HomePage;