import { render, screen, fireEvent } from '@testing-library/react'
import { Gallery } from '@/components/Gallery'
import { trackGalleryView, trackGalleryInteraction } from '@/lib/analytics-utils'
import '@testing-library/jest-dom'

// Mock the analytics utils
jest.mock('@/lib/analytics-utils', () => ({
    trackGalleryView: jest.fn(),
    trackGalleryInteraction: jest.fn(),
}))

describe('Gallery Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders the gallery section with heading', () => {
        render(<Gallery />)

        const heading = screen.getByRole('heading', { name: /Galeria de Fotos/i })
        expect(heading).toBeInTheDocument()
    })

    it('renders the gallery description', () => {
        render(<Gallery />)

        const description = screen.getByText(/Conheça cada detalhe do nosso paraíso/i)
        expect(description).toBeInTheDocument()
    })

    it('renders all gallery images', () => {
        render(<Gallery />)

        // Should render 29 images (based on PHOTOS array)
        const images = screen.getAllByAltText(/Foto da galeria/i)
        expect(images).toHaveLength(29)
    })

    it('images have correct lazy loading attribute', () => {
        render(<Gallery />)

        const images = screen.getAllByAltText(/Foto da galeria/i)
        images.forEach(img => {
            expect(img).toHaveAttribute('loading', 'lazy')
        })
    })

    it('opens lightbox when image is clicked', () => {
        render(<Gallery />)

        const images = screen.getAllByAltText(/Foto da galeria/i)
        const firstImage = images[0]

        fireEvent.click(firstImage)

        // Check if lightbox image appears
        const lightboxImage = screen.getByAltText('Ampliada')
        expect(lightboxImage).toBeInTheDocument()
    })

    it('tracks analytics when image is clicked', () => {
        render(<Gallery />)

        const images = screen.getAllByAltText(/Foto da galeria/i)
        const firstImage = images[0]

        fireEvent.click(firstImage)

        expect(trackGalleryView).toHaveBeenCalledWith(0, expect.stringContaining('/images/gallery/'))
        expect(trackGalleryInteraction).toHaveBeenCalledWith('open')
    })

    it('closes lightbox when close button is clicked', () => {
        render(<Gallery />)

        // Open lightbox
        const images = screen.getAllByAltText(/Foto da galeria/i)
        fireEvent.click(images[0])

        // Find and click close button
        const closeButton = screen.getByRole('button')
        fireEvent.click(closeButton)

        // Lightbox should be closed
        const lightboxImage = screen.queryByAltText('Ampliada')
        expect(lightboxImage).not.toBeInTheDocument()
    })

    it('tracks close interaction when lightbox is closed', () => {
        render(<Gallery />)

        // Open lightbox
        const images = screen.getAllByAltText(/Foto da galeria/i)
        fireEvent.click(images[0])

        // Clear previous calls
        jest.clearAllMocks()

        // Close lightbox by clicking background
        const lightboxBackground = screen.getByAltText('Ampliada').parentElement
        if (lightboxBackground) {
            fireEvent.click(lightboxBackground)
        }

        expect(trackGalleryInteraction).toHaveBeenCalledWith('close')
    })

    it('lightbox image does not close when clicking on the image itself', () => {
        render(<Gallery />)

        // Open lightbox
        const images = screen.getAllByAltText(/Foto da galeria/i)
        fireEvent.click(images[0])

        // Click on the lightbox image
        const lightboxImage = screen.getByAltText('Ampliada')
        fireEvent.click(lightboxImage)

        // Lightbox should still be open
        expect(lightboxImage).toBeInTheDocument()
    })

    it('has correct section id for anchor navigation', () => {
        const { container } = render(<Gallery />)

        const section = container.querySelector('#galeria')
        expect(section).toBeInTheDocument()
    })

    it('applies hover effects to gallery items', () => {
        const { container } = render(<Gallery />)

        const galleryItems = container.querySelectorAll('.group')
        expect(galleryItems.length).toBeGreaterThan(0)

        galleryItems.forEach(item => {
            expect(item).toHaveClass('cursor-pointer')
        })
    })
})
