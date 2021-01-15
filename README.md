# TDD for Building UIs Demo

This project is used in a presentation to show how we can use test-driven development to build user interfaces. It's not as hard as you may think!

## Running Locally

1. `yarn install`
2. `yarn start`

## NPM Scripts

- `build`: Builds the production app
- `eject`: Ejects from `react-scripts`
- `format`: Formats the code using Prettier
- `format:watch`: Formats the code using Prettier in watch mode
- `start`: Starts the app for running locally in development mode
- `test`: Runs the unit tests with Jest and React Testing Library

## Product Requirements

Your task is to create a form that allows interested users to request a demo of our product. See the mocks for how this should look.

The basic requirements are:
1. The form displays three inputs for first name, last name, and email address
2. The form displays a submit button
3. If any of the form inputs are left blank or filled out incorrectly, an error message should display
4. When the form is successfully submitted, the form should disappear and be replaced with a confirmation message

## Presentation Steps

1. Create a `RequestForm.test.js` file
2. Write a test that renders the form (fails)
3. Create a `RequestForm.js` file and have the component render an empty `form` element (passes)
4. Write a test that looks for a first name input (fails)
5. Render a first name input and label (passes)
6. Write a test that looks for a last name input (fails)
7. Render a last name input and label (passes)
8. Refactor your code to render the form inputs in a column
