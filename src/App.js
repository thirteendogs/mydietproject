import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Meals from './components/pages/Meals'
import IngredientsList from './components/pages/IngredientsList'
import IngredientChoose from './components/pages/IngredientChoose'
import Login from './components/pages/Login'
import { ToastContainer } from 'react-toastify'
import Footer from './components/globals/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='ingredientChoose' element={<IngredientChoose />} />
          <Route path="meals" element={<Meals />} />
          <Route path="ingredientsList" element={<IngredientsList />} />
        </Routes>
      </Router>
      <ToastContainer />
      <Footer/>
    </>
  )
}

export default App
