import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import Root from './components/Root'
import * as paths from './constants/paths'
import PrivateRoute from './components/PrivateRoute'

export default () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute >
          <Root name={'K8s'} />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}