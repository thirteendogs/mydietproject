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

         <span className="badge bg-red">Proteins</span>
         <span className="badge bg-blue">Carbohydrates</span>
         <span className="badge bg-yellow">Fats</span>
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
