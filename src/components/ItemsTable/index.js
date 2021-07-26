import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import DataTable from '../datatable'
import CloseIcon from '@material-ui/icons/Close'
import { removeItemWishListAction } from '../../pages/Whishlist/store'
import { useDispatch } from 'react-redux'

const useStyle = makeStyles(style)

const config = ({ thumbnail, rowText, addButton, removeIcon, dispatch }) => ({
  columns: [
    {
      field: 'images',
      headerName: 'IMAGE',
      flex: 1,
      renderCell: (params) => (
        <>
          <img src={params.value[0]} alt='thumbnail' className={thumbnail} />
        </>
      )
    },
    {
      field: 'name',
      headerName: 'PRODUCT NAME',
      flex: 1,
      renderCell: (params) => <Typography className={rowText}>{params.value}</Typography>
    },
    {
      field: 'price',
      headerName: 'UNIT PRICE',
      flex: 1,
      renderCell: (params) => <Typography className={rowText}>{params.value}</Typography>
    },
    {
      field: 'isInCart',
      headerName: 'ADD TO CART',
      flex: 1,
      renderCell: (params) => <Button className={addButton}>Add to cart</Button>
    },
    {
      field: '_id',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => <CloseIcon onClick={() => dispatch(removeItemWishListAction(params.value))} className={removeIcon} />
    }
  ]
})

export default ({ data }) => {
  const { title, rowText, thumbnail, addButton, removeIcon } = useStyle()
  const dispatch = useDispatch()
  return (
    <Container>
      <Typography className={title}>Your wishlist items</Typography>
      <DataTable
        config={{ ...config({ thumbnail, rowText, addButton, removeIcon, dispatch }), rows: data }}
        pageSize={data.length}
        rowCount={data.length}
        headerHeight={90}
        hideFooter
        clickable
        rowHeight={180}
        rowsPerPage={[10, 25, 50, 100]}
        onPageSizeChange={(e) => null}
        handleRowClick={(e) => null}
        noRowsMessage='No Items Here :)'
      />
    </Container>
  )
}
