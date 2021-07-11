export default {
  root: {
    '& .MuiDataGrid-cellLeft': {
      cursor: ({ clickable }) => clickable && 'pointer'
    },
    '& .MuiDataGrid-columnHeaderWrapper': {
      backgroundColor: '#f7f7f7'
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none'
    },
    '& .MuiDataGrid-cell': {
      justifyContent: 'center !important'
    },
    '& .MuiDataGrid-columnHeaderTitleContainer ': {
      justifyContent: 'center !important'
    },
    marginTop: 40
  }

}
