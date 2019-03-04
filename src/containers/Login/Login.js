import { connect } from 'react-redux';
import Login from '../../components/Login';
import * as loginReducer from '../../reducers/Login';
import * as accountReducer from '../../reducers/Account';

const mapStateToProps = (state) => {
  const username = loginReducer.selectUsername(state);
  const password = loginReducer.selectPassword(state);
  const loggedIn = loginReducer.selectLoggedIn(state);
  const isLogging = loginReducer.selectLoginStatus(state);
  const error = loginReducer.selectError(state);
  let account;
  if (isLogging) {
    account = accountReducer.selectAccount(state, username, password);
  }

  return {
    username,
    password,
    loggedIn,
    isLogging,
    exist: !!account,
    error,
  }
}

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
