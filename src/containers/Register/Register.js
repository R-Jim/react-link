import { connect } from 'react-redux'
import Register from '../../components/Register'
import * as RegisterReducer from '../../reducers/Register'
import { register, checkExist, login } from '../../reducers/Login'

const mapStateToProps = (state) => {
  const register = state.register;
  const login = state.login;
  return {
    username: register.username,
    password: register.password,
    email: register.email,
    fullname: register.fullname,
    dob: register.dob,
    registered: register.registered,
    exist: login.exist,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormValue: function (fieldName, value) {
      dispatch(RegisterReducer.updateFormValue(fieldName, value));
    },
    register: function (username, password, email, fullname, dob) {
      dispatch(register(username, password, email, fullname, dob));
      dispatch(RegisterReducer.updateFormValue('registered', true));
      dispatch(login(username, password));
    },
    checkExist: function (username) {
      dispatch(checkExist(username));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
