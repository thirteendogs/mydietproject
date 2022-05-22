import React from 'react'
import useCharm from '../../hooks/useCharm'
import Navbar from '../globals/Navbar'
import MealPrep from '../globals/MealPrep'
import useAddIngredient from '../../hooks/useAddIngredient'
import IngredientPrep from '../globals/IngredientPrep'

const IngredientChoose = () => {
  const {
    selectedIngredient,
    selectOptions,
    ingredientChart,
    selectIngredientRef
  } = useCharm()

  const {
    handleAddIngredient,
    quantityRef,
    handleIngredientCuantity,
    quantity,
    meals,
    mealsTotalMacros
  } = useAddIngredient()

  return (
    <>
      <Navbar />
      <main className='ingredients'>
        {/* CHOOSE YOUR INGREDIENT SECTION */}
        <IngredientPrep
          handleAddIngredient={handleAddIngredient}
          handleIngredientCuantity={handleIngredientCuantity}
          ingredientChart={ingredientChart}
          selectedIngredient={selectedIngredient}
          selectIngredientRef={selectIngredientRef}
          selectOptions={selectOptions}
          quantity={quantity}
          quantityRef={quantityRef}
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
