// Google Ads Conversion Tracking
type GtagCommand = 'config' | 'event' | 'js' | 'set';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: GtagCommand, ...args: unknown[]) => void;
  }
}

// Track konversi kontak
export const trackContactConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-447038699/J6d2CJKlpsobEOuJldUB'
    });
    console.log('Google Ads Conversion tracked: Kontak');
  }
};

// Track event custom lainnya (opsional untuk future use)
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
