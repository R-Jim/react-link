import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import { selectCurrentAccount } from '../../reducers/Account';
import {
  submitForm, loadDataToForm,
  EDIT_PROFILE_FORM, selectForm,
  updateFormValue,
} from '../../reducers/form';

const mapStateToProps = (state) => {
  const account = selectCurrentAccount(state);
  const form = selectForm(state, EDIT_PROFILE_FORM);
  return {
    account,
    form
  }
}
const mapDispatchToProps = ({
  submitForm,
  loadDataToForm,
  updateFormValue,
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
