import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Function to send web vitals to Google Analytics via GTM
function sendToGoogleAnalytics(metric: any) {
  // Send to GTM dataLayer if available
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'web-vital',
      event_category: 'Web Vitals',
      event_action: metric.name,
      event_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_parameter_1: metric.id,
      custom_parameter_2: metric.delta
    });
  }

  // Also log to console for debugging
  console.log(`${metric.name}: ${metric.value}`, metric);
}

// Initialize Web Vitals monitoring
export function initWebVitals() {
  // Core Web Vitals
  onCLS(sendToGoogleAnalytics);
  onINP(sendToGoogleAnalytics); // INP replaced FID in newer versions
  onLCP(sendToGoogleAnalytics);
  
  // Other important metrics
  onFCP(sendToGoogleAnalytics);
  onTTFB(sendToGoogleAnalytics);
}

// Enhanced performance monitoring
export function trackPageLoad() {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      // Track page load time
      const loadTime = performance.now();
      
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'page-load-complete',
          event_category: 'Performance',
          event_action: 'Page Load Time',
          event_value: Math.round(loadTime)
        });
      }
      
      console.log(`Page load time: ${loadTime}ms`);
    });
  }
}

// Track navigation timing
export function trackNavigationTiming() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'navigation-timing',
            event_category: 'Performance',
            dns_time: navigation.domainLookupEnd - navigation.domainLookupStart,
            connect_time: navigation.connectEnd - navigation.connectStart,
            response_time: navigation.responseEnd - navigation.responseStart,
            dom_load_time: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          });
        }
      }, 0);
    });
  }
}