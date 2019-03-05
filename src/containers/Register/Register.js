import { connect } from 'react-redux'
import Register from '../../components/Register'
import * as registerReducer from '../../reducers/Register'
import { register, checkExistUsername, loadAccount } from '../../reducers/Account'

const mapStateToProps = (state) => ({
  username: registerReducer.selectUsername(state),
  password: registerReducer.selectPassword(state),
  email: registerReducer.selectEmail(state),
  fullname: registerReducer.selectFullname(state),
  dob: registerReducer.selectDob(state),
  error: registerReducer.selectError(state),
})

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
