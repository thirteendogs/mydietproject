import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../globals/Footer'

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  test('Footer to have correct text', () => {
    const footerText = screen.getAllByText('Crafted by Thirteendogs 🙃')
    expect(footerText).toBeDefined()
  })
})
