import React from 'react'
import PropTypes from 'prop-types'
import IngredientChart from './IngredientChart'

const IngredientInfo = ({ proteins, fats, carbohydrates }) => {
  return (
   <>
      <div className='d-flex justify-content-center'>
         {
            <IngredientChart
            proteins={proteins}
            carbohydrates={carbohydrates}
            fats={fats}
            />
         }
      </div>
      <div className="d-flex justify-content-center mt-4">
         <span className="badge bg-danger mr-2 p-2 fs-6">Proteins</span>
         <span className="badge bg-info mr-2 p-2 fs-6">Carbohydrates</span>
         <span className="badge bg-warning p-2 fs-6">Fats</span>
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
