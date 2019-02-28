import { connect } from 'react-redux'
import Home from '../../components/Home'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  const login = state.login;
  return {
    loggedIn: login.loggedIn,
    username: login.username
  }
}

export default withRouter(connect(mapStateToProps)(Home))
// export default connect(mapStateToProps)(Home)
