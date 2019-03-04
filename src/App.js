import React from 'react';
import BasicExample from './BasicExample';
import configureStore from './stores';
import { Provider } from 'react-redux';
import { MainContainWrapperStyled, BodyWrapperStyled } from './components/styles';
const { store } = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BodyWrapperStyled>
          <MainContainWrapperStyled>
            <BasicExample />
          </MainContainWrapperStyled>
        </BodyWrapperStyled>
      </Provider>
    );
  }
}

export default App;
