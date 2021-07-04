export default {
  BCContainer: {
    width: '100%',
    height: 96,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7'
  },
  priviousLink: {
    color: '#555252',
    letterSpacing: '.8px',
    fontSize: 18,
    transition: 'all .3s',
    fontWeight: '400',
    cursor: 'pointer',
    fontFamily: '"Poppins", sans-serif',
    '&:hover': {
      color: '#a749ff'
    }
  },
  selectedLink: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: '"Poppins", sans-serif'
  }
}
