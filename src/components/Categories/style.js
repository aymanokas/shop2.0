export default {
  categoriesContainer: {
    width: '100%',
    height: 380,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '-190px'
  },
  productCount: {
    color: '#000',
    position: 'absolute',
    letterSpacing: '.8px',
    top: 270,
    fontSize: 14,
    fontWeight: '400'
  },
  titleStyle: {
    color: '#000',
    letterSpacing: '.8px',
    position: 'absolute',
    top: 250,
    fontSize: 16,
    fontWeight: '400'
  },
  thumbnail: {
    width: 300,
    transition: 'all .7s',
    '&:hover': {
      transition: 'all .5s',
      width: 350
    }
  },
  categorie: {
    cursor: 'pointer',
    width: 380,
    position: 'relative',
    height: 340,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden'
  }
}
