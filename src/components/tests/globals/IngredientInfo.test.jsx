import React from 'react'
import { render, screen } from '@testing-library/react'
import IngredientInfo from '../../globals/IngredientInfo'

describe('IngredientInfo component', () => {
  const ingredient = {
    proteins: 10,
    carbohydrates: 10,
    fats: 10
  }

  beforeEach(() => {
    render(<IngredientInfo
               proteins={ingredient.proteins}
               carbohydrates={ingredient.carbohydrates}
               fats={ingredient.fats}
            />)
  })

  test('IngredientInfo to have correct text', () => {
    setTimeout(() => {
      const proteinsText = screen.getAllByText('10')
      const carbohydratesText = screen.getAllByText('10')
      const fatsText = screen.getAllByText('10')

      expect(proteinsText).toBeDefined()
      expect(carbohydratesText).toBeDefined()
      expect(fatsText).toBeDefined()
    }, 5000)
  })
})
