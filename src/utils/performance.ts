// Performance optimization utilities
import { useEffect, useRef } from 'react';

// Custom hook for intersection observer
export const useIntersectionObserver = (
  callback: () => void,
  options: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
  } = {}
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          if (options.once !== false) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [callback, options.threshold, options.rootMargin, options.once]);

  return elementRef;
};

// Throttled scroll handler
export const createThrottledScrollHandler = (callback: (scrollY: number) => void) => {
  let ticking = false;
  
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(window.scrollY);
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Enhanced image preloader with priority and progressive loading
export const preloadImages = (imageSrcs: string[], priority: 'high' | 'low' = 'low') => {
  const promises = imageSrcs.map(src => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      
      // Set loading priority and optimization attributes
      if (priority === 'high') {
        img.loading = 'eager';
        (img as any).fetchpriority = 'high';
      } else {
        img.loading = 'lazy';
        (img as any).fetchpriority = 'low';
      }
      
      img.decoding = 'async';
      img.src = src;
    });
  });
  
  return Promise.allSettled(promises);
};

// Progressive image loader with blur-up effect
export const createProgressiveImageLoader = () => {
  const loadedImages = new Set<string>();
  const loadingImages = new Map<string, Promise<void>>();
  
  const loadImage = (src: string, priority: 'high' | 'low' = 'low'): Promise<void> => {
    if (loadedImages.has(src)) {
      return Promise.resolve();
    }
    
    if (loadingImages.has(src)) {
      return loadingImages.get(src)!;
    }
    
    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        loadedImages.add(src);
        loadingImages.delete(src);
        resolve();
      };
      
      img.onerror = () => {
        loadingImages.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      // Optimize loading attributes
      img.loading = priority === 'high' ? 'eager' : 'lazy';
      (img as any).fetchpriority = priority;
      img.decoding = 'async';
      img.src = src;
    });
    
    loadingImages.set(src, promise);
    return promise;
  };
  
  const preloadBatch = async (srcs: string[], batchSize: number = 3) => {
    for (let i = 0; i < srcs.length; i += batchSize) {
      const batch = srcs.slice(i, i + batchSize);
      await Promise.allSettled(batch.map(src => loadImage(src, 'low')));
      // Small delay between batches to prevent overwhelming the browser
      if (i + batchSize < srcs.length) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }
  };
  
  return { loadImage, preloadBatch, isLoaded: (src: string) => loadedImages.has(src) };
};

// Global progressive loader instance
export const progressiveLoader = createProgressiveImageLoader();

// Intersection Observer with enhanced options
export const createOptimizedObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: {
    threshold?: number;
    rootMargin?: string;
    preloadDistance?: string;
  } = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '50px 0px',
  } = options;
  
  return new IntersectionObserver(callback, {
    threshold,
    rootMargin,
  });
};

// Debounced resize handler
export const createDebouncedResizeHandler = (callback: () => void, delay = 250) => {
  let timeoutId: NodeJS.Timeout;
  
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize animations based on user preferences
export const getOptimizedAnimationDuration = (defaultDuration: number) => {
  return prefersReducedMotion() ? 0 : defaultDuration;
};

// Enhanced animation utilities for better performance
export const createStaggeredAnimation = (
  elements: NodeListOf<Element> | Element[],
  options: {
    delay?: number;
    duration?: number;
    easing?: string;
    staggerDelay?: number;
  } = {}
) => {
  const {
    delay = 0,
    duration = 600,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    staggerDelay = 100
  } = options;

  if (prefersReducedMotion()) {
    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'translateY(0)';
    });
    return;
  }

  elements.forEach((el, index) => {
    const element = el as HTMLElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay + (index * staggerDelay));
  });
};

// Optimized intersection observer for animations
export const createAnimationObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
  } = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback([entry]);
        if (once) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, {
    threshold,
    rootMargin
  });

  return observer;
};

// Performance-optimized CSS animation classes
export const ANIMATION_CLASSES = {
  fadeInUp: 'animate-fade-in-up',
  fadeIn: 'animate-fade-in',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  scaleIn: 'animate-scale-in',
  bounceIn: 'animate-bounce-in'
};

