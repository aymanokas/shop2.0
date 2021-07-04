import express from 'express'
import fetch from 'node-fetch'
import { BASE_URL, secretkeys, X_API_KEY } from '../settings'
const user = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

user.post('/login', async (req, res) => {
  const userName = req.body.userName
  const password = req.body.password
  const query = `${BASE_URL}/users?q={"userName": "${userName}"}`
  const result = await fetch(query, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const json = await result.json()
  if (!json.length) return res.status(500).json({ error: true })
  else {
    const userJson = json[0]
    bcrypt.compare(password, userJson.password).then(async isMatch => {
      if (isMatch) {
        delete userJson.Password
        const payload = {
          ...userJson
        }
        jwt.sign(
          payload,
          secretkeys,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (_err, token) => {
            res.status(200).json({
              success: true,
              token: token
            })
          }
        )
      } else {
        return res.status(500).json({ error: true })
      }
    }
    )
  }
})

user.post('/signup', async (req, res) => {
  const email = req.body.email
  const userName = req.body.userName
  const password = req.body.password
  const query = `${BASE_URL}/users`
  const body = {
    email,
    userName,
    password: bcrypt.hashSync(password),
    active: true
  }
  const result = await fetch(query, {
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
})

user.post('/update/:id', async (req, res) => {
  const userId = req.params.id
  const query = `${BASE_URL}/users/${userId}`
  const body = {}
  if (req.body.password) body.password = bcrypt.hashSync(req.body.password)
  if (req.body.firstName) body.firstName = req.body.firstName
  if (req.body.LastName) body.LastName = req.body.LastName
  if (req.body.phone) body.phone = req.body.phone
  if (req.body.address) body.address = req.body.address
  if (req.body.userName) body.userName = req.body.userName
  const result = await fetch(query, {
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
})

user.get('/emailExist/:email', async (req, res) => {
  const query = `${BASE_URL}/users?q={"normalizedEmail": "${req.params.email.toLowerCase()}"}`
  const result = await fetch(query, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const json = await result.json()
  if (json.length) return res.status(200).json({ exist: true })
  else return res.status(200).json({ exist: false })
})

user.get('/userNameExist/:userName', async (req, res) => {
  const query = `${BASE_URL}/users?q={"userName": "${req.params.userName}"}`
  const result = await fetch(query, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const json = await result.json()
  if (json.length) return res.status(200).json({ exist: true })
  else return res.status(200).json({ exist: false })
})

export default user
