import React, { useState, useRef, useEffect } from 'react'
import ingredientService from '../../services/ingredients'
import IngredientInfo from '../globals/IngredientInfo'

const IngredientChoose = () => {
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState({})
  const [quantity, setQuantity] = useState(100)
  const [meals, setMeals] = useState([])
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
      })
  }, [])

  const ingredientChart = () => {
    const selectedIngredients = selectIngredientRef.current.value

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

    const maxIngredients = 5

    const newMeal = {
      name: selectedIngredient.name,
      calories: selectedIngredient.calories * quantity / 100,
      proteins: selectedIngredient.proteins * quantity / 100,
      carbohydrates: selectedIngredient.carbohydrates * quantity / 100,
      fats: selectedIngredient.fats * quantity / 100,
      quantity
    }

    if (meals.length === maxIngredients) {
      console.log('Can not add more ingredients')
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
    }
  }

  return (

   <main className='ingredients'>
     {/* CHOOSE YOUR INGREDIENT SECTION */}
      <section className='ingredientsChoose card'>
            <h2 className='ingredientsChoose__title'>Choose your ingredient</h2>

               <form className='ingredientsChoose__form'onSubmit={handleAddIngredient}>
                  <label className='ingredientsChoose__form__label' htmlFor="igredient">Ingredient :</label>
                     <select className='input' name='select'size={1} ref={selectIngredientRef} onChange={ingredientChart}>
                        {ingredients.map(ingredient => { return <option key={ingredient.id} >{ingredient.name}</option> })}
                     </select>
                  <label className='ingredientsChoose__form__label' htmlFor="quantity">Quantity :</label>
                  <input className='input' type="number" ref={quantityRef} onChange={handleIngredientCuantity} value={quantity}></input>
                  <button className='btn'>Add Ingredient</button>
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

   </main>
  )
}

export default IngredientChoose
