import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { RegisterButton, PRIMARY, DISABLED } from './styless'
import { Button, HyperLink, Title, InputStyled } from '../styles';

class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      validate: false
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
    const { username, password, email, fullname, dob, register } = this.props;
    register(username, password, email, fullname, dob);
    e.preventDefault();
  }

  handleCheckUsername = () => {
    const { username, checkExist } = this.props;
    if (username != '') {
      checkExist(username);
      this.setState({
        validate: true
      })
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { exist } = props;
    if (exist) {
      return { ...state, validate: !exist }
    }
    return state
  }

  render() {
    const { username, password, email, fullname, dob, registered, exist } = this.props;
    const { validate } = this.state;
    if (registered)
      return <Redirect exact to={{ pathname: '/login', state: { username, password } }} />
    return (
      <div>
        <h1>Create new account</h1>
        <form onSubmit={this.handleSubmitForm}>
          <Title style={{ color: "red" }}>{(exist) ? 'Username already exist' : ''}</Title>
          <div>
            <Title>Username:</Title>
          </div>
          <InputStyled
            type="text"
            value={username}
            pattern="[A-Za-z1-9_]{0,}"
            onChange={this.handleInputUsername}
            title="Username can only have A-Z, a-z, 1-9 or _"
            error={exist}
            required
          />
          <RegisterButton type="button" onClick={this.handleCheckUsername}>Check</RegisterButton>
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
            type="text"
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
            type="text"
            value={dob}
            onChange={this.handleInputDob}
          />
          <br />
          <HyperLink><Link exact to="/login">Back</Link></HyperLink>
          <RegisterButton theme={(validate) ? PRIMARY : DISABLED} type="submit" disabled={!validate}>
            Register
          </RegisterButton>
        </form>
      </div >
    )
  }
}

export default Register
