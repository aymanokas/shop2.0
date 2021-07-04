import express from 'express'
const wish = express.Router()

wish.get('/', (req, res) => {
  res.send('wish itmes')
})

export default wish
