import {
    trackEvent,
    trackWhatsAppClick,
    trackAvailabilityCheck,
    trackGalleryView,
    trackGalleryInteraction,
    trackCTAClick,
    trackPhoneClick,
    trackEmailClick,
    trackScrollDepth,
    trackConversion,
    trackPageView,
    EventName,
    EventCategory,
} from '@/lib/analytics-utils'

describe('Analytics Utils', () => {
    let mockGtag: jest.Mock
    let mockDataLayer: any[]

    beforeEach(() => {
        // Create fresh mocks
        mockGtag = jest.fn()
        mockDataLayer = []

        // Setup window mocks
        Object.defineProperty(global.window, 'gtag', {
            value: mockGtag,
            writable: true,
            configurable: true,
        })

        Object.defineProperty(global.window, 'dataLayer', {
            value: mockDataLayer,
            writable: true,
            configurable: true,
        })

        // Mock console.log to avoid cluttering test output
        jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('trackEvent', () => {
        it('sends event to dataLayer', () => {
            trackEvent(EventName.WHATSAPP_CLICK, {
                event_category: EventCategory.CONTACT,
            })

            expect(window.dataLayer).toHaveLength(1)
            expect(window.dataLayer[0]).toEqual({
                event: EventName.WHATSAPP_CLICK,
                event_category: EventCategory.CONTACT,
            })
        })

        it('sends event to gtag', () => {
            trackEvent(EventName.WHATSAPP_CLICK, {
                event_category: EventCategory.CONTACT,
            })

            expect(mockGtag).toHaveBeenCalledWith('event', EventName.WHATSAPP_CLICK, {
                event_category: EventCategory.CONTACT,
            })
        })
    })

    describe('trackWhatsAppClick', () => {
        it('tracks WhatsApp click with correct parameters', () => {
            trackWhatsAppClick('floating_button')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: EventName.WHATSAPP_CLICK,
                    event_category: EventCategory.CONTACT,
                    event_label: 'floating_button',
                    contact_method: 'whatsapp',
                })
            )
        })

        it('tracks conversion for WhatsApp contact', () => {
            // Set env var for conversion tracking
            process.env.NEXT_PUBLIC_GOOGLE_ADS_ID = 'AW-TEST123'

            trackWhatsAppClick('floating_button')

            // Should call gtag for conversion
            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'conversion',
                expect.objectContaining({
                    send_to: expect.stringContaining('whatsapp_contact'),
                })
            )
        })
    })

    describe('trackAvailabilityCheck', () => {
        it('tracks availability check without date', () => {
            trackAvailabilityCheck()

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: EventName.CHECK_AVAILABILITY,
                    event_category: EventCategory.ENGAGEMENT,
                    event_label: 'calendar_opened',
                })
            )
        })

        it('tracks availability check with date', () => {
            trackAvailabilityCheck('2024-12-25')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: EventName.CHECK_AVAILABILITY,
                    event_label: '2024-12-25',
                })
            )
        })
    })

    describe('trackGalleryView', () => {
        it('tracks gallery view with image index', () => {
            trackGalleryView(5, '/images/gallery/IMG_3057.jpg')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: EventName.GALLERY_VIEW,
                    event_category: EventCategory.ENGAGEMENT,
                    event_label: '/images/gallery/IMG_3057.jpg',
                    image_index: 5,
                })
            )
        })
    })

    describe('trackGalleryInteraction', () => {
        it('tracks gallery open action', () => {
            trackGalleryInteraction('open')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: EventName.GALLERY_INTERACTION,
                    event_label: 'open',
                    interaction_type: 'gallery',
                })
            )
        })

        it('tracks gallery close action', () => {
            trackGalleryInteraction('close')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event_label: 'close',
                })
            )
        })
    })

    describe('trackCTAClick', () => {
        it('tracks CTA click with label and location', () => {
            trackCTAClick('Verificar Disponibilidade', 'hero')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: EventName.CTA_CLICK,
                    event_category: EventCategory.NAVIGATION,
                    event_label: 'Verificar Disponibilidade',
                    cta_location: 'hero',
                })
            )
        })
    })

    describe('trackPhoneClick', () => {
        it('tracks phone click with source', () => {
            trackPhoneClick('footer')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: EventName.PHONE_CLICK,
                    event_category: EventCategory.CONTACT,
                    contact_method: 'phone',
                })
            )
        })
    })

    describe('trackEmailClick', () => {
        it('tracks email click with source', () => {
            trackEmailClick('footer')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: EventName.EMAIL_CLICK,
                    event_category: EventCategory.CONTACT,
                    contact_method: 'email',
                })
            )
        })
    })

    describe('trackScrollDepth', () => {
        it('tracks scroll depth percentage', () => {
            trackScrollDepth(75)

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: EventName.SCROLL_DEPTH,
                    event_label: '75%',
                    scroll_percentage: 75,
                })
            )
        })
    })

    describe('trackConversion', () => {
        beforeEach(() => {
            process.env.NEXT_PUBLIC_GOOGLE_ADS_ID = 'AW-TEST123'
        })

        it('tracks conversion with label and value', () => {
            trackConversion('whatsapp_contact', 100, 'BRL')

            expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
                send_to: 'AW-TEST123/whatsapp_contact',
                value: 100,
                currency: 'BRL',
            })
        })

        it('tracks conversion without value', () => {
            trackConversion('whatsapp_contact')

            expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
                send_to: 'AW-TEST123/whatsapp_contact',
                value: undefined,
                currency: 'BRL',
            })
        })
    })

    describe('trackPageView', () => {
        beforeEach(() => {
            // Mock document.title
            Object.defineProperty(document, 'title', {
                value: 'Test Page',
                writable: true,
                configurable: true,
            })

            // Mock environment variable
            process.env.NEXT_PUBLIC_GA_ID = 'G-TEST123'
        })

        it('tracks page view with URL and title', () => {
            trackPageView('/test-page', 'Test Page Title')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    event: 'page_view',
                    page_path: '/test-page',
                    page_title: 'Test Page Title',
                })
            )
        })

        it('tracks page view with URL only (uses document.title)', () => {
            trackPageView('/test-page')

            expect(window.dataLayer).toContainEqual(
                expect.objectContaining({
                    page_path: '/test-page',
                    page_title: 'Test Page',
                })
            )
        })

        it('sends config to gtag for page view', () => {
            trackPageView('/test-page', 'Test Title')

            expect(mockGtag).toHaveBeenCalledWith('config', 'G-TEST123', {
                page_path: '/test-page',
                page_title: 'Test Title',
            })
        })
    })
})
