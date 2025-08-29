import React, { useState, useRef, useEffect } from 'react';
import { progressiveImageLoader, generateResponsiveSources } from '../utils/progressiveImageLoader';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
  priority?: 'high' | 'low';
  sizes?: string;
  srcSet?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  blurDataURL,
  priority = 'low',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  srcSet,
  style,
  onLoad,
  onError
}) => {
  
  // Generate responsive srcSet if not provided
  const generateSrcSet = (baseSrc: string): string => {
    // Check if this is an optimized image path
    if (baseSrc.includes('/optimized/')) {
      return baseSrc; // Already optimized, use as-is
    }
    
    // Extract filename without extension
    const fileName = baseSrc.split('/').pop()?.replace(/\.(webp|jpg|jpeg|png)$/i, '') || '';
    
    // For hero image, use all available sizes
    if (fileName === 'abandoned-house-cluttered-interior') {
      return [
        `/images/optimized/${fileName}-320w.webp 320w`,
        `/images/optimized/${fileName}-480w.webp 480w`,
        `/images/optimized/${fileName}-768w.webp 768w`,
        `/images/optimized/${fileName}-1024w.webp 1024w`
      ].join(', ');
    }
    
    // For other images, use standard responsive sizes
    return [
      `/images/optimized/${fileName}-320w.webp 320w`,
      `/images/optimized/${fileName}-480w.webp 480w`,
      `/images/optimized/${fileName}-768w.webp 768w`,
      `/images/optimized/${fileName}-1024w.webp 1024w`
    ].join(', ');
  };
  
  const responsiveSrcSet = srcSet || generateSrcSet(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [isInView, setIsInView] = useState(priority === 'high');
  const imgRef = useRef<HTMLImageElement>(null);

  // Implement progressive lazy loading with priority queue
  useEffect(() => {
    if (priority === 'high') {
      // High priority images load immediately
      progressiveImageLoader.queueImage(src, 'critical', () => {
        setIsInView(true);
      });
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const loadPriority = priority === 'high' ? 'high' : 'normal';
          progressiveImageLoader.queueImage(src, loadPriority, () => {
            setIsInView(true);
          });
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before image comes into view
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
    // Delay hiding placeholder for smooth transition
    setTimeout(() => setShowPlaceholder(false), 100);
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const getOptimizedSrc = (originalSrc: string) => {
    // Check if this is already an optimized image
    if (originalSrc.includes('/optimized/')) {
      return originalSrc;
    }
    
    // Extract filename without extension
    const fileName = originalSrc.split('/').pop()?.replace(/\.(webp|jpg|jpeg|png)$/i, '') || '';
    
    // For hero image, use the largest optimized version
    if (fileName === 'high-angle-house-interior-with-clutter') {
      return `/images/optimized/${fileName}-1920w.webp`;
    }
    
    // For other images, use medium size as default
    return `/images/optimized/${fileName}-768w.webp`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef} style={style}>
      {/* Blur placeholder */}
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
      
      {/* Loading skeleton */}
      {!blurDataURL && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
      
      {/* Main image */}
      {isInView && (
        <>
          {showPlaceholder && (
            <div 
              className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
              style={{
                filter: 'blur(5px)',
                background: 'linear-gradient(45deg, #f3f4f6, #e5e7eb, #f9fafb)'
              }}
            >
              <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={getOptimizedSrc(src)}
            srcSet={responsiveSrcSet}
            sizes={sizes}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100 filter-none' : 'opacity-0 filter blur-sm'
            }`}
            style={{
              ...style,
              transform: 'translateZ(0)',
              willChange: 'opacity'
            }}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority === 'high' ? 'eager' : 'lazy'}
            decoding="async"
            {...(priority === 'high' && { fetchpriority: 'high' as any })}
          />
        </>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-500 text-sm text-center">
            <div className="w-8 h-8 mx-auto mb-2 bg-gray-400 rounded" />
            Bild konnte nicht geladen werden
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(LazyImage);