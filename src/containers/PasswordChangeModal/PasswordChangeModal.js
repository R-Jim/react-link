import { connect } from 'react-redux';
import PasswordChangeModal from '../../components/PasswordChangeModal';
import { selectForm, updateFormValue, submitForm, updateFormProperty, PASSWORD_CHANGE_FORM } from '../../reducers/form';

const mapStateToProps = (state) => {
  const { properties, data, error } = selectForm(state, PASSWORD_CHANGE_FORM);
  const { isOpen } = properties;
  const { oldPassword, newPassword, confirmPassword } = data;
  return {
    isOpen,
    oldPassword,
    newPassword,
    confirmPassword,
    error
  }
}

const mapDispatchToProps = {
  updateFormValue,
  submitForm,
  updateFormProperty,
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeModal);
