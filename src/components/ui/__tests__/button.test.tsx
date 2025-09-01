import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Button } from '../button'

describe('Button', () => {
    it('renders button with default props', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByRole('button', { name: /click me/i })

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('inline-flex', 'items-center', 'justify-center')
    })

    it('applies variant classes correctly', () => {
        render(<Button variant="destructive">Delete</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-destructive', 'text-white')
    })

    it('applies size classes correctly', () => {
        render(<Button size="lg">Large Button</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('h-10', 'px-6')
    })

    it('renders as Slot when asChild is true', () => {
        render(
            <Button asChild>
                <a href="/test">Link Button</a>
            </Button>
        )
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', '/test')
        expect(link).toHaveAttribute('data-slot', 'button')
    })

    it('applies custom className', () => {
        render(<Button className="custom-class">Button</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('custom-class')
    })

    it('is disabled when disabled prop is passed', () => {
        render(<Button disabled>Disabled</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })

    it('renders button with loading state', () => {
        render(<Button>Loading...</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('opacity-50 cursor-not-allowed')
        expect(button).toBeDisabled()
    })
})