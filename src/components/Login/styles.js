import styled from 'styled-components';
// styled.div(`css here`) === styled.div`css here`
// styled.div("css") !== styled.div"" << ko hieu dau nha
import { InputStyled } from '../styles'

export const LoginWrapper = styled.div`
`;

/**
 * const fullName = fullName + ' ' + lastName;
 * const fullName = `${fullName} ${lastName}`;
 */

export const FormInput = styled(InputStyled)`
  /* border-color: ${(props) => {
    if (props.error) return 'crimson';
    return 'blueviolet';
  }}; */
`;

export const IconStyled = styled.img`
    margin: 0 38.5%;
    width: 25%;
`;

export const PStyled = styled.p`
    color:gray;
    text-align:center;
`;