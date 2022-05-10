import React from 'react'
import { render, screen } from '@testing-library/react'
import IngredientChoose from '../../pages/IngredientChoose'

describe('IngredientChoose component', () => {
  beforeEach(() => {
    render(<IngredientChoose />)
  })

  test('IngredientChoose to have correct title', () => {
    const title = screen.getAllByText('Select your ingredients')
    expect(title).toBeDefined()
  })

  test('IngredientChoose to have correct labels', () => {
    const ingredient = screen.getAllByText('Ingredient :')
    const quantity = screen.getAllByText('Quantity :')

    expect(ingredient).toBeDefined()
    expect(quantity).toBeDefined()
  })

  test('IngredientChoose to have correct button text', () => {
    const button = screen.getAllByText('Add Ingredient')

    expect(button).toBeDefined()
  })

  test('IngredientChoose to have correct charm title', () => {
    const charmTitle = screen.getAllByText('% of macronutrients')

    expect(charmTitle).toBeDefined()
  })
})
