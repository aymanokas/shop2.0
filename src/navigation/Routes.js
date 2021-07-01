import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../store'
import Home from '../pages/Home'

export default () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={HomePath}>
          <Home />
        </Route>
      </Switch>
    </ConnectedRouter>
  )
}

export const HomePath = '/'
