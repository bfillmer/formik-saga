
import {LOCATION_CHANGE} from '@curi/redux'
import {cancel, fork, take, takeEvery} from 'redux-saga/effects'

import {ROUTE_HOME} from 'types'

// Route Sagas
import {init as initHome} from 'state/sagas/home'

// Routes that require side effects on load are mapped here, [type]: saga.
const routesMap = {
  [ROUTE_HOME]: initHome
}

// Run the saga for a given route if one exists, then watch for the next location change
// and cancel the previously running saga.
function * handleLocationChange ({response}) {
  if (response.name && routesMap[response.name]) {
    const routeSaga = yield fork(routesMap[response.name])
    yield take(LOCATION_CHANGE)
    yield cancel(routeSaga)
  }
}

// Watch for all actions dispatched that have an action type in our saga routesMap.
export function * routes () {
  yield takeEvery(LOCATION_CHANGE, handleLocationChange)
}
