import { event } from '@/components/common/GoogleAnalytics';

// Common analytics events for your travel website
export const trackBookingStart = (tourName: string) => {
  event({
    action: 'booking_start',
    category: 'Booking',
    label: tourName,
  });
};

export const trackBookingComplete = (tourName: string, value: number) => {
  event({
    action: 'booking_complete',
    category: 'Booking',
    label: tourName,
    value,
  });
};

export const trackContactForm = (formType: string) => {
  event({
    action: 'contact_form_submit',
    category: 'Contact',
    label: formType,
  });
};

export const trackTourView = (tourName: string) => {
  event({
    action: 'tour_view',
    category: 'Tours',
    label: tourName,
  });
};

export const trackDestinationView = (destination: string) => {
  event({
    action: 'destination_view',
    category: 'Destinations',
    label: destination,
  });
};

export const trackSearchQuery = (query: string) => {
  event({
    action: 'search',
    category: 'Search',
    label: query,
  });
};

export const trackNewsletterSubscribe = () => {
  event({
    action: 'newsletter_subscribe',
    category: 'Newsletter',
  });
};

export const trackPhoneCall = () => {
  event({
    action: 'phone_call',
    category: 'Contact',
  });
};

export const trackWhatsAppClick = () => {
  event({
    action: 'whatsapp_click',
    category: 'Contact',
  });
};