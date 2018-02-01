import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store} from 'state/store'
import {App} from 'view/App'

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
