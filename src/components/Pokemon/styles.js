import styled from 'styled-components';

export const PokemonCard = styled.div`
    width: 100%;
    height: 15%;
    background: linear-gradient(10deg, #62d2fa 0, #043eff);
    box-sizing: border-box;
    border: 2px solid #27278f;
    padding: 5px;
    text-align: center;
    margin: 0 auto 10px auto;
    color:white;
    font-weight:600;
    font-size:1.1em;
    min-height:100px;
    min-width:150px;
    max-width:370px;

    @media (max-width: 800px) {
    width:15%;
    height:40%;
    margin:10px;
    float:left;
  }

    :hover {
    background: linear-gradient(10deg, #043eff 0, #62d2fa);
    cursor: pointer;
    }
`;
