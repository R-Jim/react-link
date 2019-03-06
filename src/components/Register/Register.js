import React from 'react';
import { RegisterButton, PRIMARY, DISABLED, RegisterWrapper } from './styles';
import { Title, InputStyled, HeaderStyled } from '../styles';

class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      validate: false,
      readyToSubmit: false,
    }
  }

  handleInputUsername = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue('username', value);
    this.setState({
      validate: false
    })
  }

  handleInputPassword = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue('password', value);
  }

  handleInputEmail = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue('email', value);
  }

  handleInputFullname = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue('fullname', value);
  }

  handleInputDob = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue('dob', value);
  }

  handleSubmitForm = (e) => {
    const { registerStart } = this.props;
    registerStart();
    e.preventDefault();
  }

  static getDerivedStateFromProps(props, state) {
    const { username, password, email } = props;
    return {
      ...state, readyToSubmit:
        (username.length > 0 && password.length > 0 && email.length > 0),
      validate: false
    }
  }

  render() {
    const { username, password, email, fullname, dob, error } = this.props;
    const { readyToSubmit } = this.state;
    return (
      <RegisterWrapper>
        <HeaderStyled>REGISTRATION</HeaderStyled>
        <form onSubmit={this.handleSubmitForm}>
          <Title style={{ color: "red" }}>{error}</Title>
          <div>
            <Title>Username:</Title>
          </div>
          <InputStyled
            type="text"
            value={username}
            pattern="[A-Za-z1-9_]{0,}"
            onChange={this.handleInputUsername}
            title="Username can only have A-Z, a-z, 1-9 or _"
            error={!!error}
            required
          />
          {/* <RegisterButton type="button" onClick={this.handleCheckUsername}>Check</RegisterButton> */}
          <div>
            <Title>Password:</Title>
          </div>
          <InputStyled
            type="password"
            value={password}
            onChange={this.handleInputPassword}
            pattern="\w{8,}"
            required
            title="Password must have at lease 8 characters"
          />
          <div>
            <Title>Email:</Title>
          </div>
          <InputStyled
            type="email"
            value={email}
            onChange={this.handleInputEmail}
            required
          />
          <div>
            <Title>Fullname:</Title>
          </div>
          <InputStyled
            type="text"
            value={fullname}
            onChange={this.handleInputFullname}
          />
          <div>
            <Title>Date of birth:</Title>
          </div>
          <InputStyled
            type="date"
            value={dob}
            onChange={this.handleInputDob}
          />
          <br />
          <RegisterButton buttonType={(readyToSubmit) ? PRIMARY : DISABLED} type="submit" disabled={!readyToSubmit}>
            Register
          </RegisterButton>
        </form>
      </RegisterWrapper >
    )
  }
}

export default Register;
