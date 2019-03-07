import styled from 'styled-components';
import { ButtonStyled, Title } from '../styles';

export const ProfileWrapper = styled.div`
width: fit-content;
align-items: center;
padding: 20px 30px;
border-radius: 10px;
box-shadow:0 3px 10px 3px #e7e7e7;
background:white;
height: fit-content;
min-height: 480px;
width: 350px;
margin:auto;
`;

export const ProfileButtonStyled = styled(ButtonStyled)`
  width:20%;
  float:right;
  margin-left:10px;
`;

export const ProfileTitleValue = styled(Title)`
  color: black;
  font-size:1.2em;
  min-height:1.2em;
`;

export const ProfileAvatar = styled.img`
  width:100px;
  height:100px;
`;