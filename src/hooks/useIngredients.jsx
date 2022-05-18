import { useEffect, useRef, useState } from 'react'
import ingredientService from '../services/ingredients'

const useIngredients = () => {
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState({})
  const [selectOptions, setSelectOptions] = useState([])

  const selectIngredientRef = useRef()

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

  return { selectedIngredient, selectOptions, ingredientChart, selectIngredientRef }
}

export default useIngredients
