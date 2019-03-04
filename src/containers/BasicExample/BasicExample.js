import { connect } from 'react-redux';
import BasicExmple from '../../components/BasicExample';
import { selectCurrentAccount } from '../../reducers/Account';

const mapStateToProps = (state) => ({
  account: selectCurrentAccount(state),
})
export default connect(mapStateToProps)(BasicExmple);