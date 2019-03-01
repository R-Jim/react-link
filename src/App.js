import React from 'react';
import BasicExample from './BasicExample';
import configureStore from './stores';
import { Provider } from 'react-redux';
import { MainContainWrapperStyled } from './components/styles';
const { store } = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainWrapperStyled>
          <BasicExample />
        </MainContainWrapperStyled>
      </Provider>
    );
  }
}

export default App;
