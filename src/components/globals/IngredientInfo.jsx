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

         <span className="badge bg-red">Prots: { Number(proteins).toFixed(1) }g</span>
         <span className="badge bg-blue">Carbs: { Number(carbohydrates).toFixed(1) }g</span>
         <span className="badge bg-yellow">Fats: { Number(fats).toFixed(1) }g</span>
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
