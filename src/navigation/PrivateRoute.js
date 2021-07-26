import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../pages/Login'
import { sessionService } from 'redux-react-session'
import Home from '../pages/Home'
import App from '../core/App'

const PrivateRoute = ({ path, exact, isConnected, children, logoutInProgress }) => {
  console.log(sessionService.checkAuth)
  return (
    <>
      <Route onEnter={sessionService.checkAuth} component={Home} />
      <Route path='/Login' component={Login} />
    </>
  )
}

const mapStateToProps = ({ session }) => ({
  sessionInfo: session.authenticated,
  checked: session.checked
})

export default connect(mapStateToProps, null)(PrivateRoute)
