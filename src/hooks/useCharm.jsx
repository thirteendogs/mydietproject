import { useEffect, useRef, useState } from 'react'
import useIngredients from './useIngredients'

const useCharm = () => {
  const [selectedIngredient, setSelectedIngredient] = useState({})
  const [selectOptions, setSelectOptions] = useState([])
  const selectIngredientRef = useRef()

  const { ingredients } = useIngredients()

  useEffect(() => {
    setSelectedIngredient(ingredients[0])
    setSelectOptions(
      ingredients.map(data => (
        {
          value: data.name,
          label: data.name
        }
      ))
    )
  }, [ingredients])

  const ingredientChart = () => {
    const selectedIngredients = selectIngredientRef.current.state.focusedOption.value

    ingredients.map(ingredient => ingredient.name.match(selectedIngredients)
      ? setSelectedIngredient(ingredient)
      : {})
  }
  return {
    selectedIngredient,
    selectOptions,
    selectIngredientRef,
    ingredientChart
  }
}

export default useCharm
