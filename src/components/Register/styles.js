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
  bg: "gray",
  color: "white",
  border: "gray",
};

export const RegisterButton = styled(Button)`
  background: ${props => props.buttonType.bg};
  color: ${props => props.buttonType.color};
    font-size: 1em;
    margin: 1em 0.5em;
    padding: 0.25em 1em;
    border:  2px solid ${props => props.buttonType.border};
    border-radius:3px;

    :disabled{
      background: "gray" ;
    }
`;

RegisterButton.defaultProps = {
  buttonType: NORMAL
}
