import { connect } from 'react-redux';
import Login from '../../components/Login';
import * as loginReducer from '../../reducers/Login';

const mapStateToProps = (state) => ({
  username: loginReducer.selectUsername(state),
  password: loginReducer.selectPassword(state),
  loggedIn: loginReducer.selectLoggedIn(state),
  isLogging: loginReducer.selectLoginStatus(state),
  error: loginReducer.selectError(state),
})

const { login, updateFormValue } = loginReducer;

const mapDispatchToProps = {
  updateFormValue,
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
