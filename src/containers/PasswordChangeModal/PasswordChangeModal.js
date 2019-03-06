import { connect } from 'react-redux';
import PasswordChangeModal from '../../components/PasswordChangeModal';
import { selectFormData, toggleModal, updateFormValue, changePassword } from '../../reducers/PasswordChangeModal';

const mapStateToProps = (state) => {
  const { isOpen, oldPassword, newPassword,
    passwordChanged, passwordChanging, error } = selectFormData(state);
  return {
    isOpen,
    oldPassword,
    newPassword,
    passwordChanged,
    passwordChanging,
    error,
  }
}

const mapDispatchToProps = {
  toggleModal,
  updateFormValue,
  changePassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeModal);
