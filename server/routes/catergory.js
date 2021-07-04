import express from 'express'
const category = express.Router()

category.get('/', (req, res) => {
  res.send('category itmes')
})

export default category
