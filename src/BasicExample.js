import React from 'react';
// import PropTypes from 'prop-types'
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Account from './containers/Account';
import Profile from './components/Profile';
import Pokemon from './components/Pokemon';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const BasicExample = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/account" component={Account} />
      <Route path="/profile" component={Profile} />
      <Route path="/pokemon" component={Pokemon} />
      <Route path="/pokemon/:id" component={Pokemon} />
    </Switch>
  </Router>
)
export default BasicExample;
