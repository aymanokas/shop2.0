import React, { useState } from 'react'
import { MenuItem, TextField, makeStyles, Button } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import NavBar from '../NavBar'
import BreadCrumb from '../BreadCrumb'
import Footer from '../Footer'
import ProductCard from '../ProductCard'
const arr = [11, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1]
const filters = [
  {
    value: 0,
    label: 'default'
  },
  {
    value: 1,
    label: 'Price Hight to Low'
  },
  {
    value: 2,
    label: 'Price Low to Hight'
  }
]
const useStyle = makeStyles(style)
export default () => {
  const { productsStyle, filterStyle, buttonStyle, buttonContainer } = useStyle()

  const [currency, setCurrency] = useState(0)
  const handleChange = (event) => {
    setCurrency(event.target.value)
  }
  return (
    <>
      <NavBar fixed />
      <BreadCrumb pathname='SHOP' />
      <Container>
        <TextField
          className={filterStyle}
          select
          variant='outlined'
          value={currency}
          onChange={handleChange}
        >
          {filters.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className={productsStyle}>
          {arr.map(
            (item, key) => {
              return (
                <ProductCard key={key} />
              )
            }
          )}
        </div>
        <div className={buttonContainer}>
          <Button variant='contained' className={buttonStyle}>
            Show more
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  )
}
