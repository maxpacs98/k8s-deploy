import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
import * as paths from './constants/paths'
import PrivateRoute from './components/PrivateRoute'
import Auth from './pages/Auth'
import Home from './pages/Home'

export default () => {
  return (
    <Router>
      <Switch>
        {/*<PrivateRoute>*/}
        {/*  <Auth/>*/}
        {/*</PrivateRoute>*/}
        <Route path={paths.ROOT_PATH}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}