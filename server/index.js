import express from 'express'
import bodyParser from 'body-parser'

import user from './routes/user'
import product from './routes/product'
import catergory from './routes/catergory'
import tags from './routes/tags'
import cart from './routes/cart'
import wish from './routes/wish'

const app = express()
app.use(bodyParser.json())
app.use('/user', user)
app.use('/product', product)
app.use('/catergory', catergory)
app.use('/tags', tags)
app.use('/cart', cart)
app.use('/wish', wish)

app.get('/', (req, res) => {
  res.send('Hello Babel')
})

app.listen(4000, () => {
  console.log('app is listening to port 4000')
})
