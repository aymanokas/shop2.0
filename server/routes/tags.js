import express from 'express'
const tags = express.Router()

tags.get('/', (req, res) => {
  res.send('tags itmes')
})

export default tags
