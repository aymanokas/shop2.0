import express from 'express'
const product = express.Router()

product.get('/', (req, res) => {
  res.send('product itmes')
})

export default product
