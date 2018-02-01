
import React from 'react'
import styled, {keyframes} from 'styled-components'

import logo from 'assets/logo.svg'

// HEADER COMPONENTS
const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`

const Wrapper = styled.header`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

// HEADER COMPOSITION
export const Header = ({name}) => (
  <Wrapper>
    <Logo src={logo} alt='logo' />
  </Wrapper>
)
