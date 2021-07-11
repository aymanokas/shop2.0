import express from 'express'
import fetch from 'node-fetch'
import { BASE_URL, X_API_KEY } from '../settings'
const categories = express.Router()

categories.get('/getCategories', async (req, res) => {
  const query = `${BASE_URL}/categories`
  const result = await fetch(query, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const json = await result.json()
  if (json) {
    return res.status(200).json(json)
  } else {
    return res.status(500).json({ error: true })
  }
})

export default categories
