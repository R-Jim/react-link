import styled from 'styled-components';
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

export const ButtonStyled = styled.button`
  color: #fff;
    text-decoration: none;
    font-weight: 650;
    width: 100%;
    min-width:150px;
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
  a{
    text-decoration:none;
    color:white;
  }
`;

export const MainContainWrapperStyled = styled.div`
  font-family:-apple-system,BlinkMacSystemFont,Open sans,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const HeaderStyled = styled.p`
    text-align: center;
    font-size: 1.6em;
    margin-top: 0;
    color: gray;
`;
export const BodyContentWrapper = styled.div`
  height:100%;
  width:100%;
`;