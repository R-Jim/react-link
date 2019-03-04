import { connect } from 'react-redux'
import Register from '../../components/Register'
import * as registerReducer from '../../reducers/Register'
import { register, checkExistUsername, loadAccount } from '../../reducers/Account'

const mapStateToProps = (state) => {
  const username = registerReducer.selectUsername(state);
  const registered = registerReducer.selectRegistered(state);
  const isRegistering = registerReducer.selectIsRegistering(state);
  let account;
  if (isRegistering) {
    account = checkExistUsername(state, username);
  }
  return {
    username,
    password: registerReducer.selectPassword(state),
    email: registerReducer.selectEmail(state),
    fullname: registerReducer.selectFullname(state),
    dob: registerReducer.selectDob(state),
    registered,
    isRegistering,
    exist: !!account,
  }
}

const { updateFormValue, registerStart, registerSuccess, registerFailed } = registerReducer;

const mapDispatchToProps = {
  updateFormValue,
  registerStart,
  registerSuccess,
  registerFailed,
  register,
  loadAccount,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
