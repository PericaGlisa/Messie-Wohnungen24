import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X, Filter, Download, Share2, Eye, Clock, Award } from 'lucide-react';
import { createLazyImageObserver, progressiveLoader, getOptimizedImageProps } from '../utils/performance';

const galleryImages = [
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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('alle');
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const categories = [
    { id: 'alle', name: 'Alle Projekte', count: galleryImages.length },
    { id: 'Wohnräume', name: 'Wohnräume', count: galleryImages.filter(img => img.category === 'Wohnräume').length },
    { id: 'Textilien', name: 'Textilien', count: galleryImages.filter(img => img.category === 'Textilien').length },
    { id: 'Entsorgung', name: 'Entsorgung', count: galleryImages.filter(img => img.category === 'Entsorgung').length },
    { id: 'Extreme Fälle', name: 'Extreme Fälle', count: galleryImages.filter(img => img.category === 'Extreme Fälle').length }
  ];

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    return activeFilter === 'alle' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeFilter);
  }, [activeFilter, galleryImages]);

  // Reset visible images when filter changes and preload first few images
  useEffect(() => {
    // Immediately show first 6 images for better UX (covers first 2 rows in 3-column grid)
    const initialVisible = [0, 1, 2, 3, 4, 5].filter(i => i < filteredImages.length);
    setVisibleImages(initialVisible);
    
    // Preload first few images immediately
    initialVisible.forEach(index => {
      const image = filteredImages[index];
      if (image) {
        const imagesToLoad = [image.src, image.beforeImage, image.afterImage].filter(Boolean);
        imagesToLoad.forEach(src => {
          progressiveLoader.loadImage(src, 'high').catch(error => {
            console.warn(`Failed to preload gallery image: ${src}`, error);
          });
        });
      }
    });
  }, [activeFilter, filteredImages]);

  // Enhanced lazy loading with progressive image loader
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const index = parseInt(img.dataset.index || '0', 10);
            
            // Add to visible images using functional update to avoid stale closure
            setVisibleImages(prev => {
              if (!prev.includes(index)) {
                return [...new Set([...prev, index])];
              }
              return prev;
            });
            
            // Preload next images in batch for smoother experience
            const nextIndexes = [index + 1, index + 2, index + 3].filter(i => i < filteredImages.length);
            const nextSrcs = nextIndexes.flatMap(i => {
              const img = filteredImages[i];
              return img ? [img.src, img.beforeImage, img.afterImage] : [];
            });
            
            // Use progressive loader for better performance
            progressiveLoader.preloadBatch(nextSrcs, 2);
            
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '100px 0px',
        threshold: 0.1
      }
    );
    
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filteredImages]);

  // Load images when they become visible
  useEffect(() => {
    visibleImages.forEach(index => {
      const image = filteredImages[index];
      if (image) {
        // Load all image variants for this gallery item
        const imagesToLoad = [image.src, image.beforeImage, image.afterImage].filter(Boolean);
        imagesToLoad.forEach(src => {
          progressiveLoader.loadImage(src, 'low').catch(error => {
            console.warn(`Failed to load gallery image: ${src}`, error);
          });
        });
      }
    });
  }, [visibleImages, filteredImages]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setShowBeforeAfter(false);
    setShowVirtualTour(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const downloadImage = (imageSrc: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareImage = async (image: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Messie-Wohnungen24.de - Transformation',
          text: `Schauen Sie sich diese beeindruckende Transformation an: ${image.alt}`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Sharing failed:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link wurde in die Zwischenablage kopiert!');
    }
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white"
            >
              {showBeforeAfter ? (
                // Before/After Comparison View
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      {visibleImages.includes(index) ? (
                        <img
                          src={image.beforeImage}
                          alt={`Vorher: ${image.alt}`}
                          className="w-full h-full object-cover transition-opacity duration-300"
                          {...getOptimizedImageProps(image.beforeImage, 'low')}
                        />
                      ) : (
                        <img
                          data-src={image.beforeImage}
                          data-index={index}
                          alt={`Vorher: ${image.alt}`}
                          className="w-full h-full object-cover transition-opacity duration-300"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23fef2f2'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23fca5a5'%3ELädt...%3C/text%3E%3C/svg%3E"
                          ref={(el) => {
                            if (el && observerRef.current) {
                              observerRef.current.observe(el);
                            }
                          }}
                        />
                      )}
                      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-red-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium">
                        Vorher
                      </div>
                    </div>
                    <div className="w-1/2 relative overflow-hidden">
                      {visibleImages.includes(index) ? (
                        <img
                          src={image.afterImage}
                          alt={`Nachher: ${image.alt}`}
                          className="w-full h-full object-cover transition-opacity duration-300"
                          {...getOptimizedImageProps(image.afterImage, 'low')}
                        />
                      ) : (
                        <img
                          data-src={image.afterImage}
                          data-index={index}
                          alt={`Nachher: ${image.alt}`}
                          className="w-full h-full object-cover transition-opacity duration-300"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f0fdf4'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2386efac'%3ELädt...%3C/text%3E%3C/svg%3E"
                          ref={(el) => {
                            if (el && observerRef.current) {
                              observerRef.current.observe(el);
                            }
                          }}
                        />
                      )}
                      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-green-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium">
                        Nachher
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4">
                    <p className="text-white text-xs sm:text-sm font-medium">{image.alt}</p>
                    <div className="flex items-center justify-between mt-1 sm:mt-2">
                      <span className="text-blue-200 text-xs">{image.category}</span>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <Clock className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                        <span className="text-yellow-200 text-xs">{image.projectDetails.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Normal View
                <div onClick={() => openLightbox(index)}>
                  {visibleImages.includes(index) ? (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-300 group-hover:scale-110 loaded"
                      {...getOptimizedImageProps(image.src, 'low')}
                      style={{ 
                        willChange: 'transform',
                        contentVisibility: 'auto'
                      }}
                    />
                  ) : (
                    <img
                      data-src={image.src}
                      data-index={index}
                      alt={image.alt}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-300 group-hover:scale-110"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23d1d5db'%3ELädt...%3C/text%3E%3C/svg%3E"
                      style={{ 
                        willChange: 'transform',
                        contentVisibility: 'auto'
                      }}
                      ref={(el) => {
                        if (el && observerRef.current) {
                          observerRef.current.observe(el);
                        }
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                      <p className="text-white text-xs sm:text-sm font-medium">{image.alt}</p>
                      <div className="flex items-center justify-between mt-1 sm:mt-2">
                        <p className="text-blue-200 text-xs">{image.category}</p>
                        <div className="flex items-center space-x-1">
                          {image.hasVirtualTour && (
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" title="360° Tour verfügbar" />
                          )}
                          <Clock className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                          <span className="text-yellow-200 text-xs">{image.projectDetails.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Project Details Card */}
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900 text-xs sm:text-sm min-w-0 flex-1 pr-2">{image.projectDetails.scope}</h3>
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-600 mb-2 sm:mb-3 leading-relaxed">{image.projectDetails.challenge}</p>
                
                {/* Customer Testimonial */}
                <div className="bg-blue-50 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3">
                  <p className="text-xs text-gray-700 italic mb-1 leading-relaxed">"{image.testimonial}"</p>
                  <p className="text-xs text-blue-600 font-medium">- {image.customerName}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(index);
                    }}
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                  >
                    Details ansehen
                  </button>
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadImage(image.src, `transformation-${index + 1}.webp`);
                      }}
                      className="text-gray-500 hover:text-gray-700 p-1"
                      title="Bild herunterladen"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        shareImage(image);
                      }}
                      className="text-gray-500 hover:text-gray-700 p-1"
                      title="Teilen"
                    >
                      <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-gray-300 z-20 bg-black/50 rounded-full p-1.5 sm:p-2"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20 bg-black/50 rounded-full p-1.5 sm:p-2"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20 bg-black/50 rounded-full p-1.5 sm:p-2"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-6 h-full">
                {/* Main Image Area */}
                <div className="flex-1 flex flex-col">
                  {showBeforeAfter ? (
                    /* Before/After Slider */
                    <div className="relative flex-1 bg-gray-900 rounded-lg overflow-hidden">
                      <div className="relative h-full">
                        <img
                          src={filteredImages[currentIndex].beforeImage}
                          alt={`Vorher: ${filteredImages[currentIndex].alt}`}
                          className="absolute inset-0 w-full h-full object-contain"
                        />
                        <div 
                          className="absolute inset-0 overflow-hidden"
                          style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
                        >
                          <img
                            src={filteredImages[currentIndex].afterImage}
                            alt={`Nachher: ${filteredImages[currentIndex].alt}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        
                        {/* Slider Control */}
                        <div className="absolute inset-x-0 bottom-2 sm:bottom-4 px-2 sm:px-4">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={beforeAfterSlider}
                            onChange={(e) => setBeforeAfterSlider(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-white text-xs sm:text-sm mt-1 sm:mt-2">
                            <span>Vorher</span>
                            <span>Nachher</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : showVirtualTour ? (
                    /* Virtual Tour Placeholder */
                    <div className="flex-1 bg-gray-900 rounded-lg flex items-center justify-center p-4">
                      <div className="text-center text-white">
                        <Eye className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-blue-400" />
                        <h3 className="text-lg sm:text-xl font-bold mb-2">360° Virtual Tour</h3>
                        <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base px-2">Interaktive Rundgang durch das transformierte Projekt</p>
                        <div className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-block text-sm sm:text-base">
                          Virtual Tour wird geladen...
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Normal Image View */
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src={filteredImages[currentIndex].src}
                        alt={filteredImages[currentIndex].alt}
                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                    </div>
                  )}
                  
                  {/* Image Controls */}
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-3 sm:mt-4 px-2">
                    <button
                      onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                        showBeforeAfter ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      Vorher/Nachher
                    </button>
                    {filteredImages[currentIndex].hasVirtualTour && (
                      <button
                        onClick={() => setShowVirtualTour(!showVirtualTour)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                          showVirtualTour ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">360° Tour</span>
                        <span className="sm:hidden">Tour</span>
                      </button>
                    )}
                    <button
                      onClick={() => downloadImage(filteredImages[currentIndex].src, `transformation-${currentIndex + 1}.webp`)}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700 text-gray-300 hover:bg-gray-600 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Download</span>
                      <span className="sm:hidden">DL</span>
                    </button>
                    <button
                      onClick={() => shareImage(filteredImages[currentIndex])}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700 text-gray-300 hover:bg-gray-600 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                    >
                      <Share2 className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                      Teilen
                    </button>
                  </div>
                </div>
                
                {/* Project Details Sidebar */}
                <div className="lg:w-80 bg-white rounded-lg p-4 sm:p-6 overflow-y-auto max-h-96 lg:max-h-full">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {filteredImages[currentIndex].alt}
                    </h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {filteredImages[currentIndex].category}
                    </span>
                  </div>
                  
                  {/* Project Details */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Projekt Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">Dauer: {filteredImages[currentIndex].projectDetails.duration}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Umfang:</p>
                        <p className="text-sm text-gray-600">{filteredImages[currentIndex].projectDetails.scope}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Herausforderung:</p>
                        <p className="text-sm text-gray-600">{filteredImages[currentIndex].projectDetails.challenge}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Customer Testimonial */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Kundenstimme</h4>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 italic mb-2">
                        "{filteredImages[currentIndex].testimonial}"
                      </p>
                      <p className="text-sm font-medium text-blue-600">
                        - {filteredImages[currentIndex].customerName}
                      </p>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Ähnliches Projekt geplant?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Lassen Sie sich kostenlos beraten und erhalten Sie ein unverbindliches Angebot.
                    </p>
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Kostenlose Beratung anfragen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Footer Section */}
        <div className="mt-16 space-y-8">
          {/* FAQ Section */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Häufig gestellte Fragen zu unseren Projekten</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Wie lange dauert ein typisches Projekt?</h4>
                <p className="text-sm text-gray-600">Die Dauer variiert je nach Umfang. Kleine Projekte dauern 0.5-1 Tag, größere Wohnungen 2-3 Tage, und Extremfälle bis zu 5 Tage.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Was passiert mit den Gegenständen?</h4>
                <p className="text-sm text-gray-600">Wir sortieren professionell: Wertvolles wird verkauft, Brauchbares gespendet, und nur wirklicher Müll entsorgt.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Sind die Vorher-Nachher-Bilder echt?</h4>
                <p className="text-sm text-gray-600">Ja, alle Bilder stammen aus echten Projekten und wurden mit Kundenzustimmung aufgenommen.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Bieten Sie auch 360° Touren an?</h4>
                <p className="text-sm text-gray-600">Bei ausgewählten Projekten erstellen wir virtuelle Rundgänge, um das Ergebnis noch besser zu präsentieren.</p>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Unsere Erfolge in Zahlen</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{galleryImages.length}+</div>
                <div className="text-sm opacity-90">Abgeschlossene Projekte</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Kundenzufriedenheit</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24h</div>
                <div className="text-sm opacity-90">Durchschnittliche Projektdauer</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Diskretion garantiert</div>
              </div>
            </div>
          </div>
          
          {/* Privacy Notice */}
          <div className="text-center bg-gray-100 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              <h4 className="font-semibold text-gray-900">Datenschutz & Diskretion</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              * Alle Bilder wurden mit ausdrücklicher schriftlicher Zustimmung unserer Kunden veröffentlicht. 
              Wir respektieren die Privatsphäre und behandeln jeden Fall mit größter Diskretion.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                DSGVO-konform
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Anonymisierte Darstellung
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Vollversichert
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Zertifizierte Entsorgung
              </span>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bereit für Ihre Transformation?</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Lassen Sie sich von unseren Erfolgsgeschichten inspirieren und starten Sie Ihr eigenes Projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Kostenlose Beratung anfragen
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Weitere Referenzen ansehen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;