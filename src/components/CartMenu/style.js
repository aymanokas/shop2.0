export default {
  root: {
    width: 260,
    paddingLeft: 40,
    paddingRight: 40
  },
  productsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  product: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 20,
    borderBottom: '1px solid #ebebeb'
  },
  thumbnail: {
    height: 100,
    backgroundColor: '#f9f9f9',
    width: 80
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 15
  },
  total: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  buttonClass: {
    backgroundColor: 'transparent',
    width: '100%',
    border: '1px solid black',
    marginBottom: 15
  },
  titleClass: {
    fontSize: 15
  },
  qtyClass: {
    fontSize: 12,
  },
  priceClass: {
    fontSize: 12,
  }
}