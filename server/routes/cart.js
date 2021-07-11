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

export default cart
