import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LoginWrapper, FormInput, IconStyled, PStyled } from './styles';
import { Button, HyperLink, Title, HeaderStyled } from '../styles';
import Icon from '../../icon.png';

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

  componentDidUpdate = (prevProps, prevState) => {
    const { loggedIn, exist, isLogging, loginSuccess, loginFailed, loadAccount, username } = this.props;
    if (loggedIn) return;
    if (isLogging && exist) { loginSuccess(); loadAccount(username) }
    if (isLogging && !exist) loginFailed();
  }

  render() {
    const { username, password, loggedIn, error } = this.props;

    if (loggedIn) {
      return (
        <Redirect exact to={{ pathname: '/' }} />
      );
    }
    return (
      <LoginWrapper>
        <IconStyled src={Icon}></IconStyled>
        <HeaderStyled>WELCOME</HeaderStyled>
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
          <Title style={{ "color": "red" }}>{error}</Title>
          <Button type="submit">
            Login
        </Button>
          <PStyled>Want to join? <HyperLink><Link to="/register">Sign up</Link></HyperLink></PStyled>
        </form>
      </LoginWrapper >
    )
  }
}

export default Login;
