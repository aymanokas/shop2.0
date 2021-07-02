export default {
  tabsBar: {
    width: '100%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    marginTop: 90,
    justifyContent: 'center'
  },
  tab: {
    color: '#555',
    letterSpacing: '.8px',
    fontSize: 18,
    cursor: 'pointer',
    margin: '0 18px 0 18px',
    fontWeight: '600',
    transition: 'all .4s ease 0s',
    '&:hover': {
      color: '#000'
    }
  },
  selectedTab: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 18,
    cursor: 'pointer',
    margin: '0 18px 0 18px',
    fontWeight: '600'
  }
}
