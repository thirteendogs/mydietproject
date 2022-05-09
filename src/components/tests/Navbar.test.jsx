import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from '../globals/Navbar'

describe('Navbar component', () => {
  beforeEach(() => {
    render(<Navbar />)
  })

  test('Navbar links to have correct text', () => {
    const mealsLink = screen.getAllByText('MEALS')
    const ingredientsLink = screen.getAllByText('INGREDIENTS')
    const guideLink = screen.getAllByText('GUIDE')

    expect(mealsLink).toBeDefined()
    expect(ingredientsLink).toBeDefined()
    expect(guideLink).toBeDefined()
  })

  test('Navbar icon on mobile version change when click', () => {
    const hamburger = screen.getByTitle('hamburger')

    const icon = hamburger.childNodes[0]

    expect(icon).toHaveAttribute('viewBox', '0 0 448 512')

    fireEvent.click(hamburger)

    const iconAfterClick = hamburger.childNodes[0]

    expect(iconAfterClick).toHaveAttribute('viewBox', '0 0 352 512')
  })
})
