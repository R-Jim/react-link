import styled, { css } from 'styled-components';
import { Button } from '../styles';

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

export const RegisterButton = styled(Button)`
  background: ${props => props.buttonType.bg};
  color: ${props => props.buttonType.color};
`;

RegisterButton.defaultProps = {
  buttonType: NORMAL
}
