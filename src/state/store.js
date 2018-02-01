
import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import {syncResponses} from '@curi/redux'

import {sagas} from 'state/sagas'
import {reducers} from 'state/reducers'
import {router} from 'router'

const sagasMiddleware = createSagaMiddleware()

const composeMiddlewares = applyMiddleware(sagasMiddleware)

// Use Redux DevTools Extension in development.
const composeEnhancers = (middlewares) =>
  typeof window !== 'undefined'
    ? composeWithDevTools(middlewares)
    : compose(middlewares)

export const store = createStore(
  reducers,
  composeEnhancers(composeMiddlewares)
)

// Boot up saga middleware and our routing.
sagasMiddleware.run(sagas)
syncResponses(store, router)
