import React from 'react'
import useIngredients from '../../hooks/useIngredients'

import Navbar from '../globals/Navbar'

const IngredientsList = () => {
  const { ingredients } = useIngredients()

  return (
    <>
      <Navbar />
      <main className='ingredientsList'>
        <h2 className='ingredientsList__title'>Ingredients list</h2>
        <section className='ingredientsList__box'>
          <ul>
            {ingredients.map(ingredient => (<li key={ingredient.id}>{ingredient.name}</li>))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default IngredientsList
