import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import DataTable from '../datatable'

const useStyle = makeStyles(style)

const config = ({ thumbnail, rowText }) => ({
  columns: [
    {
      field: 'photo',
      headerName: 'IMAGE',
      flex: 2,
      renderCell: (params) => (
        <>
          <img src={params.row.Photo} alt='thumbnail' className={thumbnail} />
          {params.value}
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
      renderCell: (params) => <Typography className={rowText}>Your wishlist items</Typography>
    },
     {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => <Typography className={rowText}>X</Typography>
    }
  ]
})

export default ({ data }) => {
  const { title, tableContainer, tableHeader, headerCell, tableRow, imageContainer, rowText, thumbnail } = useStyle()
  return (
    <Container>
      <Typography className={title}>Your wishlist items</Typography>
       <DataTable
          config={{ ...config({ thumbnail, rowText }), rows: data }}
          pageSize={10}
          rowCount={data.length}
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
