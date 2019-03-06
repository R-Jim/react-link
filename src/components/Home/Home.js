import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeContentWrapper,
  LeftPanel, CenterPanel, RightPanel,
  ActionButtonWrapper, ActionButton
} from './styles';
import { ButtonStyled } from '../styles';
import MainScreen from '../MainScreen';
import Pokemon from '../Pokemon';
import Avatar from '../Avatar';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: false,
    }
  }


  static getDerivedStateFromProps(props, state) {
    const loggedIn = props.loggedIn;
    const locationState = props.location.state;
    if (loggedIn && locationState) {
      return { ...state, loggedIn: true, username: locationState.username }
    }
    return state;
  }


  handleLoggin = () => {
    this.setState({
      loggedIn: true
    })
  }

  handleLoggout = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <HomeContentWrapper>
        <LeftPanel>
          <Avatar />
          <ButtonStyled><Link to="/account">Account</Link></ButtonStyled>
          <ButtonStyled><Link to="/profile">Profile</Link></ButtonStyled>
          <ButtonStyled><Link to="/setting">Setting</Link></ButtonStyled>
        </LeftPanel>
        <CenterPanel>
          <MainScreen />
          <ActionButtonWrapper>
            <ActionButton>Battle</ActionButton>
            <ActionButton>Play</ActionButton>
            <ActionButton>Eat</ActionButton>
            <ActionButton>Clean</ActionButton>
          </ActionButtonWrapper>
        </CenterPanel>
        <RightPanel>
          <Pokemon />
          <Pokemon />
          <Pokemon />
        </RightPanel>
      </HomeContentWrapper>
    )
  }
}

export default Home
