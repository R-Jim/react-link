import React from 'react'
import { Redirect } from 'react-router-dom'

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
    console.log(exist + "," + validate);
    if (registered)
      return <Redirect exact to={{ pathname: '/login', state: { username, password } }} />
    return (
      <div>
        <h1>Create new account</h1>
        <form onSubmit={this.handleSubmitForm}>
          <span style={{ color: "red" }}>{(exist) ? 'Username already exist' : ''}</span>
          <div>
            Username:
          </div>
          <input
            type="text"
            value={username}
            pattern="[A-Za-z1-9_]{0,}"
            onChange={this.handleInputUsername}
            title="Username can only have A-Z, a-z, 1-9 or _"
            required
          />
          <button type="button" onClick={this.handleCheckUsername}>Check</button>
          <div>
            Password:
          </div>
          <input
            type="password"
            value={password}
            onChange={this.handleInputPassword}
            pattern="\w{8,}"
            required
            title="Password must have at lease 8 characters"
          />
          <div>
            Email:
          </div>
          <input
            type="text"
            value={email}
            onChange={this.handleInputEmail}
            required
          />
          <div>
            Fullname:
          </div>
          <input
            type="text"
            value={fullname}
            onChange={this.handleInputFullname}
          />
          <div>
            Date of birth:
          </div>
          <input
            type="text"
            value={dob}
            onChange={this.handleInputDob}
          />
          <br />
          <button type="submit" disabled={!validate}>
            Register
          </button>
        </form>
      </div >
    )
  }
}

export default Register
