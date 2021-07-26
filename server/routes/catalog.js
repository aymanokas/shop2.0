import express from 'express'
import fetch from 'node-fetch'
import { BASE_URL, X_API_KEY } from '../settings'
const product = express.Router()

product.get('/getCatalog', async (req, res) => {
  const { take, skip, orderby, orderAsc, tagId, categoryId, search } = req.query
  let query = `${BASE_URL}/products`
  if (tagId || categoryId) query += '?q={'
  if (tagId) query += `"tags":[{"_id":"${tagId}"}]`
  if (categoryId) query += `${tagId !== undefined ? ',' : ''}"categories":[{"_id":"${categoryId}"}]`
  if (tagId || categoryId) query += '}'
  if (take) query += `${tagId || categoryId ? '&' : '?'}h={"$max":${take}`
  if (skip) query += `,"$skip":${skip}`
  if (orderby) query += `,"$orderby":{"${orderby}":${orderAsc !== undefined ? 1 : -1}}`
  else query += `,"$orderby":{"_created":${orderAsc !== undefined ? 1 : -1}}`
  query += '}'
  if (search) query += `&filter=${search}`
  query += '&totals=true'
  const result = await fetch(query, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const json = await result.json()
  if (json && json.data) return res.send({ count: json.totals.total, data: json.data })
  else return res.send({ count: 0, data: [] })
})

export default product
