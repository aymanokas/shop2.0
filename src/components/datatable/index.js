import React from 'react'
import { DataGrid, GridOverlay } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core'
import Styles from './style'

const useStyles = makeStyles(Styles)
const CustomNoRowsOverlay = ({ noRowsMessage }) => {
  return (
    <GridOverlay>
      <div>{noRowsMessage}</div>
    </GridOverlay>
  )
}
export default ({ config, pageSize, handleRowClick, clickable, rowsPerPage, handleSort, handlePageChange, rowCount, rowHeight, noRowsMessage, onPageSizeChange, headerHeight, hideFooter}) => {
  const { root } = useStyles({ clickable })
  return (
    <DataGrid
      autoHeight
      showColumnRightBorder={false}
      showCellRightBorder={false}
      showColumnRightBorder={false}
      autoPageSize
      hideFooter={hideFooter}
      headerHeight={headerHeight}
      className={root}
      rows={config.rows}
      rowsPerPageOptions={rowsPerPage}
      columns={config.columns}
      hideFooterSelectedRowCount
      pageSize={pageSize}
      onRowClick={handleRowClick}
      sortingMode='server'
      onSortModelChange={handleSort}
      onPageChange={handlePageChange}
      onPageSizeChange={onPageSizeChange}
      disableColumnMenu
      sortingOrder={[true, false]}
      paginationMode='server'
      rowCount={rowCount}
      rowHeight={rowHeight}
      components={{
        NoRowsOverlay: () => <CustomNoRowsOverlay noRowsMessage={noRowsMessage} />
      }}
    />
  )
}
