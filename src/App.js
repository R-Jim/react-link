import React from 'react';
import BasicExample from './containers/BasicExample';
import configureStore from './stores';
import { Provider } from 'react-redux';
import { BodyContentWrapper, MainContainWrapperStyled } from './components/styles';

const { store } = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BodyContentWrapper>
          <MainContainWrapperStyled>
            <BasicExample />
          </MainContainWrapperStyled>
        </BodyContentWrapper>
      </Provider>
    );
  }
}

export default App;
