import { connect } from 'react-redux'
import Register from '../../components/Register'
import * as registerReducer from '../../reducers/Register'

const mapStateToProps = (state) => ({
  username: registerReducer.selectUsername(state),
  password: registerReducer.selectPassword(state),
  email: registerReducer.selectEmail(state),
  fullname: registerReducer.selectFullname(state),
  dob: registerReducer.selectDob(state),
  error: registerReducer.selectRegistrationError(state),
})

const { updateFormValue, registerStart } = registerReducer;

const mapDispatchToProps = {
  updateFormValue,
  registerStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
