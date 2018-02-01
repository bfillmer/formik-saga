
import {fork} from 'redux-saga/effects'

import {routes} from 'state/sagas/routes'

export function * sagas () {
  yield fork(routes)
}
