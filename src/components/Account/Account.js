import React from 'react';
import { AccountWrapper, SocialIconImg } from './styles';
import { Title, ButtonStyled } from '../styles';
import FBIcon from '../../icons/facebook.png';
import GGIcon from '../../icons/google+.png';
import TTIcon from '../../icons/twitter.png';
import PasswordChangeModal from '../../containers/PasswordChangeModal';

class Account extends React.Component {
  render() {
    const { account, toggleModal } = this.props;
    return (
      <AccountWrapper>
        <h1>Account info</h1>
        <Title>
          Username: {account.username}
        </Title>
        <Title>
          Email: {account.email}
        </Title>
        <ButtonStyled onClick={() => toggleModal(true)}>
          New password
        </ButtonStyled>
        <SocialIconImg src={FBIcon} />
        <SocialIconImg src={GGIcon} />
        <SocialIconImg src={TTIcon} />
        <PasswordChangeModal />
      </AccountWrapper>
    );
  }
}

export default Account;
