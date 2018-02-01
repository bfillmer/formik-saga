
import React from 'react'
import {connect} from 'react-redux'

import {routeType} from 'selectors'
import {ROUTE_HOME} from 'types'

import {Home} from 'view/Home'

const routesMap = {
  [ROUTE_HOME]: Home
}

const mapStateToProps = state => ({
  route: routeType(state)
})

const Container = ({route}) => {
  const Route = routesMap[route] ? routesMap[route] : routesMap[ROUTE_HOME]
  return (
    <Route />
  )
}

export const Routes = connect(mapStateToProps)(Container)
