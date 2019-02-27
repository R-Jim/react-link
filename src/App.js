import React from 'react';
import './App.css';
import BasicExample from './BasicExample';
import configureStore from './stores';
import { Provider } from 'react-redux';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BasicExample />
      </Provider>
    );
  }
}

export default App;
