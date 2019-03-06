import styled from 'styled-components';
// styled.div(`css here`) === styled.div`css here`
// styled.div("css") !== styled.div"" << ko hieu dau nha
import { InputStyled } from '../styles'

export const LoginWrapper = styled.div`
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

export const FormInput = styled(InputStyled)`
`;

export const IconStyled = styled.img`
    margin: 0 38.5%;
    width: 25%;
`;

export const PStyled = styled.p`
    color:gray;
    text-align:center;
`;
