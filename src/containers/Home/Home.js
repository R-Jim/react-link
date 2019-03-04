import { connect } from 'react-redux';
import Home from '../../components/Home';
import { withRouter } from 'react-router-dom';
import { selectLoggedIn } from '../../reducers/Login';

const mapStateToProps = (state) => ({ loggedIn: selectLoggedIn(state) })

export default withRouter(connect(mapStateToProps)(Home));
