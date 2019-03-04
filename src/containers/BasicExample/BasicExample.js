import { connect } from 'react-redux';
import BasicExmple from '../../components/BasicExample';

const mapStateToProps = (state) => {
  const login = state.login;
  return {
    accountType: login.accountType,
  }
}
export default connect(mapStateToProps)(BasicExmple);