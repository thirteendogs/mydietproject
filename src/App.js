import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/globals/Navbar'
import Footer from './components/globals/Footer'
import Meals from './components/pages/Meals'
import IngredientsList from './components/pages/IngredientsList'
import IngredientChoose from './components/pages/IngredientChoose'
import loginService from './services/login'
import mealService from './services/meals'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedDietAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      mealService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedDietAppUser', JSON.stringify(user)
      )
      mealService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.error('Wrong credentials')
    }
  }

  const loginForm = () => (
    <main>
       <section>
          <form onSubmit={handleLogin}>
             <label>Username: </label>
             <input
               type="text"
               value={username}
               name="Username"
               onChange={e => setUsername(e.target.value)}
             />
             <label>Password: </label>
             <input
               type="password"
               value={password}
               name="Password"
               onChange={e => setPassword(e.target.value)}
             />
             <button>Log in</button>
          </form>
       </section>
    </main>
  )

  return (
    <>
    {user === null && loginForm()}
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
    </>
  )
}

export default App
