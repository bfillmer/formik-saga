
import Browser from '@hickory/browser'
import curi from '@curi/core'

import {ROUTE_DASHBOARD, ROUTE_LOGIN} from 'types'

export const history = Browser()

const routes = [
  {
    name: ROUTE_DASHBOARD,
    path: 'dashboard'
  },
  {
    name: ROUTE_LOGIN,
    path: '(.*)'
  }
]

export const router = curi(history, routes)
