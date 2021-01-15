import React from 'react'

export const RequestForm = () => (
  <form>
    <label htmlFor="firstName">First Name</label>
    <input id="firstName" data-testid="firstName" />
    <label htmlFor="lastName">Last Name</label>
    <input id="lastName" data-testid="lastName" />
  </form>
)
