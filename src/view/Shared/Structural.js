
import React from 'react'
import styled from 'styled-components'

import {H1} from 'view/Shared/Typography'

import {getTheme} from 'view/theme'

// GLOBAL WRAPPER
export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

// HEADER COMPONENTS
const HeaderWrapper = styled.header`
  text-align: center;
  padding-top: ${getTheme('paddings', 'double')};
  padding-bottom: ${getTheme('paddings', 'double')};
`

// HEADER COMPOSITION
export const Header = () => (
  <HeaderWrapper>
    <H1>Formik<strong>Saga</strong></H1>
  </HeaderWrapper>
)

// PRIMARY CONTENT AREA
export const Section = styled.section`
  flex: 1;
  width: 33rem;
  margin: 0 auto;
`
