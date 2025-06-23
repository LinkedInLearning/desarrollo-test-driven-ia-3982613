import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contacto from '../pages/Contacto'

describe('Contacto', () => {
    it('Muestra titular', () => {
        render(<Contacto />)
        expect(screen.getByText('Contacto')).toBeInTheDocument()
    })

    it('muestra botón', ()=>{
        render(<Contacto />)
        expect(screen.getByText('Enviar datos')).toBeInTheDocument()
    } )
}) 
