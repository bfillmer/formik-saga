
import React, {Component} from 'react'
import {ThemeProvider} from 'styled-components'

import {Wrapper, Header} from 'view/Shared/Structural'
import {Routes} from 'view/Routes'

import {theme} from 'view/theme'

// Basic error boundary (https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)
export class App extends Component {
  componentDidCatch (error, info) {
    console.error('React Error', error, info)
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Routes />
        </Wrapper>
      </ThemeProvider>
    )
  }
}