// Batch DOM updates for better performance
export const batchDOMUpdates = (updates: (() => void)[]) => {
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

// Optimized scroll-triggered animations
export const createScrollAnimation = (
  element: HTMLElement,
  animationClass: string,
  options: {
    threshold?: number;
    delay?: number;
    once?: boolean;
  } = {}
) => {
  const { threshold = 0.1, delay = 0, once = true } = options;
  
  if (prefersReducedMotion()) {
    element.classList.add(animationClass);
    return;
  }

  const observer = createAnimationObserver(
    () => {
      setTimeout(() => {
        element.classList.add(animationClass);
        // Clean up will-change after animation completes
        cleanupAnimationProperties(element, animationClass);
      }, delay);
    },
    { threshold, once }
  );

  observer.observe(element);
  return observer;
};

// Clean up animation properties after completion
export const cleanupAnimationProperties = (
  element: HTMLElement,
  animationClass: string
) => {
  const animationDuration = getComputedStyle(element).animationDuration;
  const duration = parseFloat(animationDuration) * 1000 || 600;
  
  setTimeout(() => {
    element.classList.add('animation-complete');
    element.style.willChange = 'auto';
  }, duration + 100); // Add small buffer
};

// Optimize multiple elements with staggered cleanup
export const optimizeAnimatedElements = (
  elements: NodeListOf<Element> | Element[],
  animationClass: string,
  staggerDelay: number = 100
) => {
  elements.forEach((el, index) => {
    const element = el as HTMLElement;
    setTimeout(() => {
      cleanupAnimationProperties(element, animationClass);
    }, index * staggerDelay);
  });
};

// Performance monitoring for animations
export const monitorAnimationPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure' && entry.name.includes('animation')) {
          console.log(`Animation ${entry.name} took ${entry.duration}ms`);
        }
      });
    });
    
    try {
      observer.observe({ entryTypes: ['measure'] });
    } catch (e) {
      // Performance Observer not supported
    }
    
    return observer;
  }
  return null;
};

// Critical images that should be preloaded immediately
export const CRITICAL_IMAGES = [
  '/images/high-angle-house-interior-with-clutter.webp', // Hero background
];

// Non-critical images that can be preloaded with lower priority
export const NON_CRITICAL_IMAGES = [
  '/images/car-with-clothes-pile-top-it.webp',
  '/images/messy-interior-full-clothing (1).webp',
  '/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (1).webp',
  '/images/messy-interior-full-clothing.webp',
  '/images/abandoned-house-cluttered-interior.webp',
  '/images/messy-room-disorder-concept-living-room-bedroom-scattered-clothes-stuff-floor.webp',
  '/images/miscellaneous-items-being-sold-yard-sale.webp',
  '/images/anxiety-induced-by-clutter-house.webp',
  '/images/fragment-photo-children-s-room-with-scattered-things-toys.webp',
  '/images/man-living-tiny-house.webp',
  '/images/person-sleeping-bed-tiny-house.webp',
  '/images/young-man-isolation-home.webp',
  '/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (2).webp',
  '/images/fast-fashion-concept-with-piles-clothes (1).webp'
];

// Enhanced lazy loading with intersection observer
export const createLazyImageObserver = (options: {
  rootMargin?: string;
  threshold?: number;
  onImageLoad?: (src: string) => void;
  onImageError?: (src: string, error: Error) => void;
} = {}) => {
  const {
    rootMargin = '50px 0px',
    threshold = 0.1,
    onImageLoad,
    onImageError
  } = options;
  
  const imageCache = new Set<string>();
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          
          if (src && !imageCache.has(src)) {
            imageCache.add(src);
            
            // Use progressive loader for better performance
            progressiveLoader.loadImage(src, 'low')
              .then(() => {
                img.src = src;
                img.classList.add('loaded');
                onImageLoad?.(src);
              })
              .catch((error) => {
                console.warn(`Failed to load image: ${src}`, error);
                onImageError?.(src, error);
              });
            
            observer.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin,
      threshold
    }
  );
  
  return observer;
};

// Image optimization utilities
export const getOptimizedImageProps = (src: string, priority: 'high' | 'low' = 'low') => {
  return {
    loading: priority === 'high' ? 'eager' as const : 'lazy' as const,
    decoding: 'async' as const,
    fetchpriority: priority,
    style: {
      willChange: priority === 'high' ? 'auto' : 'transform',
      contentVisibility: 'auto' as const
    }
  };
};

// Preload critical images on page load
export const initializeImagePreloading = () => {
  // Preload critical images immediately
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback for non-critical preloading
    const preloadNonCritical = () => {
      progressiveLoader.preloadBatch(NON_CRITICAL_IMAGES, 2);
    };
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadNonCritical, { timeout: 2000 });
    } else {
      setTimeout(preloadNonCritical, 1000);
    }
    
    // Preload critical images with high priority
    preloadImages(CRITICAL_IMAGES, 'high');
  }
};