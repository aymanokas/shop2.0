import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../store'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Wishlist from '../pages/Whishlist'

export default () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={HomePath}>
          <Home />
        </Route>
        <Route exact path={ProductPath}>
          <Product />
        </Route>
        <Route exact path={WishlistPath}>
          <Wishlist />
        </Route>
      </Switch>
    </ConnectedRouter>
  )
}

export const HomePath = '/'
export const ProductPath = '/Product'
export const WishlistPath = '/Wishlist'
