import React from 'react'
import PropTypes from 'prop-types'

const Login = ({ handleLogin, username, setUsername, password, setPassword }) => {
  return (
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
               <button className='btn btn-login'>Log in</button>
            </form>
         </section>
      </main>
  )
}

Login.propTypes = {
  handleLogin: PropTypes.func,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func
}

export default Login
