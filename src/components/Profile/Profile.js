import React, { Component } from 'react';
import {
  ProfileTitleValue, ProfileWrapper,
  ProfileAvatar,
  ProfileButtonStyled,
} from './styles';
import { Title, InputStyled } from '../styles';
import { EDIT_PROFILE_FORM } from '../../reducers/form';
import { getCountryList } from '../../commons/api';
import Select from 'react-select';
import avatar from '../../icons/facebook.png';

export class Profile extends Component {
  constructor(props) {
    super(props);
    getCountryList().then(res => {
      this.handleLoadAllCounttry(res.data);
    });
    this.state = {
      isEditing: false,
      countries: [],
      selectedOption: null,
    }
  }

  handleLoadAllCounttry = (countries) => {
    this.setState({
      countries: countries.map((country) => { return { value: country.name, label: country.name } })
    })
  }

  handleInputFullname = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue(EDIT_PROFILE_FORM, 'fullname', value);
  }
  handleInputDob = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue(EDIT_PROFILE_FORM, 'dob', value);
  }
  handleInputAddress = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue(EDIT_PROFILE_FORM, 'address', value);
  }
  handleInputEmail = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue(EDIT_PROFILE_FORM, 'email', value);
  }
  handleInputPhone = (e) => {
    const { updateFormValue } = this.props;
    const value = e.target.value;
    updateFormValue(EDIT_PROFILE_FORM, 'phone', value);
  }

  hanleInputCountry = (selectedOption) => {
    const { updateFormValue } = this.props;
    updateFormValue(EDIT_PROFILE_FORM, 'country', selectedOption.value);
    this.setState({
      selectedOption
    })
  }

  handleRenderFieldValue = (value, updateFormValue, type, isRequire, regex) => {
    const { isEditing } = this.state;
    if (isEditing) {
      return (
        <InputStyled type={type} value={value} onChange={updateFormValue} required={isRequire} pattern={regex} />
      )
    }
    return (
      <ProfileTitleValue>{value}</ProfileTitleValue>
    );
  }

  handleEditClick = () => {
    const { loadDataToForm, account } = this.props;
    const { countries } = this.state;
    loadDataToForm(EDIT_PROFILE_FORM, account);
    this.setState({
      isEditing: true,
      selectedOption: countries.find((country) => country.value === account.country)
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
    const { isEditing, countries, selectedOption } = this.state;
    const data = (isEditing) ? form.data : account;
    return (
      <ProfileWrapper>
        <form onSubmit={this.handleSubmitForm}>
          <Title>Avatar</Title>
          <ProfileAvatar src={avatar} />
          <Title>Full name:</Title>
          {this.handleRenderFieldValue(data.fullname, this.handleInputFullname, 'text', true)}
          <Title>Date of birth:</Title>
          {this.handleRenderFieldValue(data.dob, this.handleInputDob, 'date')}
          <Title>Cake day:</Title>
          <ProfileTitleValue>{data.cakeDay}</ProfileTitleValue>
          <Title>Address:</Title>
          {this.handleRenderFieldValue(data.address, this.handleInputAddress, 'text')}
          <Title>Phone No.:</Title>
          {this.handleRenderFieldValue(data.phone, this.handleInputPhone, 'text', false, '\\d{8,}')}
          <Title>Email:</Title>
          {this.handleRenderFieldValue(data.email, this.handleInputEmail, 'email', true)}
          <Title>Country:</Title>
          {(isEditing) ?
            <Select
              value={selectedOption}
              onChange={this.hanleInputCountry}
              options={countries}
            />
            : <ProfileTitleValue>{data.country}</ProfileTitleValue>
          }
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
