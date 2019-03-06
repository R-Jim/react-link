import React, { Component } from 'react';
import { MainScreenStyled } from './styles';

export class MainScreen extends Component {
  render() {
    return (
      <MainScreenStyled>
        <span>Selected Pokemon</span>
        <br />
        <span>Shown here</span>
      </MainScreenStyled>
    )
  }
};

export default MainScreen;
