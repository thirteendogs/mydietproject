import React, { useState, useRef, useEffect } from 'react'
import ingredientService from '../../services/ingredients'
// import IngredientInfo from '../globals/IngredientInfo'
import IngredientsPrep from '../globals/IngredientsPrep'
import MealPrep from '../globals/MealPrep'
// import Select from 'react-select'
import { toast } from 'react-toastify'
import Navbar from '../globals/Navbar'

const IngredientChoose = () => {
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState({})
  const [quantity, setQuantity] = useState(100)
  const [meals, setMeals] = useState([])
  const [selectOptions, setSelectOptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [mealsTotalMacros, setMealsTotalMacros] = useState({
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
    calories: 0
  })
  console.log('hola')
  const selectIngredientRef = useRef()
  const quantityRef = useRef()

  useEffect(() => {
    setLoading(true)
    ingredientService
      .getAllIngredients()
      .then(({ data }) => {
        setIngredients(data)
        setSelectedIngredient(data[0])
        setSelectOptions(data.map(data => ({ value: data.name, label: data.name })))
        setLoading(false)
      })
  }, [])
  const ingredientChart = () => {
    const selectedIngredients = selectIngredientRef.current.state.focusedOption.value

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
          loading={loading}
          quantity={quantity}
          quantityRef={quantityRef}
          selectIngredientRef={selectIngredientRef}
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
