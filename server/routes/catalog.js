import express from 'express'
import fetch from 'node-fetch'
import { BASE_URL, X_API_KEY } from '../settings'
const product = express.Router()

product.get('/getCatalog', async (req, res) => {
  const { take, skip, orderby, orderAsc, tagId, categoryId, search } = req.query
  let query = `${BASE_URL}/products`
  if (tagId) query += `?q={"tags":{"_id":"${tagId}"}}`
  // if (tagId || categoryId) query += `/${tagId || categoryId}?referencedby=true`
  if (take) query += `${tagId || categoryId ? '&' : '?'}h={"$max":${take}`
  if (skip) query += `,"$skip":${skip}`
  if (orderby) query += `,"$orderby":{"${orderby}":${orderAsc !== undefined ? 1 : -1}}`
  else query += `,"$orderby":{"_created":${orderAsc !== undefined ? 1 : -1}}`
  query += '}'
  if (search) query += `&filter=${search}`
  query += '&totals=true'
  console.log(query)
  const result = await fetch(query, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': X_API_KEY
    }
  })
  const json = await result.json()
  console.log(json)
  if (json && json.data) return res.send({ count: json.totals.count, data: json.data })
  else return res.send({ count: 0, data: [] })
})

export default product
