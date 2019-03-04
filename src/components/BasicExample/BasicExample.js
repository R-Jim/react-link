import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import Account from '../../containers/Account';
import Profile from '../Profile';
import Pokemon from '../Pokemon';
import { ADMIN, USER, UNAUTHORIZED } from '../../reducers/Account';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class UserRoute extends Component {
  renderRoute = ({ ...props }) => {
    const { accountType, altPath, component: Component } = this.props;
    if (accountType === UNAUTHORIZED) return (<Redirect to="/login" />);
    return (
      <Component
        {...props}
      />
    )
  }
  render() {
    const { component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={this.renderRoute}
      />
    );
  }
}

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
          <UserRoute accountType={accountType} path="/pokemon:id" component={Pokemon} />
        </Switch>
      </Router>
    )
  }
}

export default BasicExample;
