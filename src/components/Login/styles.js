import styled, { css } from 'styled-components';
// styled.div(`css here`) === styled.div`css here`
// styled.div("css") !== styled.div"" << ko hieu dau nha

export const LoginWrapper = styled.div`
`;

/**
 * const fullName = fullName + ' ' + lastName;
 * const fullName = `${fullName} ${lastName}`;
 */

export const FormInput = styled.input`
  border-color: ${(props) => {
    if (props.error) return 'crimson';
    return 'blueviolet';
  }};
`;
