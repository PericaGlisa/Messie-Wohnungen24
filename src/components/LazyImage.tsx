import React, { useState, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
  priority?: 'high' | 'low';
  sizes?: string;
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
  style,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Removed lazy loading - images load immediately

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const getOptimizedSrc = (originalSrc: string) => {
    // Return original source - don't convert to WebP automatically
    return originalSrc;
  };

  const generateSrcSet = (originalSrc: string) => {
    // Use original format for srcSet since we don't have multiple sizes
    return originalSrc;
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
      <img
        src={getOptimizedSrc(src)}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={style}
        onLoad={handleLoad}
        onError={handleError}
        loading="eager"
        decoding="async"
      />
      
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