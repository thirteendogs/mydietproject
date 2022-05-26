import React from 'react'
import IngredientsPrep from '../globals/IngredientsPrep'
import MealPrep from '../globals/MealPrep'
import Navbar from '../globals/Navbar'
import useIngredients from '../hooks/useIngredients'
import useAddIngredient from '../hooks/useAddIngredient'

const IngredientChoose = () => {
  const { ingredients } = useIngredients()
  const {
    handleAddIngredient,
    ingredientChart,
    quantity,
    quantityRef,
    handleIngredientCuantity,
    selectOptions,
    selectedIngredient,
    meals,
    mealsTotalMacros,
    selectIngredientRef
  } = useAddIngredient({ ingredients })

  return (
    <>
      <Navbar />
      <main className='ingredients'>
        {/* CHOOSE YOUR INGREDIENT SECTION */}
        <IngredientsPrep
        selectIngredientRef={selectIngredientRef}
          handleAddIngredient={handleAddIngredient}
          ingredientChart={ingredientChart}
          quantity={quantity}
          quantityRef={quantityRef}
          handleIngredientCuantity={handleIngredientCuantity}
          selectOptions={selectOptions}
          selectedIngredient={selectedIngredient}
        />
        {/* PLAN YOUR MEAL SECTION */}
        <MealPrep
          meals={meals}
          mealsTotalMacros={mealsTotalMacros}
        />
      </main>
    </>
  )
}

export default IngredientChoose
