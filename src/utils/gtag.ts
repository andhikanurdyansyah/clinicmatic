// Google Ads Conversion Tracking
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
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
