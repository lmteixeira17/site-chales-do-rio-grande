import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/Hero'
import '@testing-library/jest-dom'

// Mock the analytics utils
jest.mock('@/lib/analytics-utils', () => ({
    trackCTAClick: jest.fn(),
}))

describe('Hero Component', () => {
    it('renders the hero section with correct heading', () => {
        render(<Hero />)

        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/Onde a Natureza/)
    })

    it('renders the exclusive refuge badge', () => {
        render(<Hero />)

        const badge = screen.getByText('Refúgio Exclusivo')
        expect(badge).toBeInTheDocument()
    })

    it('renders the description text', () => {
        render(<Hero />)

        const description = screen.getByText(/Desconecte-se da rotina/)
        expect(description).toBeInTheDocument()
    })

    it('renders both CTA buttons', () => {
        render(<Hero />)

        const availabilityButton = screen.getByText('Verificar Disponibilidade')
        const ranchButton = screen.getByText('Conhecer o Rancho')

        expect(availabilityButton).toBeInTheDocument()
        expect(ranchButton).toBeInTheDocument()
    })

    it('renders the background image', () => {
        render(<Hero />)

        const image = screen.getByAltText('Chalé na natureza')
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', '/images/gallery/IMG_3057.jpg')
    })

    it('has correct links for CTA buttons', () => {
        render(<Hero />)

        const availabilityLink = screen.getByText('Verificar Disponibilidade').closest('a')
        const ranchLink = screen.getByText('Conhecer o Rancho').closest('a')

        expect(availabilityLink).toHaveAttribute('href', '#disponibilidade')
        expect(ranchLink).toHaveAttribute('href', '#galeria')
    })

    it('renders scroll indicator', () => {
        const { container } = render(<Hero />)

        // Check for scroll indicator animation
        const scrollIndicator = container.querySelector('.animate-bounce')
        expect(scrollIndicator).toBeInTheDocument()
    })
})
