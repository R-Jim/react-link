import React from 'react'
import { Redirect, Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
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
    // console.log(this.props.location);
    const state = this.props.location.state;
    if (state && !this.state.loggedIn && state.loggedIn) {
      this.handleLoggin();
      state.loggedIn = false;
    }
    return (
      <div>
        <h1>Home cc</h1>
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          {/* <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li> */}
        </ul>
        {(!this.state.loggedIn) ? <p> <Link to="/login">Login</Link></p> : <p onClick={this.handleLoggout}>Logout</p>}
      </div>
    )
  }
}

export default Home