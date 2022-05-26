import React from 'react'
import { render, screen } from '@testing-library/react'
import Meals from '../../pages/Meals'
import { BrowserRouter as Route } from 'react-router-dom'
describe('Meals component', () => {
  beforeEach(() => {
    render(<Route><Meals /></Route>)
  })

  test('Meals to have correct text', () => {
    const title = screen.getAllByText('Meals')

    expect(title).toBeDefined()
  })
})
