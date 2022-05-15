import React from 'react'
import PropTypes from 'prop-types'
import IngredientInfo from './IngredientInfo'
import mealsServices from '../../services/meals'
import { toast } from 'react-toastify'

const MealPrep = ({ meals, mealsTotalMacros }) => {
  const handleAddMeal = () => {
    const ingredients = meals.map(meal => meal.name)
    const newMeal = {
      ingredients,
      proteins: mealsTotalMacros.proteins,
      carbohydrates: mealsTotalMacros.carbohydrates,
      fats: mealsTotalMacros.fats,
      calories: mealsTotalMacros.calories
    }
    mealsServices
      .addMeal(newMeal)
    toast.success('Meal added!', { autoClose: 1500, theme: 'dark' })
  }
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
                        <td>{Number(meal.quantity).toFixed(1)}</td>
                        <td>{Number(meal.proteins).toFixed(1)}</td>
                        <td>{Number(meal.carbohydrates).toFixed(1)}</td>
                        <td>{Number(meal.fats).toFixed(1)}</td>
                        <td>{Number(meal.calories).toFixed(1)}</td>
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

                <button id='add__meal' className='btn' onClick={handleAddMeal}>Add Meal</button>

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
