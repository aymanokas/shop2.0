export default {
  footerContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 45,
    marginBottom: 60
  },
  buttonStyle: {
    fontSize: 14,
    fontWeight: 500,
    height: 45,
    width: 250,
    textTransform: 'uppercase',
    color: '#363f4d',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7'
  },
  bottomContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 60
  },
  paper: {
    width: '26%',
    backgroundColor: '#f9f9f9',
    padding: '45px 30px 50px',
    borderRadius: 5,
    border: '1px solid #ebebeb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  titleClass: {
    fontSize: 18,
    fontWeight: 500,
    display: 'inline-block',
    margin: 0,
    paddingRight: 18
  },
  buttonClass: {
    fontSize: 14,
    fontWeight: 500,
    padding: '13px 42px 12px',
    cursor: 'pointer',
    transition: 'all .3s ease 0s',
    textTransform: 'uppercase',
    color: '#fff',
    border: 'none',
    borderRadius: 50,
    backgroundColor: '#a749ff',
    marginTop: 25,
    '&:hover': {
      backgroundColor: '#333'
    }
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  smallTitle: {
    fontSize: 14,
    margin: '36px 0 27px',
    fontWeight: 400
  },
  formControl: {
    width: '100%',
    marginBottom: 27
  },
  inputWidth: {
    width: '100%',
    '& .MuiOutlinedInput-input': {
      padding: 8
    },
    '& .MuiInputLabel-outlined': {
      marginTop: -10
    },
    '& .MuiSelect-nativeInput': {
      marginTop: -10
    }
  },
  bold: {
    fontWeight: 500,
    fontSize: 20
  },
  coloredText: {
    color: '#a749ff'
  }
}
