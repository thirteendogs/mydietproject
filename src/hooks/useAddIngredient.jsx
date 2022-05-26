import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import useCharm from './useCharm'

const useAddIngredient = () => {
  const { selectedIngredient } = useCharm()

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

  return {
    quantity,
    meals,
    mealsTotalMacros,
    quantityRef,
    handleIngredientCuantity,
    handleAddIngredient
  }
}

export default useAddIngredient
