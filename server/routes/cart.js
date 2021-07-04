import express from 'express'
const cart = express.Router()

cart.get('/', (req, res) => {
  res.send('cart itmes')
})

export default cart
