import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: false,
    }
  }


  static getDerivedStateFromProps(props, state) {
    const loggedIn = props.loggedIn;
    const locationState = props.location.state;
    if (loggedIn && locationState) {
      return { ...state, loggedIn: true, username: locationState.username }
    }
    return state;
  }


  handleLoggin = () => {
    this.setState({
      loggedIn: true
    })
  }

  handleLoggout = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome Home</h1>
        <ul>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/profile">Pofile</Link></li>
          <li><Link to="/pokemon">Pokemon</Link></li>
        </ul>
        {/* {(!this.state.loggedIn) ? <p> <Link to="/login">Login</Link></p> : <p onClick={this.handleLoggout}>Logout</p>} */}
        <p> <Link to="/login">Login</Link></p>
      </div>
    )
  }
}

export default Home
