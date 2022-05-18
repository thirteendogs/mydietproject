import React, { useState, useRef } from 'react'
import Navbar from '../globals/Navbar'
import IngredientInfo from '../globals/IngredientInfo'
import MealPrep from '../globals/MealPrep'
import Select from 'react-select'
import { toast } from 'react-toastify'
import useIngredients from '../../hooks/useIngredients'

const IngredientChoose = () => {
  const { selectedIngredient, selectOptions, ingredientChart, selectIngredientRef } = useIngredients()

  const [quantity, setQuantity] = useState(100)
  const [meals, setMeals] = useState([])
  const [mealsTotalMacros, setMealsTotalMacros] = useState({
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
    calories: 0
  })

  const quantityRef = useRef()

  const handleIngredientCuantity = (e) => {
    const quantityValue = e.target.value
    setQuantity(quantityValue)
  }

  const handleAddIngredient = (e) => {
    e.preventDefault()

    const maxIngredients = 10

    const newMeal = {
      name: selectedIngredient.name,
      calories: selectedIngredient.calories * quantity / 100,
      proteins: selectedIngredient.proteins * quantity / 100,
      carbohydrates: selectedIngredient.carbohydrates * quantity / 100,
      fats: selectedIngredient.fats * quantity / 100,
      quantity
    }

    if (meals.length === maxIngredients) {
      toast.error('Can not add more ingredients', { autoClose: 1500, theme: 'dark' })
    } else {
      setMeals([...meals, newMeal])
      setMealsTotalMacros(
        {
          proteins: mealsTotalMacros.proteins + newMeal.proteins,
          carbohydrates: mealsTotalMacros.carbohydrates + newMeal.carbohydrates,
          fats: mealsTotalMacros.fats + newMeal.fats,
          calories: mealsTotalMacros.calories + newMeal.calories
        }
      )
      toast.success('Ingredient added', { autoClose: 1500, theme: 'dark' })
    }
  }

  return (
    <>
      <Navbar />
      <main className='ingredients'>
        {/* CHOOSE YOUR INGREDIENT SECTION */}
        <section className='ingredientsChoose card'>
          <h2 className='ingredientsChoose__title'>Select your ingredients</h2>

          <form className='ingredientsChoose__form' onSubmit={handleAddIngredient}>
            <label className='ingredientsChoose__form__label' htmlFor="igredient">Ingredient :</label>
            <Select
              className='mb-1 dark-text'
              options={selectOptions}
              ref={selectIngredientRef}
              onChange={ingredientChart}
              maxMenuHeight={100}
              defaultValue={selectOptions[0]}
            />
            <label className='ingredientsChoose__form__label' htmlFor="quantity">Quantity :</label>
            <input name='quantity' className='input' type="number" ref={quantityRef} onChange={handleIngredientCuantity} value={quantity}></input>
            <button id='add__ingredient' className='btn'>Add Ingredient</button>
          </form>

          <div className='ingredientsChoose__charm'>
            <h3 className='ingredientsChoose__charm__title'>% of macronutrients</h3>
            <IngredientInfo
              proteins={selectedIngredient.proteins}
              carbohydrates={selectedIngredient.carbohydrates}
              fats={selectedIngredient.fats}
            />
          </div>
        </section>
        {/* PLAN YOUR MEAL SECTION */}
        <MealPrep meals={meals} mealsTotalMacros={mealsTotalMacros} />
      </main>
    </>
  )
}

export default IngredientChoose
