import React, { useState, useEffect } from 'react'
import mealsService from '../../services/meals'

const Meals = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    mealsService
      .getAllmeals()
      .then(({ data }) => {
        setMeals(data)
      })
  }, [])

  return (
    <main className='meals'>
      <h2 className='meals__title'>Meals</h2>
      <section className='meals__box'>
        {meals.map((meal) => (
          <div className='meals__card' key={meal.id}>
            <h3 className='meals__card__title'>Ingredients</h3>
            <article className='meals__card__ingredients'>
              {meal.ingredients.map((ingredient, i) => (
              <p className='meals__card__ingredients__text' key={i}>
                {ingredient}
              </p>
              ))}
            </article>
            <h3 className='meals__card__title'>Macronutrients</h3>
            <article className='meals__card__badges'>
              <div className="badges__group flex-wrap">
                <span className="badge bg-red">Prots: { Number(meal.proteins).toFixed(1) }g</span>
                <span className="badge bg-blue">Carbs: { Number(meal.carbohydrates).toFixed(1) }g</span>
                <span className="badge bg-yellow">Fats: { Number(meal.fats).toFixed(1) }g</span>
                <span className="badge bg-green">Calories: { Number(meal.calories).toFixed(1) }g</span>
              </div>
            </article>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Meals
