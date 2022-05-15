import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/globals/Navbar'
import Footer from './components/globals/Footer'
import Meals from './components/pages/Meals'
import IngredientsList from './components/pages/IngredientsList'
import IngredientChoose from './components/pages/IngredientChoose'
import Login from './components/pages/Login'
import loginService from './services/login'
import mealService from './services/meals'
import { toast, ToastContainer } from 'react-toastify'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.sessionStorage.getItem('loggedDietAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      mealService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })

      window.sessionStorage.setItem(
        'loggedDietAppUser', JSON.stringify(user)
      )
      mealService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      toast.success('Login succeful', { autoClose: 1500, theme: 'colored' })
    } catch (exception) {
      toast.error('Wrong creadentials!', { autoClose: 1500, theme: 'colored' })
    }
  }

  return (
    <>
    {user === null &&
    <Login
      handleLogin={handleLogin}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />}
    {user !== null &&

      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={ <IngredientChoose />}/>
          <Route path="meals" element={<Meals />} />
          <Route path="ingredientsList" element={<IngredientsList />} />
        </Routes>
        <Footer />
      </Router>
    }
    <ToastContainer />
    </>
  )
}

export default App
