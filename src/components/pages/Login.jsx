import React, { createContext, useEffect, useState } from 'react'
import loginService from '../../services/login'
import mealService from '../../services/meals'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'

export const UserContext = createContext()
const Login = () => {
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
     {user && (
        <Navigate to='ingredientChoose' replace={true}/>
     )}
      <main className='login'>

         <h1 className='login__title'>my diet app</h1>
         <section className='login__box'>
            <form className='login__form' onSubmit={handleLogin}>
               <label className='login__form__label'>Username: </label>
               <input
                  className='login__form__input input'
                  type="text"
                  value={username}
                  name="Username"
                  onChange={e => setUsername(e.target.value)}
               />
               <label className='login__form__label'>Password: </label>
               <input
                  className='login__form__input input'
                  type="password"
                  value={password}
                  name="Password"
                  onChange={e => setPassword(e.target.value)}
               />
               <button id='login-button'className='btn btn-login'>Log in</button>
            </form>

         </section>
      </main>
   </>
  )
}
export default Login
