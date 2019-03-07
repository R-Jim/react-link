import { connect } from 'react-redux';
import Login from '../../components/Login';
import {
  login, updateFormValue,
  selectError, selectLoggedIn, selectLoginStatus, selectPassword, selectUsername
} from '../../reducers/Login';

const mapStateToProps = (state) => ({
  username: selectUsername(state),
  password: selectPassword(state),
  loggedIn: selectLoggedIn(state),
  isLogging: selectLoginStatus(state),
  error: selectError(state),
})

const mapDispatchToProps = {
  updateFormValue,
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
