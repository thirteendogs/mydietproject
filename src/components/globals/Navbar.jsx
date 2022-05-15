import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { GiHamburger } from 'react-icons/gi'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [show, setShow] = useState(true)

  let prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      setShow(true)
    } else {
      setShow(false)
    }
    prevScrollpos = currentScrollPos
  }

  const handleNavToggle = () => {
    setClick(!click)
  }

  const handleLogOut = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  return (
    <header id='home-page'>
      <nav aria-label='Main navigation' className='navbar'>

        <div className={`navbar__container ${show ? 'visible' : 'notvisible'}`}>

          <Link to='/' className='navbar__logo'>
            <GiHamburger />
          </Link>

          <button title='hamburger' className='navbar__menu__icon' onClick={handleNavToggle}>
            {click ? <FaTimes /> : <FaBars />}
          </button>

          <ul className='navbar__menu' data-visible={click ? 'true' : 'false'}>
            <li className='navbar__menu__item'>
              <Link aria-label='meals' to='/meals' className='navbar__menu__link'>MEALS</Link>
            </li>
            <li className='navbar__menu__item'>
              <Link aria-label='ingredients' to='/ingredientsList' className='navbar__menu__link'>INGREDIENTS</Link>
            </li>
            <li className='navbar__menu__item'>
              <button className='btn-log-out' onClick={handleLogOut}>Log out</button>
            </li>
          </ul>

        </div>

      </nav>
    </header>
  )
}

export default Navbar
