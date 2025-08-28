import React, { Suspense, useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import StatisticsSection from './StatisticsSection';
import VirtualizedSuccessStories from './VirtualizedSuccessStories';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Messie-Wohnungen24.de - Professionelle Entrümpelung & Reinigung';
  }, []);

  // Sample data for StatisticsSection
  const stats = [
    { number: '500+', label: 'Erfolgreiche Projekte' },
    { number: '15+', label: 'Jahre Erfahrung' },
    { number: '100%', label: 'Kundenzufriedenheit' }
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
      beforeImage: "/images/messy-interior-full-clothing (1).webp",
      afterImage: "/images/person-sleeping-bed-tiny-house.webp",
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
      beforeImage: "/images/car-with-clothes-pile-top-it.webp",
      afterImage: "/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (1).webp",
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
      beforeImage: "/images/fast-fashion-concept-with-piles-clothes (1).webp",
      afterImage: "/images/person-sleeping-bed-tiny-house.webp",
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
      beforeImage: "/images/messy-room-disorder-concept-living-room-bedroom-scattered-clothes-stuff-floor.webp",
      afterImage: "/images/man-living-tiny-house.webp",
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
      beforeImage: "/images/high-angle-house-interior-with-clutter.webp",
      afterImage: "/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (2).webp",
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
      beforeImage: "/images/picture-girl-s-children-s-room-with-strong-mess.webp",
      afterImage: "/images/miscellaneous-items-being-sold-yard-sale (1).webp",
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
    </main>
  );
};

export default HomePage;