import express from 'express'
import bodyParser from 'body-parser'

import user from './routes/user'
import catalog from './routes/catalog'
import catergories from './routes/catergories'
import cart from './routes/cart'
import wish from './routes/wish'

const app = express()
app.use(bodyParser.json())
app.use('/api/user', user)
app.use('/api/catalog', catalog)
app.use('/api/categories', catergories)
app.use('/api/cart', cart)
app.use('/api/wish', wish)

// React Route
app.use('/', express.static(path.join(__dirname, 'client/build')))

app.listen(4000, () => {
  console.log('app is listening to port 4000')
})
