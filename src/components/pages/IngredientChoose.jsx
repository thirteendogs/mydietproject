import React, { useState, useRef, useEffect } from 'react'
import ingredientService from '../../services/ingredients'
import IngredientInfo from '../globals/IngredientInfo'

const IngredientChoose = () => {
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState({})
  const [quantity, setQuantity] = useState(100)
  //   const [meals, setMeals] = useState([])
  //   const [mealsTotalMacros, setMealsTotalMacros] = useState({
  //     proteins: 0,
  //     carbohydrates: 0,
  //     fats: 0,
  //     calories: 0
  //   })

  const selectIngredientRef = useRef()
  const quantityRef = useRef()

  useEffect(() => {
    ingredientService
      .getAllIngredients()
      .then(({ data }) => {
        setIngredients(data)
        setSelectedIngredient(data[0])
      })
  }, [])

  const ingredientChart = () => {
    const selectedIngredients = selectIngredientRef.current.value

    ingredients.map(ingredient => ingredient.name.match(selectedIngredients)
      ? setSelectedIngredient(ingredient)
      : {})
  }

  const handleIngredientCuantity = (e) => {
    const quantityValue = e.target.value
    setQuantity(quantityValue)
  }

  const handleAddIngredient = (e) => {
    //  e.preventDefault()

    //  const maxIngredients = 5

    //  const newMeal = {
    //    name: selectedIngredient.name,
    //    calories: selectedIngredient.calories * quantity / 100,
    //    proteins: selectedIngredient.proteins * quantity / 100,
    //    carbohydrates: selectedIngredient.carbohydrates * quantity / 100,
    //    fats: selectedIngredient.fats * quantity / 100,
    //    quantity
    //  }

    //  if (meals.length === maxIngredients) {
    //    console.log('Can not add more ingredients')
    //  } else {
    //    setMeals([...meals, newMeal])
    //    setMealsTotalMacros(
    //      {
    //        proteins: mealsTotalMacros.proteins + newMeal.proteins,
    //        carbohydrates: mealsTotalMacros.carbohydrates + newMeal.carbohydrates,
    //        fats: mealsTotalMacros.fats + newMeal.fats,
    //        calories: mealsTotalMacros.calories + newMeal.calories
    //      }
    //    )
    //  }
  }

  return (

   <main className='ingredientsChoose'>
     {/* CHOOSE YOUR INGREDIENT SECTION */}
      <section >
         <article >
            <h2 >Choose your ingredient</h2>
               <form onSubmit={handleAddIngredient} style={{ height: '18rem' }}>
                  <label htmlFor="igredient">Ingredient List</label>
                     <select style={{ maxHeight: '2.5rem' }}name='select'size={1} ref={selectIngredientRef} onChange={ingredientChart}>
                        {ingredients.map(ingredient => { return <option key={ingredient.id} >{ingredient.name}</option> })}
                     </select>
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" ref={quantityRef} onChange={handleIngredientCuantity} value={quantity}></input>
                  <button >Add Ingredient</button>
               </form>
               <div className='bottom'>

               <h3>% of macronutrients</h3>
                <IngredientInfo
                  proteins={selectedIngredient.proteins}
                  carbohydrates={selectedIngredient.carbohydrates}
                  fats={selectedIngredient.fats}
                />
               </div>
            </article>
      </section>
      {/* MEAL INFO */}
      {/* <section className="card text-white bg-primary mb-3 border-light card-max-width ml-2">
         <article className="card-body">
            <h2 className="text-center card-title mb-4 fs-1">Meal info</h2>
            <div style={{ height: '20rem' }}>
            <table className="table text-light mb-2">
              <thead className='text-light'>
                <tr className='text-light fs-5'>
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
            <div className='bottom'>

               {mealsTotalMacros.calories !== 0
                 ? <>
               <h3 className="text-center fs-4">% of macronutrients</h3>

              <IngredientInfo
                proteins={mealsTotalMacros.proteins}
                carbohydrates={mealsTotalMacros.carbohydrates}
                fats={mealsTotalMacros.fats}
              />
              </>
                 : null
               }
              </div>
         </article>
      </section> */}
   </main>
  )
}

export default IngredientChoose
