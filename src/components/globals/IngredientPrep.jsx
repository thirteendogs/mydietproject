import React from 'react'
import IngredientInfo from './IngredientInfo'
import PropTypes from 'prop-types'
import Select from 'react-select'

const IngredientPrep = (
  {
    handleAddIngredient,
    selectOptions,
    selectIngredientRef,
    ingredientChart,
    quantityRef,
    handleIngredientCuantity,
    quantity,
    selectedIngredient
  }) => {
  return (
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
  )
}
IngredientPrep.propTypes = {
  handleAddIngredient: PropTypes.func,
  selectOptions: PropTypes.array,
  selectIngredientRef: PropTypes.string,
  ingredientChart: PropTypes.func,
  quantityRef: PropTypes.string,
  handleIngredientCuantity: PropTypes.func,
  quantity: PropTypes.number,
  selectedIngredient: PropTypes.string

}
export default IngredientPrep
