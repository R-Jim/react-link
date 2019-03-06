import React, { Component } from 'react';
import Modal from 'react-modal';
import { Title, InputStyled, ButtonStyled } from '../styles';
import { ModalStyled } from './styles';

export class PasswordChangeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmNewPassword: '',
      errorConfirmPassword: '',
    }
  }

  handleInputOldPassword = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue('oldPassword', value);
  }

  handleInputNewPassword = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue('newPassword', value);
  }

  handleInputConfirmNewPassword = (e) => {
    const value = e.target.value;
    this.setState({
      confirmNewPassword: value
    })
  }

  submitForm = (e) => {
    const { changePassword, newPassword, clearError } = this.props;
    const { confirmNewPassword } = this.state;
    clearError();
    if (newPassword === confirmNewPassword) {
      changePassword();
      this.setState({
        errorConfirmPassword: '',
        confirmNewPassword: ''
      })
    } else {
      this.setState({
        errorConfirmPassword: 'Confirm password not match',
        confirmNewPassword: ''
      })
    }
    e.preventDefault();
  }

  render() {
    const { isOpen, toggleModal, oldPassword, newPassword, error } = this.props;
    const { confirmNewPassword, errorConfirmPassword } = this.state;
    return (
      <Modal isOpen={isOpen} onRequestClose={() => toggleModal(false)} style={ModalStyled}>
        <h1>Change password</h1>
        <Title style={{ "color": "red" }}>{error}</Title>
        <Title style={{ "color": "red" }}>{errorConfirmPassword}</Title>
        <form onSubmit={this.submitForm}>
          <Title>Old password</Title>
          <InputStyled
            type='password'
            onChange={this.handleInputOldPassword}
            value={oldPassword}
            error={!!error}
            required
          />
          <Title>New password</Title>
          <InputStyled
            type='password'
            onChange={this.handleInputNewPassword}
            value={newPassword}
            required
          />
          <Title>Confirm new password</Title>
          <InputStyled
            type='password'
            onChange={this.handleInputConfirmNewPassword}
            value={confirmNewPassword}
            error={!!errorConfirmPassword}
            required
          />
          <ButtonStyled type='submit'>Change password</ButtonStyled>
        </form>
      </Modal>
    )
  }
}

Modal.setAppElement('body');

export default PasswordChangeModal;
