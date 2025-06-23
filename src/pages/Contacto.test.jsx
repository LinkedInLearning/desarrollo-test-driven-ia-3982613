import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contacto from './Contacto';

describe('Contacto', () => {
    it('renders the Contacto component', () => {
        render(<Contacto />);
        expect(screen.getByText('Contacto')).toBeInTheDocument();
    });

    it('renders the submit button', () => {
        render(<Contacto />);
        expect(screen.getByText('Enviar Datos')).toBeInTheDocument();
    });
    
});