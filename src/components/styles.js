import styled, { css } from 'styled-components';
// styled.div(`css here`) === styled.div`css here`
// styled.div("css") !== styled.div"" << ko hieu dau nha

export const InputStyled = styled.input`
  border-color: ${(props) => {
    if (props.error) return 'crimson';
    return '';
  }};
  padding:10px;
  border-radius:5px;
  background:none;

  :focus{
    /* border:none; */
    outline:none;
    border:2px solid darkcyan;
  }
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius:3px;
  background:white;

  :hover{
    cursor:pointer;
  }
`;

export const Div = styled.div`
  font-family:monospace;
  width: fit-content;
  margin: auto;
  align-items: center;
  padding: 20px 120px;
  border: 2px solid;
  border-radius: 10px;
`;

export const Title = styled.p`
  font-size:1.2em;
  margin: 5px 0;
`;

export const HyperLink = styled.span`
  padding:10px;
  font-size:1.5em;
  :hover{
    cursor:pointer
  }
`;
