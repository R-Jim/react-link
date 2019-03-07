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
import GuestRoute from '../GuestRoute';
import Setting from '../Setting';

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

export class BasicExample extends Component {
  render() {
    const { account } = this.props;
    const { accountType } = account;
    return (
      <Router>
        <Switch>
          <GuestRoute accountType={accountType} path="/login" component={Login} />
          <GuestRoute accountType={accountType} path="/register" component={Register} />

          <UserRoute exact accountType={accountType} path="/" component={Home} />
          <UserRoute accountType={accountType} path="/account" component={Account} />
          <UserRoute accountType={accountType} path="/profile" component={Profile} />
          <UserRoute exact accountType={accountType} path="/pokemon" component={Pokemon} />
          <UserRoute accountType={accountType} path="/pokemon/:id" component={Pokemon} />
          <UserRoute accountType={accountType} path="/setting" component={Setting} />

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
