import styled, { css } from 'styled-components';
// styled.div(`css here`) === styled.div`css here`
// styled.div("css") !== styled.div"" << ko hieu dau nha

export const InputStyled = styled.input`
  border-color: ${(props) => {
    if (props.error) return 'crimson';
    return '';
  }};
    width:100%;
    background-color: initial;
    background-image: -webkit-linear-gradient(left,#23a6d5,#23d5ab);
    background-image: linear-gradient(90deg,#23a6d5 0,#23d5ab);
    background-repeat: no-repeat;
    background-position: 0 calc(100% + 3px),0 0;
    background-size: 100% 3px;
    box-shadow: none;
    height: 27.5px;
    border: 0;
    outline: 0 none;
    -webkit-transition: border-color .2s linear;
    transition: border-color .2s linear;
    border-bottom: 1px solid #999;
    -webkit-font-smoothing: antialiased;
  :focus{
    /* border:none; */
    outline:none;
    border:2px solid darkcyan;
  }
`;

export const Button = styled.button`
  color: #fff;
    text-decoration: none;
    font-weight: 650;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: -webkit-linear-gradient(left,#23a6d5,#23d5ab);
    background-image: linear-gradient(90deg,#23a6d5 0,#23d5ab);
    border-radius: 25px;
    margin: 30px 0 0 0;
    font-size: 1em;
    border: none;
    outline: none;
    cursor: pointer;
  :hover{
    cursor:pointer;
  }
`;

export const MainContainWrapperStyled = styled.div`
  font-family:-apple-system,BlinkMacSystemFont,Open sans,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  width: fit-content;
  /* margin: auto; */
  align-items: center;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow:0 3px 10px 3px #e7e7e7;
  background:white;
  height: fit-content;
  min-height: 480px;
  /* max-height: 540px; */
  width: 300px;
`;

export const Title = styled.p`
  font-size:1em;
  margin: 5px 0;
  color:grey;
`;

export const HyperLink = styled.span`
  font-size: 1em;
  text-decoration: none;
  :hover{
    cursor:pointer
  }
  a{
    text-decoration:none;
    color:#189577;
    font-weight:600;
  }
`;

export const BodyWrapperStyled = styled.div`
  /* width:100%; */
  margin: 0;
  padding: 0;
  height:-webkit-fill-available;
  margin:-7;
  background:#f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderStyled = styled.p`
    text-align: center;
    font-size: 1.6em;
    margin-top: 0;
    color: gray;
`;