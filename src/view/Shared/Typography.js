
import styled from 'styled-components'

import {getTheme} from 'view/theme'

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: -0.05em;
  color: ${getTheme('colors', 'primary')};
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${getTheme('colors', 'accent')};
`

export const P = styled.p`
  font-size: ${({small}) => small ? '0.8rem' : '1rem'};
  line-height: 1.5em;
  margin-bottom: ${getTheme('margins', 'bottom')};
`
