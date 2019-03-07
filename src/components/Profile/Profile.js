import React, { Component } from 'react';
import {
  ProfileTitleValue, ProfileWrapper,
  RowStyled,
  ProfileButtonStyled,
} from './styles';
import { Title, InputStyled } from '../styles';
import { EDIT_PROFILE_FORM } from '../../reducers/form';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  handleInputFullname = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue(EDIT_PROFILE_FORM, 'fullname', value);
  }

  handleRenderFieldValue = (value, updateFormValue) => {
    const { isEditing } = this.state;
    if (isEditing) {
      return (
        <InputStyled value={value} onChange={updateFormValue} />
      )
    }
    return (
      <ProfileTitleValue>{value}</ProfileTitleValue>
    );
  }

  handleEditClick = () => {
    const { loadDataToForm, account } = this.props;
    loadDataToForm(EDIT_PROFILE_FORM, account);
    this.setState({
      isEditing: true
    })
  }

  handleCancleEdit = () => {
    this.setState({
      isEditing: false
    })
  }

  handleSubmitForm = (e) => {
    const { submitForm } = this.props;
    submitForm(EDIT_PROFILE_FORM);
    this.handleCancleEdit();
    e.preventDefault();
  }

  render() {
    const { account, form } = this.props;
    const { isEditing } = this.state;
    const data = (isEditing) ? form.data : account;
    return (
      <ProfileWrapper>
        <form onSubmit={this.handleSubmitForm}>
          <Title>Avatar</Title>
          <Title>Full name:</Title>
          {this.handleRenderFieldValue(data.fullname, this.handleInputFullname)}
          <Title>Date of birth:</Title>
          <ProfileTitleValue>{data.dob}</ProfileTitleValue>
          <Title>Cake day:</Title>
          <ProfileTitleValue>{data.cakeDay}</ProfileTitleValue>
          <Title>Address:</Title>
          <ProfileTitleValue>{data.address}</ProfileTitleValue>
          <Title>Phone No.:</Title>
          <ProfileTitleValue>{data.phone}</ProfileTitleValue>
          <Title>Email:</Title>
          <ProfileTitleValue>{data.email}</ProfileTitleValue>
          <Title>Country:</Title>
          <ProfileTitleValue>{data.email}</ProfileTitleValue>
          {(isEditing) ?
            <div>
              <ProfileButtonStyled type='submit'>Save</ProfileButtonStyled>
              <ProfileButtonStyled type='button' onClick={this.handleCancleEdit}>Cancel</ProfileButtonStyled>
            </div>
            :
            <ProfileButtonStyled type='button' onClick={this.handleEditClick}>Edit</ProfileButtonStyled>}
        </form>
      </ProfileWrapper >
    )
  }
}

export default Profile;
