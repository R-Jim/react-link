import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { LoginWrapper, FormInput } from './styles';
import { Button, HyperLink, Title } from '../styles';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errMsg: '',
      timeLoggedIn: 0,
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
    const { username, password, login } = this.props;
    const timeLoggedIn = this.state.timeLoggedIn + 1;
    this.setState({ timeLoggedIn })
    login(username, password);
    e.preventDefault();
  }

  static getDerivedStateFromProps(props, state) {
    const { loggedIn } = props;
    let errMsg = ''
    if (!loggedIn && state.timeLoggedIn > 0) {
      errMsg = 'Wrong username or password';
    }
    return { ...state, errMsg: errMsg }
  }

  render() {
    const { username, password, loggedIn } = this.props;

    if (loggedIn) {
      return (
        <Redirect exact to={{ pathname: '/' }} />
      );
    }
    return (
      <LoginWrapper>
        <Title style={{ "color": "red" }}>{this.state.errMsg}</Title>
        <h1>Login</h1>
        <form onSubmit={this.submitForm}>
          <div><Title>Username:</Title></div>
          <FormInput
            type="text"
            error={!!this.state.errMsg}
            value={username}
            onChange={this.handleUsernameInput}
          />
          <div><Title>Password:</Title></div>
          <FormInput
            error={!!this.state.errMsg}
            type="password"
            value={password}
            onChange={this.handlePasswordInput}
          />
          <br />
          <Button type="submit">
            Login
        </Button>
          <HyperLink><Link to="/register">Register</Link></HyperLink>
        </form>
      </LoginWrapper >
    )
  }
}

export default Login
