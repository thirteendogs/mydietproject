import { useEffect, useState } from 'react'
import ingredientService from '../../services/ingredients'

const useIngredients = () => {
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    if (ingredients.length === 0) {
      ingredientService
        .getAllIngredients()
        .then(({ data }) => {
          setIngredients(data)
        })
    }
  }, [])

  return { ingredients }
}
export default useIngredients
