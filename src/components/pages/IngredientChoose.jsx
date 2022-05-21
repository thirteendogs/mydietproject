import React from 'react'
import useCharm from '../../hooks/useCharm'
import Navbar from '../globals/Navbar'
import Select from 'react-select'
import IngredientInfo from '../globals/IngredientInfo'
import MealPrep from '../globals/MealPrep'
import useAddIngredient from '../../hooks/useAddIngredient'

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
            {!selectedIngredient && <p>Loading...</p>}
            {selectedIngredient &&
               <IngredientInfo
                proteins={selectedIngredient.proteins}
                carbohydrates={selectedIngredient.carbohydrates}
                fats={selectedIngredient.fats}
               />
            }
          </div>
        </section>
        {/* PLAN YOUR MEAL SECTION */}
        <MealPrep meals={meals} mealsTotalMacros={mealsTotalMacros} />
      </main>
    </>
  )
}

export default IngredientChoose
