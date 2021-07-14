import express from 'express'
import fetch from 'node-fetch'
import { BASE_URL, X_API_KEY } from '../settings'
const cart = express.Router()

cart.get('/getShopingCart/:userId', async (req, res) => {
  const userId = req.params.userId
  const query = `${BASE_URL}/shopingcart?q={"userId": "${userId}"}`
  const result = await fetch(query, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const json = await result.json()
  if (json.length) res.send(json[0].products)
  else res.send({ error: true, type: 'no shoping cart exist' })
})

cart.post('/addItemToCart/:userId/:itemId', async (req, res) => {
  try {
    const userId = req.params.userId
    const itemId = req.params.itemId
    const query = `${BASE_URL}/shopingcart?q={"userId": "${userId}"}`
    const result = await fetch(query, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': X_API_KEY
      }
    })
    const json = await result.json()
    if (json.length) {
      const cartId = json[0]._id
      const cartItems = json[0].products
      const formattedCartItems = cartItems.map(item => ({ _id: item._id }))
      const cartQuery = `${BASE_URL}/shopingcart/${cartId}`
      const cartBody = {
        products: [
          ...formattedCartItems,
          {
            _id: itemId
          }
        ]
      }
      const resultCartPatch = await fetch(cartQuery, {
        method: 'patch',
        headers: {
          'Content-Type': 'application/json',
          'x-apikey': X_API_KEY
        },
        body: JSON.stringify(cartBody)
      })
      const jsonCartPatch = await resultCartPatch.json()
      res.send(jsonCartPatch.products)
    } else {
      const cartQuery = `${BASE_URL}/shopingcart`
      const cartBody = {
        userId,
        products: [
          {
            _id: itemId
          }
        ]
      }
      const resultCartPost = await fetch(cartQuery, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'x-apikey': X_API_KEY
        },
        body: JSON.stringify(cartBody)
      })
      const jsonCartPost = await resultCartPost.json()
      res.send(jsonCartPost.products)
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

cart.post('/removeItemFromCart/:userId/:itemId', async (req, res) => {
  try {
    const userId = req.params.userId
    const itemId = req.params.itemId
    const query = `${BASE_URL}/shopingcart?q={"userId": "${userId}"}`
    const result = await fetch(query, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': X_API_KEY
      }
    })
    const json = await result.json()
    if (json.length) {
      const cartId = json[0]._id
      const cartItems = json[0].products
      const formattedCartItems = cartItems.filter(item => item._id !== itemId && ({ _id: item._id }))
      const cartQuery = `${BASE_URL}/shopingcart/${cartId}`
      const cartBody = {
        products: formattedCartItems
      }
      const resultCartPatch = await fetch(cartQuery, {
        method: 'patch',
        headers: {
          'Content-Type': 'application/json',
          'x-apikey': X_API_KEY
        },
        body: JSON.stringify(cartBody)
      })
      const jsonCartPatch = await resultCartPatch.json()
      res.send(jsonCartPatch.products)
    } else throw new Error('no cart for this user')
  } catch (err) {
    res.status(500).send(err)
  }
})

export default cart
