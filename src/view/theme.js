
import {injectGlobal} from 'styled-components'

const colors = {
  primary: '#0eb1d2',
  accent: '#02182b',
  error: '#d7263d',
  contrast: '#dee5e5'
}

const margins = {
  bottom: '1.5rem'
}

const paddings = {
  quarter: '0.25rem',
  half: '0.5rem',
  base: '1rem',
  double: '2rem'
}

// Reusable definitions for colors, spacings, etc.
export const theme = {
  colors,
  margins,
  paddings
}

// Inject some global styles that are most likely to be coupled to theme variables.
injectGlobal`
  body {
    font-size: 16px;
    font-weight: normal;
    font-family: sans-serif;
    background-color: ${colors.contrast};
  }
`

// Simple helper function, takes in any number of props mapping to properties within the theme
// object and returns the value.
export const getTheme = (...props) => ({theme}) => props.reduce((t, p) => t[p], theme)
