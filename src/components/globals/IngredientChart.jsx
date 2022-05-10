import React from 'react'
import PropTypes from 'prop-types'
import { PieChart, Pie, Cell } from 'recharts'

const IngredientChart = ({ proteins, carbohydrates, fats }) => {
  const totalGrams = proteins + carbohydrates + fats

  const prot = Number((proteins * 100 / totalGrams).toFixed(0))
  const carb = Number((carbohydrates * 100 / totalGrams).toFixed(0))
  const fat = Number((fats * 100 / totalGrams).toFixed(0))

  const data = [
    { name: 'Proteins', value: prot },
    { name: 'Carbohydrates', value: carb },
    { name: 'Fats', value: fat }
  ]

  const COLORS = ['#DC3544', '#2CA2B8', '#FCC108']

  return (
     <PieChart width={400} height={250}>
      <Pie
        data={data}
        labelLine={true}
        label="name"
        outerRadius={80}
        fill="#050418"
        dataKey="value"
        cx="50%" cy="50%"
        fontSize="1.5rem"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}
IngredientChart.propTypes = {
  proteins: PropTypes.number,
  carbohydrates: PropTypes.number,
  fats: PropTypes.number
}

export default IngredientChart
