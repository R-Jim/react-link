import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errMsg: ''
    }
  }

  handleUsernameInput = (e) => {
    const updateFormValue = this.props.updateFormValue;
    const value = e.target.value;
    updateFormValue('username', value);
  }

  handlePasswordInput = (e) => {
    const updateFormValue = this.props.updateFormValue;
    const value = e.target.value;
    updateFormValue('password', value);
  }

  handleRequestLoginChange = () => {
    const updateFormValue = this.props.updateFormValue;
    updateFormValue('requestLogin', false);
  }

  submitForm = (e) => {
    const username = this.props.username;
    const password = this.props.password;
    const login = this.props.login;
    login(username, password);
    e.preventDefault();
  }

  static getDerivedStateFromProps(props, state) {
    const loggedIn = props.loggedIn;
    const requestLogin = props.requestLogin;
    let errMsg = ''
    if (!loggedIn && requestLogin) {
      errMsg = 'Wrong username or password';
    }
    return { ...state, errMsg: errMsg }
  }

  render() {
    const username = this.props.username;
    const password = this.props.password;
    const loggedIn = this.props.loggedIn;
    const requestLogin = this.props.requestLogin;
    console.log(this.props);
    if (loggedIn && requestLogin) {
      return (
        <Redirect exact to={{ pathname: '/', state: { username: username } }} />
      );
    }
    return (
      <div>
        <span style={{ "color": "red" }}>{this.state.errMsg}</span>
        <h1>Login</h1>
        <form onSubmit={this.submitForm}>
          <div>Username:</div>
          <input
            value={username}
            onChange={this.handleUsernameInput}
          />
          <div>Password:</div>
          <input
            type="password"
            value={password}
            onChange={this.handlePasswordInput}
          />
          <br />
          <button type="submit">
            Login
        </button>
        </form>
        <p><Link to="/register">Register</Link></p>
      </div >
    )
  }
}

export default Login
