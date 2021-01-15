import React, { useState } from 'react'
import './RequestForm.css'

export const RequestForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = e => {
    const { name, value } = e.target

    switch (name) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'email':
        setEmail(value)
        break
      default:
        return
    }
  }

  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    setFirstNameError(firstName ? '' : 'First Name field is required')
    setLastNameError(lastName ? '' : 'Last Name field is required')
    setEmailError(email ? '' : 'Email field is required')
  }

  return (
    <form className="requestForm" onSubmit={handleSubmit}>
      <div className="formGroup">
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          id="firstName"
          data-testid="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      {firstNameError && <p>{firstNameError}</p>}
      <div className="formGroup">
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          id="lastName"
          data-testid="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      {lastNameError && <p>{lastNameError}</p>}
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          data-testid="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      {emailError && <p>{emailError}</p>}
      <button type="submit">Request Demo</button>
    </form>
  )
}
