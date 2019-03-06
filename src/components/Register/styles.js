import styled from 'styled-components';
import { ButtonStyled } from '../styles';

export const NORMAL = {
  bg: "white",
  color: "gray",
  border: "gray",
};
export const PRIMARY = {
  bg: "darkcyan",
  color: "white",
  border: "darkcyan",
};
export const DISABLED = {
  bg: "#444444",
  color: "white",
  border: "darkgray",
};

export const RegisterButton = styled(ButtonStyled)`
  background: ${props => props.buttonType.bg};
  color: ${props => props.buttonType.color};
`;

RegisterButton.defaultProps = {
  buttonType: NORMAL
}

export const RegisterWrapper = styled.div`
  width: fit-content;
  align-items: center;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow:0 3px 10px 3px #e7e7e7;
  background:white;
  height: fit-content;
  min-height: 480px;
  width: 300px;
  margin:auto;
`;
