import { connect } from 'react-redux';
import { selectCurrentAccount } from '../../reducers/Account';
import Account from '../../components/Account';
import { toggleModal } from '../../reducers/PasswordChangeModal';

const mapStateToProps = (state) => ({
  account: selectCurrentAccount(state)
})

const mapDispatchToProps = {
  toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
