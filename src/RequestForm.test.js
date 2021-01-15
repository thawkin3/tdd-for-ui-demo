import React from 'react'
import { render, screen } from '@testing-library/react'
import { RequestForm } from './RequestForm'

describe('RequestForm', () => {
  it('renders without crashing', () => {
    expect(() => render(<RequestForm />)).not.toThrow()
  })

  it('renders a first name text input', () => {
    render(<RequestForm />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByTestId('firstName')).toBeInTheDocument()
  })

  it('renders a last name text input', () => {
    render(<RequestForm />)
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByTestId('lastName')).toBeInTheDocument()
  })
})
