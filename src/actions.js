
import {createAction} from 'redux-actions'

import {SUBMIT_LOGIN} from 'types'

// LOGIN
// Attach our Formik actions as meta-data to our action.
export const submitLogin = createAction(
  SUBMIT_LOGIN,
  ({values}) => values,
  ({actions}) => actions
)
