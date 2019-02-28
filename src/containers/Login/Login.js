import { connect } from 'react-redux'
import Login from '../../components/Login'
import * as LoginReducer from '../../reducers/Login'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  const login = state.login;
  return {
    username: login.username,
    password: login.password,
    // admin: login.admin,
    requestLogin: login.requestLogin,
    loggedIn: login.loggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormValue: function (fieldName, value) {
      dispatch(LoginReducer.updateFormValue(fieldName, value))
    },
    login: function (username, password) {
      dispatch(LoginReducer.login(username, password))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))