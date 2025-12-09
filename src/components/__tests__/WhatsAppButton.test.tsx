import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { trackWhatsAppClick } from '@/lib/analytics-utils'
import '@testing-library/jest-dom'

// Mock the analytics utils
jest.mock('@/lib/analytics-utils', () => ({
    trackWhatsAppClick: jest.fn(),
}))

// Mock timers for the visibility delay
jest.useFakeTimers()

describe('WhatsAppButton Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    afterEach(() => {
        jest.clearAllTimers()
    })

    it('renders the WhatsApp button', () => {
        render(<WhatsAppButton />)

        const button = screen.getByRole('link', { name: /Contatar via WhatsApp/i })
        expect(button).toBeInTheDocument()
    })

    it('starts hidden and becomes visible after delay', () => {
        const { container } = render(<WhatsAppButton />)

        const button = screen.getByRole('link', { name: /Contatar via WhatsApp/i })

        // Initially should have opacity-0 class
        expect(button).toHaveClass('opacity-0')

        // Fast-forward time by 2 seconds
        jest.advanceTimersByTime(2000)

        // Wait for state update
        waitFor(() => {
            expect(button).toHaveClass('opacity-100')
        })
    })

    it('has correct WhatsApp link with phone number and message', () => {
        render(<WhatsAppButton />)

        const button = screen.getByRole('link', { name: /Contatar via WhatsApp/i })
        const href = button.getAttribute('href')

        expect(href).toContain('https://wa.me/5516981190106')
        expect(href).toContain('text=')
        expect(href).toContain('chalesdoriogrande.com.br')
    })

    it('opens in new tab with correct attributes', () => {
        render(<WhatsAppButton />)

        const button = screen.getByRole('link', { name: /Contatar via WhatsApp/i })

        expect(button).toHaveAttribute('target', '_blank')
        expect(button).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('calls trackWhatsAppClick when clicked', () => {
        render(<WhatsAppButton />)

        const button = screen.getByRole('link', { name: /Contatar via WhatsApp/i })
        fireEvent.click(button)

        expect(trackWhatsAppClick).toHaveBeenCalledWith('floating_button')
        expect(trackWhatsAppClick).toHaveBeenCalledTimes(1)
    })

    it('displays text on desktop screens', () => {
        render(<WhatsAppButton />)

        const text = screen.getByText('Orçamento Rápido')
        expect(text).toBeInTheDocument()
        expect(text).toHaveClass('hidden', 'md:inline')
    })

    it('has correct styling classes', () => {
        render(<WhatsAppButton />)

        const button = screen.getByRole('link', { name: /Contatar via WhatsApp/i })

        expect(button).toHaveClass('fixed', 'bottom-6', 'right-6', 'z-50')
        expect(button).toHaveClass('bg-[#25D366]')
    })
})
