
import {delay} from 'redux-saga'
import {call, takeLatest} from 'redux-saga/effects'

import {history} from 'router'
import {SUBMIT_LOGIN} from 'types'

// Fake API call with appropriate responses based on inputs.
function * loginAPI (username, password) {
  // Simulate async call.
  yield delay(500)
  if (username !== 'formik') {
    throw new Error('Username not found.')
  }
  if (password !== 'is3asy') {
    throw new Error('Invalid password.')
  }
  return 'fake-API-token'
}

// Function for storing our API token, perhaps in localStorage or Redux state.
function * storeToken (token) {}

// Our SUBMIT_LOGIN action passes along the form values as the payload and form actions as
// meta data. This allows us to not only use the values to do whatever API calls and such
// we need, but also to maintain control flow here in our saga.
function * submitLogin ({payload: values, meta: actions}) {
  const {resetForm, setErrors, setSubmitting} = actions
  try {
    // Connect to our "API" and get an API token for future API calls.
    const response = yield call(loginAPI, values.username, values.password)
    yield call(storeToken, response)
    // Reset the form just to be clean, then send the user to our Dashboard which "requires"
    // authentication.
    yield call(resetForm)
    yield call([history, 'navigate'], 'dashboard')
  } catch (e) {
    // If our API throws an error we will leverage Formik's existing error system to pass it along
    // to the view layer, as well as clearing the loading indicator.
    yield call(setErrors, {authentication: e.message})
    yield call(setSubmitting, false)
  }
}

export function * init () {
  yield takeLatest(SUBMIT_LOGIN, submitLogin)
}
