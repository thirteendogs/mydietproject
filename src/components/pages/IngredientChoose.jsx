import React, { useState, useRef, useEffect } from 'react'
import ingredientService from '../../services/ingredients'
import IngredientInfo from '../globals/IngredientInfo'
import MealPrep from '../globals/MealPrep'
import Select from 'react-select'
import { toast } from 'react-toastify'
import Navbar from '../globals/Navbar'

const IngredientChoose = () => {
  const [ingredients, setIngredients] = useState([])
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

  const selectIngredientRef = useRef()
  const quantityRef = useRef()

  useEffect(() => {
    ingredientService
      .getAllIngredients()
      .then(({ data }) => {
        setIngredients(data)
        setSelectedIngredient(data[0])
        setSelectOptions(data.map(data => ({ value: data.name, label: data.name })))
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
