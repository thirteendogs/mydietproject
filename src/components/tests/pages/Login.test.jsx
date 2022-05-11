import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from '../../pages/Login'

describe('Login component', () => {
  beforeEach(() => {
    render(<Login />)
  })

  test('Login form to have correct text', () => {
    const username = screen.getAllByText('Username:')
    const password = screen.getAllByText('Password:')
    const button = screen.getAllByText('Log in')

    expect(button).toBeDefined()
    expect(username).toBeDefined()
    expect(password).toBeDefined()
  })
})
