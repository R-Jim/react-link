import React, { Component } from 'react';
import Modal from 'react-modal';
import { Title, InputStyled, ButtonStyled } from '../styles';
import { ModalStyled } from './styles';
import { PASSWORD_CHANGE_FORM } from '../../reducers/form';

export class PasswordChangeModal extends Component {

  handleInputOldPassword = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue(PASSWORD_CHANGE_FORM, 'oldPassword', value);
  }

  handleInputNewPassword = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue(PASSWORD_CHANGE_FORM, 'newPassword', value);
  }

  handleInputConfirmNewPassword = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue(PASSWORD_CHANGE_FORM, 'confirmPassword', value);
  }

  submitForm = (e) => {
    const { submitForm } = this.props;
    // clearError();
    submitForm(PASSWORD_CHANGE_FORM);
    e.preventDefault();
  }

  render() {
    const { isOpen, updateFormProperty, oldPassword, newPassword, confirmPassword,
      error, } = this.props;
    return (
      <Modal isOpen={isOpen} onRequestClose={() => updateFormProperty(PASSWORD_CHANGE_FORM, 'isOpen', false)} style={ModalStyled}>
        <h1>Change password</h1>
        <Title style={{ "color": "red" }}>{error}</Title>
        <form onSubmit={this.submitForm}>
          <Title>Old password</Title>
          <InputStyled
            type='password'
            onChange={this.handleInputOldPassword}
            value={oldPassword}
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
            value={confirmPassword}
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
