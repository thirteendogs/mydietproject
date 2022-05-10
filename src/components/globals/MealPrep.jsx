import React from 'react'
import PropTypes from 'prop-types'
import IngredientInfo from './IngredientInfo'

const MealPrep = ({ meals, mealsTotalMacros }) => {
  return (
      <section className='mealPrep card'>
            <h2 className='mealPrep__title'>Plan your meal</h2>
            <article className="mealPrep__wrapper">
              <div className='mealPrep__wrapper__table'>
                <table className='table'>
                  <thead className=''>
                    <tr className=''>
                      <th scope="col">Name</th>
                      <th scope="col">gr</th>
                      <th scope="col">Prot</th>
                      <th scope="col">Carbs</th>
                      <th scope="col">Fats</th>
                      <th scope="col">Kcal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {meals.map((meal, i) => (
                      <tr key={i}>
                        <th scope="row">{meal.name}</th>
                        <td>{meal.quantity}</td>
                        <td>{meal.proteins}</td>
                        <td>{meal.carbohydrates}</td>
                        <td>{meal.fats}</td>
                        <td>{meal.calories}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                  <tr>
                    <td>Total</td>
                    <td></td>
                    <td>{Number(mealsTotalMacros.proteins).toFixed(1)}</td>
                    <td>{Number(mealsTotalMacros.carbohydrates).toFixed(1)}</td>
                    <td>{Number(mealsTotalMacros.fats).toFixed(1)}</td>
                    <td>{Number(mealsTotalMacros.calories).toFixed(1)}</td>
                  </tr>
                </tfoot>
                </table>
              </div>

              <div className='mealPrep__charm'>
                <h3 className='mealPrep__charm__title'>% of macronutrients</h3>

                <IngredientInfo
                  proteins={mealsTotalMacros.proteins}
                  carbohydrates={mealsTotalMacros.carbohydrates}
                  fats={mealsTotalMacros.fats}
                />

                </div>
            </article>
      </section>
  )
}

MealPrep.propTypes = {
  meals: PropTypes.array,
  mealsTotalMacros: PropTypes.object
}

export default MealPrep
