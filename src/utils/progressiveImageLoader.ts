// Progressive Image Loading Utility
// Implements advanced lazy loading with priority queues and progressive enhancement

import React from 'react';

interface ImageLoadTask {
  src: string;
  priority: 'critical' | 'high' | 'normal' | 'low';
  callback: (src: string) => void;
  element?: HTMLImageElement;
}

class ProgressiveImageLoader {
  private loadQueue: ImageLoadTask[] = [];
  private loadingCount = 0;
  private maxConcurrentLoads = 3;
  private loadedImages = new Set<string>();
  private preloadCache = new Map<string, HTMLImageElement>();

  constructor() {
    // Reduce concurrent loads on slower connections
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g') {
        this.maxConcurrentLoads = 1;
      } else if (connection?.effectiveType === '3g') {
        this.maxConcurrentLoads = 2;
      }
    }
  }

  // Add image to loading queue with priority
  queueImage(src: string, priority: 'critical' | 'high' | 'normal' | 'low' = 'normal', callback: (src: string) => void) {
    if (this.loadedImages.has(src)) {
      callback(src);
      return;
    }

    // Check if already in queue
    const existingTask = this.loadQueue.find(task => task.src === src);
    if (existingTask) {
      // Update priority if higher
      const priorityOrder = { critical: 0, high: 1, normal: 2, low: 3 };
      if (priorityOrder[priority] < priorityOrder[existingTask.priority]) {
        existingTask.priority = priority;
        this.sortQueue();
      }
      return;
    }

    this.loadQueue.push({ src, priority, callback });
    this.sortQueue();
    this.processQueue();
  }

  // Sort queue by priority
  private sortQueue() {
    const priorityOrder = { critical: 0, high: 1, normal: 2, low: 3 };
    this.loadQueue.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  }

  // Process the loading queue
  private processQueue() {
    while (this.loadingCount < this.maxConcurrentLoads && this.loadQueue.length > 0) {
      const task = this.loadQueue.shift();
      if (task) {
        this.loadImage(task);
      }
    }
  }

  // Load individual image
  private loadImage(task: ImageLoadTask) {
    if (this.loadedImages.has(task.src)) {
      task.callback(task.src);
      return;
    }

    this.loadingCount++;
    
    const img = new Image();
    img.onload = () => {
      this.loadedImages.add(task.src);
      this.preloadCache.set(task.src, img);
      task.callback(task.src);
      this.loadingCount--;
      this.processQueue();
    };
    
    img.onerror = () => {
      console.warn(`Failed to load image: ${task.src}`);
      this.loadingCount--;
      this.processQueue();
    };
    
    img.src = task.src;
  }

  // Preload images for better UX
  preloadImages(srcs: string[], priority: 'critical' | 'high' | 'normal' | 'low' = 'low') {
    srcs.forEach(src => {
      this.queueImage(src, priority, () => {});
    });
  }

  // Check if image is loaded
  isLoaded(src: string): boolean {
    return this.loadedImages.has(src);
  }

  // Get cached image
  getCachedImage(src: string): HTMLImageElement | undefined {
    return this.preloadCache.get(src);
  }

  // Clear cache to free memory
  clearCache() {
    this.preloadCache.clear();
    this.loadedImages.clear();
  }
}

// Global instance
export const progressiveImageLoader = new ProgressiveImageLoader();

// Hook for React components
export const useProgressiveImage = (src: string, priority: 'critical' | 'high' | 'normal' | 'low' = 'normal') => {
  const [isLoaded, setIsLoaded] = React.useState(progressiveImageLoader.isLoaded(src));
  
  React.useEffect(() => {
    if (!isLoaded) {
      progressiveImageLoader.queueImage(src, priority, () => {
        setIsLoaded(true);
      });
    }
  }, [src, priority, isLoaded]);
  
  return isLoaded;
};

// Intersection Observer for viewport-based loading
export const createViewportObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  return new IntersectionObserver(callback, {
    rootMargin: '100px', // Start loading 100px before entering viewport
    threshold: 0.1
  });
};

// Utility to generate responsive image sources
export const generateResponsiveSources = (baseSrc: string) => {
  const fileName = baseSrc.split('/').pop()?.replace('.webp', '') || '';
  
  return {
    src: baseSrc,
    srcSet: [
      `/images/optimized/${fileName}-320w.webp 320w`,
      `/images/optimized/${fileName}-480w.webp 480w`,
      `/images/optimized/${fileName}-768w.webp 768w`,
      `/images/optimized/${fileName}-1024w.webp 1024w`
    ].join(', '),
    sizes: '(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 768px) 768px, 1024px'
  };
};