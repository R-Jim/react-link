import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <p><Link to="/register">Register</Link></p>
      </div>
    )
  }
}

export default Login