import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import Account from '../../containers/Account';
import Profile from '../Profile';
import Pokemon from '../Pokemon';
import UserRoute from '../UserRoute';
import AdminRoute from '../AdminRoute';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export class BasicExample extends Component {
  render() {
    const { accountType } = this.props;
    return (
      <Router>
        <Switch>
          <UserRoute exact accountType={accountType} path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <UserRoute accountType={accountType} path="/account" component={Account} />
          <UserRoute accountType={accountType} path="/profile" component={Profile} />
          <UserRoute exact accountType={accountType} path="/pokemon" component={Pokemon} />
          <UserRoute accountType={accountType} path="/pokemon/:id" component={Pokemon} />
          <AdminRoute exact accountType={accountType} path="/admin" component={Pokemon} />
          <AdminRoute exact accountType={accountType} path="/admin/pokemon" component={Pokemon} />
          <AdminRoute accountType={accountType} path="/admin/pokemon/:id" component={Pokemon} />
          <AdminRoute exact accountType={accountType} path="/admin/user" component={Pokemon} />
          <AdminRoute accountType={accountType} path="/admin/user/:id" component={Pokemon} />
        </Switch>
      </Router>
    )
  }
}

export default BasicExample;
