import React from 'react'
import { render, screen } from '@testing-library/react'
import IngredientsList from '../../pages/IngredientsList'
import { BrowserRouter as Route } from 'react-router-dom'

describe('IngredientsList component', () => {
  beforeEach(() => {
    render(<Route><IngredientsList /></Route>)
  })

  test('IngredientsList to have correct text', () => {
    const title = screen.getAllByText('Ingredients list')

    expect(title).toBeDefined()

    setTimeout(() => {
      const ingredientPeas = screen.getAllByText('Peas')
      expect(ingredientPeas).toBeDefined()
    }, 5000)
  })
})
