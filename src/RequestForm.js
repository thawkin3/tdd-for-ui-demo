import React from 'react'
import './RequestForm.css'

export const RequestForm = () => (
  <form>
    <div className="formGroup">
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" data-testid="firstName" />
    </div>
    <div className="formGroup">
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" data-testid="lastName" />
    </div>
    <div className="formGroup">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" data-testid="email" />
    </div>
  </form>
)
