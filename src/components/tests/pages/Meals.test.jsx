import React from 'react'
import { render, screen } from '@testing-library/react'
import Meals from '../../pages/Meals'

describe('Meals component', () => {
  beforeEach(() => {
    render(<Meals />)
  })

  test('Meals to have correct text', () => {
    const title = screen.getAllByText('Meals')

    expect(title).toBeDefined()
  })
})
