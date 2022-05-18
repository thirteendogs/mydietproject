import React, { useState, useEffect } from 'react'
import ingredientService from '../../services/ingredients'
import Navbar from '../globals/Navbar'

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    ingredientService
      .getAllIngredients()
      .then(({ data }) => {
        setIngredients(data)
      })
  }, [])

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
