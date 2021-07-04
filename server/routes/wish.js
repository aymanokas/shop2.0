import express from 'express'
import fetch from 'node-fetch'
import { BASE_URL, X_API_KEY } from '../settings'
const wish = express.Router()

wish.get('/:userId', async (req, res) => {
  const { userId } = req.params
  const getWishListQuery = `${BASE_URL}/wishlist?q={"userId": "${userId}"}`
  const resultWish = await fetch(getWishListQuery, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const jsonWishList = await resultWish.json()
  if (jsonWishList.length) {
    return res.status(200).json({ success: true, data: jsonWishList[0] })
  } else {
    return res.status(404).json({ error: true, exist: false })
  }
})

wish.post('/:userId/:productId', async (req, res) => {
  const { userId, productId } = req.params
  const getWishListQuery = `${BASE_URL}/wishlist?q={"userId": "${userId}"}`
  const resultWish = await fetch(getWishListQuery, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const jsonWishList = await resultWish.json()
  if (!jsonWishList.length) {
    const body = {
      userId,
      products: [
        { _id: productId }
      ]
    }
    const createWishListQuery = `${BASE_URL}/wishlist`
    const result = await fetch(createWishListQuery, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': X_API_KEY
      },
      body: JSON.stringify(body)
    })
    const json = await result.json()
    if (json._id) {
      return res.status(200).json({ success: true, data: json })
    } else {
      return res.status(500).json({ error: true })
    }
  } else {
    const updateWishListQuery = `${BASE_URL}/wishlist/${jsonWishList[0]._id}`
    const body = {
      products: [
        { _id: productId }
      ]
    }
    const result = await fetch(updateWishListQuery, {
      method: 'patch',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': X_API_KEY
      },
      body: JSON.stringify(body)
    })
    const json = await result.json()
    if (json._id) {
      return res.status(200).json({ success: true, data: json })
    } else {
      return res.status(500).json({ error: true })
    }
  }
})

wish.delete('/:userId/:productId', async (req, res) => {
  const { userId, productId } = req.params
  const getWishListQuery = `${BASE_URL}/wishlist?q={"userId": "${userId}"}`
  const resultWish = await fetch(getWishListQuery, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const jsonWishList = await resultWish.json()
  if (jsonWishList.length) {
    const products = jsonWishList[0].products.filter(item => item._id !== productId)
    const body = {
      products
    }
    const updateWishListQuery = `${BASE_URL}/wishlist/${jsonWishList[0]._id}`
    const result = await fetch(updateWishListQuery, {
      method: 'patch',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': X_API_KEY
      },
      body: JSON.stringify(body)
    })
    const json = await result.json()
    if (json._id) {
      return res.status(200).json({ success: true, data: json })
    } else {
      return res.status(500).json({ error: true })
    }
  } else {
    res.status(200).json({ data: 'wishlist doesnt exist', code: 404 })
  }
})

export default wish
