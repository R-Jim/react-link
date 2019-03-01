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
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
    font-size: 1em;
    margin: 1em 0.5em;
    padding: 0.25em 1em;
    border:  2px solid ${props => props.theme.border};
    border-radius:3px;

    :disabled{
      background: "gray" ;
    }
`;

RegisterButton.defaultProps = {
  theme: NORMAL
}
