
import React from 'react'
import {connect} from 'react-redux'

import {routeType} from 'selectors'
import {ROUTE_LOGIN, ROUTE_DASHBOARD} from 'types'

import {Login} from 'view/Login'
import {Dashboard} from 'view/Dashboard'

const routesMap = {
  [ROUTE_LOGIN]: Login,
  [ROUTE_DASHBOARD]: Dashboard
}

const mapStateToProps = state => ({
  route: routeType(state)
})

const Container = ({route}) => {
  const Route = routesMap[route] ? routesMap[route] : routesMap[ROUTE_LOGIN]
  return (<Route />)
}

export const Routes = connect(mapStateToProps)(Container)
