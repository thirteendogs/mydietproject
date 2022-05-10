import React from 'react'
import PropTypes from 'prop-types'
import IngredientChart from './IngredientChart'

const IngredientInfo = ({ proteins, fats, carbohydrates }) => {
  return (
   <>
      <div className='chart'>
         {
            <IngredientChart
            proteins={proteins}
            carbohydrates={carbohydrates}
            fats={fats}
            />
         }
      </div>
      <div className="badges__group">

         <span className="badge bg-red">Prot: {proteins}g</span>
         <span className="badge bg-blue">Carbs: {carbohydrates}g</span>
         <span className="badge bg-yellow">Fats: {fats}g</span>
      </div>
   </>
  )
}

IngredientInfo.propTypes = {
  proteins: PropTypes.number,
  carbohydrates: PropTypes.number,
  fats: PropTypes.number
}
export default IngredientInfo
