import { render, screen } from '@testing-library/react';
import { Pricing } from '../Pricing';
import '@testing-library/jest-dom';

// Mock analytics utils
jest.mock('@/lib/analytics-utils', () => ({
    trackCTAClick: jest.fn(),
}));

describe('Pricing Component', () => {
    it('renders all pricing cards', () => {
        render(<Pricing />);

        expect(screen.getByText('Finais de Semana')).toBeInTheDocument();
        expect(screen.getByText('Feriados')).toBeInTheDocument();
        expect(screen.getByText('Datas Especiais')).toBeInTheDocument();
    });

    it('displays correct prices', () => {
        render(<Pricing />);

        expect(screen.getByText('R$ 4.500')).toBeInTheDocument();
        expect(screen.getByText('R$ 7.500')).toBeInTheDocument();
        expect(screen.getByText('Sob Consulta')).toBeInTheDocument();
    });

    it('renders check-in/out details correctly', () => {
        render(<Pricing />);

        expect(screen.getByText('Entrada: Sexta às 13h')).toBeInTheDocument();
        // Use getAllByText because it appears in multiple cards
        expect(screen.getAllByText('Saída: Domingo às 17h')).toHaveLength(2);
        expect(screen.getByText('Entrada: Quinta pela manhã')).toBeInTheDocument();
    });

    it('contains call-to-action buttons with whatsapp links', () => {
        render(<Pricing />);

        const buttons = screen.getAllByText('Reservar Agora');
        expect(buttons).toHaveLength(3);

        buttons.forEach(button => {
            const link = button.closest('a');
            expect(link).toHaveAttribute('href');
            expect(link?.getAttribute('href')).toContain('wa.me');
        });
    });
});
