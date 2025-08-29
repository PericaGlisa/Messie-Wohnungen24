import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Filter, Download, Share2, Eye, Clock, Award } from 'lucide-react';
import { progressiveLoader, getOptimizedImageProps } from '../utils/performance';
import LazyImage from './LazyImage';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  projectDetails: {
    duration: string;
    scope: string;
    challenge: string;
  };
  testimonial: string;
  customerName: string;
  hasVirtualTour: boolean;
}

const VirtualizedGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('alle');
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 6 });
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const galleryImages: GalleryImage[] = [
    {
      src: '/images/car-with-clothes-pile-top-it.webp',
      alt: 'Überfülltes Auto mit Kleidung',
      category: 'Extreme Fälle',
      beforeImage: '/images/car-with-clothes-pile-top-it.jpg',
    afterImage: '/images/person-sleeping-bed-tiny-house.png',
      projectDetails: {
        duration: '0.5 Tage',
        scope: 'Fahrzeug-Entrümpelung',
        challenge: 'Begrenzter Raum effizient nutzen'
      },
      testimonial: 'Endlich kann ich wieder normal Auto fahren.',
      customerName: 'Klaus D.',
      hasVirtualTour: false
    },
    {
      src: '/images/messy-interior-full-clothing (1).webp',
      alt: 'Innenraum voller Kleidung',
      category: 'Wohnräume',
      beforeImage: '/images/messy-interior-full-clothing (1).jpg',
    afterImage: '/images/person-sleeping-bed-tiny-house.png',
      projectDetails: {
        duration: '2 Tage',
        scope: 'Komplette Wohnzimmer-Entrümpelung',
        challenge: 'Jahrelange Ansammlung von Gegenständen'
      },
      testimonial: 'Endlich kann ich wieder mein Wohnzimmer nutzen. Das Team war sehr professionell.',
      customerName: 'Maria S.',
      hasVirtualTour: true
    },
    {
      src: '/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (1).webp',
      alt: 'Verschiedene Gegenstände',
      category: 'Entsorgung',
      beforeImage: '/images/messy-interior-full-clothing (1).jpg',
    afterImage: '/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (1).jpg',
      projectDetails: {
        duration: '2 Tage',
        scope: 'Fachgerechte Entsorgung und Verkauf',
        challenge: 'Wertvolle Gegenstände identifizieren'
      },
      testimonial: 'Sogar noch Geld durch den Verkauf erhalten!',
      customerName: 'Peter H.',
      hasVirtualTour: false
    },
    {
      src: '/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (2).webp',
      alt: 'Flohmarkt-ähnliche Situation',
      category: 'Entsorgung',
      beforeImage: '/images/car-with-clothes-pile-top-it.jpg',
    afterImage: '/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (2).jpg',
      projectDetails: {
        duration: '1 Tag',
        scope: 'Professionelle Sortierung für Verkauf',
        challenge: 'Maximaler Erlös erzielen'
      },
      testimonial: 'Erstaunlich, was alles noch verkauft werden konnte.',
      customerName: 'Sabine W.',
      hasVirtualTour: false
    },
    {
      src: '/images/person-sleeping-bed-tiny-house.webp',
      alt: 'Beengte Wohnverhältnisse',
      category: 'Wohnräume',
      beforeImage: '/images/messy-interior-full-clothing (1).jpg',
    afterImage: '/images/person-sleeping-bed-tiny-house.png',
      projectDetails: {
        duration: '3 Tage',
        scope: 'Komplette Wohnraumoptimierung',
        challenge: 'Maximale Raumnutzung erreichen'
      },
      testimonial: 'Mein Zuhause ist jetzt meine Oase der Ruhe.',
      customerName: 'Stefan M.',
      hasVirtualTour: true
    },
    {
      src: '/images/fast-fashion-concept-with-piles-clothes (1).webp',
      alt: 'Kleiderstapel',
      category: 'Textilien',
      beforeImage: '/images/fast-fashion-concept-with-piles-clothes (1).jpg',
    afterImage: '/images/person-sleeping-bed-tiny-house.png',
      projectDetails: {
        duration: '1 Tag',
        scope: 'Kleidung sortiert und entsorgt',
        challenge: 'Große Mengen an Textilien'
      },
      testimonial: 'Perfekte Sortierung - vieles konnte noch gespendet werden.',
      customerName: 'Anna M.',
      hasVirtualTour: false
    }
  ];

  const categories = useMemo(() => [
    { id: 'alle', name: 'Alle Projekte', count: galleryImages.length },
    { id: 'Wohnräume', name: 'Wohnräume', count: galleryImages.filter(img => img.category === 'Wohnräume').length },
    { id: 'Textilien', name: 'Textilien', count: galleryImages.filter(img => img.category === 'Textilien').length },
    { id: 'Entsorgung', name: 'Entsorgung', count: galleryImages.filter(img => img.category === 'Entsorgung').length },
    { id: 'Extreme Fälle', name: 'Extreme Fälle', count: galleryImages.filter(img => img.category === 'Extreme Fälle').length }
  ], [galleryImages]);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    return activeFilter === 'alle' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeFilter);
  }, [activeFilter, galleryImages]);

  // Virtual scrolling calculations
  const ITEM_HEIGHT = 280; // Approximate height of each gallery item
  const ITEMS_PER_ROW = 3;
  const BUFFER_SIZE = 2; // Number of rows to render outside viewport

  const totalRows = Math.ceil(filteredImages.length / ITEMS_PER_ROW);
  const totalHeight = totalRows * ITEM_HEIGHT;

  // Calculate visible range based on scroll position
  const calculateVisibleRange = useCallback(() => {
    if (!containerRef.current) return { start: 0, end: 6 };
    
    const scrollTop = containerRef.current.scrollTop;
    const containerHeight = containerRef.current.clientHeight;
    
    const startRow = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER_SIZE);
    const endRow = Math.min(totalRows, Math.ceil((scrollTop + containerHeight) / ITEM_HEIGHT) + BUFFER_SIZE);
    
    const start = startRow * ITEMS_PER_ROW;
    const end = Math.min(filteredImages.length, endRow * ITEMS_PER_ROW);
    
    return { start, end };
  }, [totalRows, filteredImages.length]);

  // Handle scroll events with throttling
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      const newRange = calculateVisibleRange();
      setVisibleRange(newRange);
      
      // Preload next batch of images
      const nextBatch = filteredImages.slice(newRange.end, newRange.end + 6);
      const imagesToPreload = nextBatch.flatMap(img => [img.src, img.beforeImage, img.afterImage]);
      progressiveLoader.preloadBatch(imagesToPreload, 2);
    }, 16); // ~60fps throttling
  }, [calculateVisibleRange, filteredImages]);

  // Update visible range when filter changes
  useEffect(() => {
    setVisibleRange({ start: 0, end: Math.min(6, filteredImages.length) });
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [activeFilter, filteredImages.length]);

  // Update container height
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setShowBeforeAfter(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  // Render only visible items
  const visibleItems = useMemo(() => {
    return filteredImages.slice(visibleRange.start, visibleRange.end).map((image, index) => {
      const actualIndex = visibleRange.start + index;
      const row = Math.floor(actualIndex / ITEMS_PER_ROW);
      const col = actualIndex % ITEMS_PER_ROW;
      
      return {
        ...image,
        actualIndex,
        style: {
          position: 'absolute' as const,
          top: row * ITEM_HEIGHT,
          left: `${(col * 100) / ITEMS_PER_ROW}%`,
          width: `${100 / ITEMS_PER_ROW}%`,
          height: ITEM_HEIGHT,
          padding: '0 12px 24px 12px'
        }
      };
    });
  }, [filteredImages, visibleRange]);

  return (
    <section id="galerie" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Unsere Arbeit in Bildern
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Einblicke in verschiedene Situationen, mit denen wir täglich umgehen - immer mit Respekt und Professionalität
          </p>
          
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-2 mb-6 sm:mb-8 px-4">
            <div className="flex items-center mb-2 sm:mb-0">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
              <span className="text-sm sm:text-base text-gray-600 font-medium">Filter:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
          
          {/* Before/After Toggle */}
          <div className="flex justify-center mb-6 sm:mb-8 px-4">
            <button
              onClick={() => setShowBeforeAfter(!showBeforeAfter)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                showBeforeAfter
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              {showBeforeAfter ? 'Normale Ansicht' : 'Vorher/Nachher Vergleich'}
            </button>
          </div>
        </div>

        {/* Virtualized Gallery Container */}
        <div 
          ref={containerRef}
          className="relative overflow-auto"
          style={{ height: '600px' }}
          onScroll={handleScroll}
        >
          <div style={{ height: totalHeight, position: 'relative' }}>
            {visibleItems.map((item) => (
              <div
                key={item.actualIndex}
                style={item.style}
                className="group cursor-pointer"
                onClick={() => openLightbox(item.actualIndex)}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {showBeforeAfter ? (
                    // Before/After Comparison View
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 relative overflow-hidden">
                          <LazyImage
                            src={item.beforeImage}
                            alt={`Vorher: ${item.alt}`}
                            className="w-full h-full object-cover"
                            priority="low"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                          />
                          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Vorher
                          </div>
                        </div>
                        <div className="w-1/2 relative overflow-hidden">
                          <LazyImage
                            src={item.afterImage}
                            alt={`Nachher: ${item.alt}`}
                            className="w-full h-full object-cover"
                            priority="low"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                          />
                          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Nachher
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white text-sm font-medium">{item.alt}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-blue-200 text-xs">{item.category}</span>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-3 h-3 text-yellow-400" />
                            <span className="text-yellow-200 text-xs">{item.projectDetails.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Normal View
                    <div className="relative">
                      <LazyImage
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110"
                        priority="low"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white text-sm font-medium">{item.alt}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-blue-200 text-xs">{item.category}</span>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-3 h-3 text-yellow-400" />
                            <span className="text-yellow-200 text-xs">{item.projectDetails.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Project Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      {item.hasVirtualTour && (
                        <Eye className="w-4 h-4 text-green-600" title="360° Tour verfügbar" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {visibleRange.end < filteredImages.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                const newEnd = Math.min(filteredImages.length, visibleRange.end + 6);
                setVisibleRange(prev => ({ ...prev, end: newEnd }));
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Weitere Projekte laden ({filteredImages.length - visibleRange.end} verbleibend)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VirtualizedGallery;