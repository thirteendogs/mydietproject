import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/globals/Navbar'
import Footer from './components/globals/Footer'
import Meals from './components/pages/Meals'
import Guide from './components/pages/Guide'
import IngredientsList from './components/pages/IngredientsList'
import IngredientChoose from './components/pages/IngredientChoose'
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={ <IngredientChoose />}/>
          <Route path="meals" element={<Meals />} />
          <Route path="ingredientsList" element={<IngredientsList />} />
          <Route path="guide" element={<Guide />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
