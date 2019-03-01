import React from 'react';
import BasicExample from './BasicExample';
import configureStore from './stores';
import { Provider } from 'react-redux';
import { Div } from './components/styles';
const { store } = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Div>
          <BasicExample />
        </Div>
      </Provider>
    );
  }
}

export default App;
