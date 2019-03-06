import styled from 'styled-components';

export const LeftPanel = styled.div`
  width: 20%;
  float: left;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  text-align: center;
  overflow:scroll;

  @media (max-width: 800px) {
    width:100%;
    height:20%;
  }
`;

export const CenterPanel = styled.div`
  width: 60%;
  float: left;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  @media (max-width: 800px) {
    width:100%;
    height:60%;
  }
`;

export const RightPanel = styled.div`
  width: 20%;
  float: left;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow:scroll;
  @media (max-width: 800px) {
    width:100%;
    height:20%;
  }
`;

export const HomeContentWrapper = styled.div`
  width:100%;
  height:100%;
`;

export const ActionButtonWrapper = styled.div`
  width:100%;
  height:20%;
`;

export const ActionButton = styled.button`
    padding: 10px;
    background: linear-gradient(0, white 0, gray);
    color: white;
    font-size: 1.5em;
    font-weight: 600;
    width: 25%;
    float: left;
    outline: 2px solid white;
    box-sizing: border-box;
    border: 2px solid gray;
    text-align: center;
    vertical-align: middle;
    height: 100%;
`;

export const PokemonWrapper = styled.div`
    height:100%;
    width:100%;
    margin:auto;

    @media (max-width: 800px) {
    width:90%;
    height:60%;
  }
`;
