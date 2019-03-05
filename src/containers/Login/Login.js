import { connect } from 'react-redux';
import Login from '../../components/Login';
import * as loginReducer from '../../reducers/Login';
import * as accountReducer from '../../reducers/Account';

const mapStateToProps = (state) => ({
  username: loginReducer.selectUsername(state),
  password: loginReducer.selectPassword(state),
  loggedIn: loginReducer.selectLoggedIn(state),
  isLogging: loginReducer.selectLoginStatus(state),
  error: loginReducer.selectError(state),
})

const { login, updateFormValue, loginFailed, loginSuccess } = loginReducer;
const { loadAccount } = accountReducer;

const mapDispatchToProps = {
  updateFormValue,
  login,
  loginSuccess,
  loginFailed,
  loadAccount,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
