export default {
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
  },
  headerText: {
    fontSize: 24,
    fontWeight: 500,
    color: '#000',
    cursor: 'pointer'
  },
  active: {
    color: '#a749ff'
  },
  slash: {
    margin: '0 20px'
  },
  paper: {
    width: '50%',
    background: 'transparent none repeat scroll 0 0',
    boxShadow: '0 0 6px rgb(0 0 0 / 10%)',
    padding: 80
  },
  root: {
    width: '100%',
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60
  },
  textFieldClass: {
    width: '100%',
    marginBottom: 24,
    '& .MuiOutlinedInput-input': {
      padding: 8
    },
    '& .MuiInputLabel-outlined': {
      marginTop: -10
    },
    '& .MuiSelect-nativeInput': {
      marginTop: -10
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '0 !important',
      height: 42
    }
  },
  button: {
    backgroundColor: '#f2f2f2',
    border: 'none',
    color: '#333',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1,
    padding: '11px 30px',
    textTransform: 'uppercase'
  }
}
