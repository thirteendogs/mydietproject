import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import IngredientsList from '../pages/IngredientsList'

describe('IngredientsList component', () => {
  beforeEach(() => {
    render(<IngredientsList />)
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
