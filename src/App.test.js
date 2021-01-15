import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders learn react link', () => {
  render(<App />)
  expect(screen.getByText('TDD for Building UIs Demo')).toBeInTheDocument()
})
