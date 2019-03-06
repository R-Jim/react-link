import { connect } from 'react-redux';
import PasswordChangeModal from '../../components/PasswordChangeModal';
import { selectForm, updateFormValue, submitForm, toggleModal } from '../../reducers/form';

export const FORM_NAME = 'passwordChangeModalForm';

const mapStateToProps = (state) => {
  const { properties, data, error } = selectForm(state, FORM_NAME);
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
  toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeModal);
