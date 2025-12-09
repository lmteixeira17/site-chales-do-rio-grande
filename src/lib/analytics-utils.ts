/**
 * Analytics Utilities
 * Type-safe event tracking for Google Analytics 4 and Google Ads
 */

// Extend Window interface to include dataLayer and gtag
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
    }
}

/**
 * Event categories for better organization in GA4
 */
export enum EventCategory {
    ENGAGEMENT = 'engagement',
    CONVERSION = 'conversion',
    NAVIGATION = 'navigation',
    CONTACT = 'contact',
}

/**
 * Custom event names
 */
export enum EventName {
    WHATSAPP_CLICK = 'whatsapp_click',
    CHECK_AVAILABILITY = 'check_availability',
    GALLERY_VIEW = 'gallery_view',
    GALLERY_INTERACTION = 'gallery_interaction',
    CTA_CLICK = 'cta_click',
    PHONE_CLICK = 'phone_click',
    EMAIL_CLICK = 'email_click',
    SCROLL_DEPTH = 'scroll_depth',
}

/**
 * Event parameters interface
 */
interface EventParams {
    event_category?: EventCategory;
    event_label?: string;
    value?: number;
    [key: string]: any;
}

/**
 * Push event to dataLayer (for GTM)
 */
function pushToDataLayer(eventName: string, params: EventParams = {}) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...params,
        });
    }
}

/**
 * Send event to GA4 via gtag
 */
function sendToGtag(eventName: string, params: EventParams = {}) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }
}

/**
 * Generic event tracking function
 * Sends to both GTM dataLayer and gtag (GA4)
 */
export function trackEvent(
    eventName: EventName | string,
    params: EventParams = {}
) {
    // Send to GTM dataLayer
    pushToDataLayer(eventName, params);

    // Send to gtag (GA4)
    sendToGtag(eventName, params);

    // Log in development
    if (process.env.NODE_ENV === 'development') {
        console.log('📊 Analytics Event:', eventName, params);
    }
}

/**
 * Track WhatsApp button click
 */
export function trackWhatsAppClick(source: string = 'floating_button') {
    trackEvent(EventName.WHATSAPP_CLICK, {
        event_category: EventCategory.CONTACT,
        event_label: source,
        contact_method: 'whatsapp',
    });

    // Also send as conversion to Google Ads
    trackConversion('whatsapp_contact');
}

/**
 * Track availability check interaction
 */
export function trackAvailabilityCheck(dateSelected?: string) {
    trackEvent(EventName.CHECK_AVAILABILITY, {
        event_category: EventCategory.ENGAGEMENT,
        event_label: dateSelected || 'calendar_opened',
        interaction_type: 'availability',
    });
}

/**
 * Track gallery interactions
 */
export function trackGalleryView(imageIndex?: number, imageUrl?: string) {
    trackEvent(EventName.GALLERY_VIEW, {
        event_category: EventCategory.ENGAGEMENT,
        event_label: imageUrl || `image_${imageIndex}`,
        image_index: imageIndex,
    });
}

export function trackGalleryInteraction(action: 'next' | 'previous' | 'open' | 'close') {
    trackEvent(EventName.GALLERY_INTERACTION, {
        event_category: EventCategory.ENGAGEMENT,
        event_label: action,
        interaction_type: 'gallery',
    });
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaLabel: string, ctaLocation: string = 'hero') {
    trackEvent(EventName.CTA_CLICK, {
        event_category: EventCategory.NAVIGATION,
        event_label: ctaLabel,
        cta_location: ctaLocation,
    });
}

/**
 * Track phone click
 */
export function trackPhoneClick(source: string = 'footer') {
    trackEvent(EventName.PHONE_CLICK, {
        event_category: EventCategory.CONTACT,
        event_label: source,
        contact_method: 'phone',
    });
}

/**
 * Track email click
 */
export function trackEmailClick(source: string = 'footer') {
    trackEvent(EventName.EMAIL_CLICK, {
        event_category: EventCategory.CONTACT,
        event_label: source,
        contact_method: 'email',
    });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number) {
    trackEvent(EventName.SCROLL_DEPTH, {
        event_category: EventCategory.ENGAGEMENT,
        event_label: `${percentage}%`,
        scroll_percentage: percentage,
    });
}

/**
 * Track Google Ads conversion
 */
export function trackConversion(
    conversionLabel: string,
    conversionValue?: number,
    currency: string = 'BRL'
) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
            send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${conversionLabel}`,
            value: conversionValue,
            currency: currency,
        });

        if (process.env.NODE_ENV === 'development') {
            console.log('🎯 Conversion tracked:', conversionLabel, conversionValue);
        }
    }
}

/**
 * Track page view (for SPA navigation)
 */
export function trackPageView(url: string, title?: string) {
    // GTM dataLayer
    pushToDataLayer('page_view', {
        page_path: url,
        page_title: title || document.title,
    });

    // GA4 via gtag
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
            page_path: url,
            page_title: title,
        });
    }
}
