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
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Catalog from '../pages/Catalog'
import Contact from '../pages/Contact'
import Login from '../pages/Login'

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
        <Route exact path={CartPath}>
          <Cart />
        </Route>
        <Route exact path={CheckoutPath}>
          <Checkout />
        </Route>
        <Route exact path={CatalogPath}>
          <Catalog />
        </Route>
        <Route exact path={ContactPath}>
          <Contact />
        </Route>
        <Route exact path={LoginPath}>
          <Login />
        </Route>
      </Switch>
    </ConnectedRouter>
  )
}

export const HomePath = '/'
export const ProductPath = '/Product'
export const WishlistPath = '/Wishlist'
export const CartPath = '/Cart'
export const CheckoutPath = '/Checkout'
export const CatalogPath = '/Catalog'
export const ContactPath = '/Contact'
export const LoginPath = '/Login'
