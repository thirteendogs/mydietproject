import React, { useState, useRef, useEffect } from 'react'
import IngredientsPrep from '../globals/IngredientsPrep'
import MealPrep from '../globals/MealPrep'
import { toast } from 'react-toastify'
import Navbar from '../globals/Navbar'
import useIngredients from '../hooks/useIngredients'

const IngredientChoose = () => {
  const [selectedIngredient, setSelectedIngredient] = useState({})
  const [quantity, setQuantity] = useState(100)
  const [meals, setMeals] = useState([])
  const [selectOptions, setSelectOptions] = useState([])
  const [mealsTotalMacros, setMealsTotalMacros] = useState({
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
    calories: 0
  })

  const { ingredients } = useIngredients()

  const quantityRef = useRef()

  useEffect(() => {
    if (ingredients.length !== 0) {
      setSelectedIngredient(ingredients[0])
      setSelectOptions(ingredients.map(ingredient => ({ value: ingredient.name, label: ingredient.name })))
    }
  }, [ingredients])

  const ingredientChart = (ref) => {
    const selectedIngredients = ref.current.state.focusedOption.value

    ingredients.map(ingredient => ingredient.name.match(selectedIngredients)
      ? setSelectedIngredient(ingredient)
      : {})
  }

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
        <IngredientsPrep
          handleAddIngredient={handleAddIngredient}
          ingredientChart={ingredientChart}
          quantity={quantity}
          quantityRef={quantityRef}
          handleIngredientCuantity={handleIngredientCuantity}
          selectOptions={selectOptions}
          selectedIngredient={selectedIngredient}
        />
        {/* PLAN YOUR MEAL SECTION */}
        <MealPrep meals={meals} mealsTotalMacros={mealsTotalMacros} />
      </main>
    </>
  )
}

export default IngredientChoose
