import React, { Component } from 'react';
import { AvatarStyled, AvatarImgWrapper, AvatarImg, AvatarNameWrapper } from './styles';

export class Avatar extends Component {
  render() {
    return (
      <AvatarStyled>
        <AvatarImgWrapper>
          <AvatarImg />
        </AvatarImgWrapper>
        <AvatarNameWrapper>Trainer name</AvatarNameWrapper>
      </AvatarStyled>
    )
  }
}

export default Avatar;
