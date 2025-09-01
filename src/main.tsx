import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initWebVitals, trackPageLoad, trackNavigationTiming } from './utils/webVitals';

// Initialize Web Vitals monitoring
initWebVitals();
trackPageLoad();
trackNavigationTiming();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
