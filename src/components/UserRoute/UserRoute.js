import React, { Component } from 'react';
import { UNAUTHORIZED } from '../../reducers/Account';
import {
  Route,
  Redirect,
} from 'react-router-dom';

class UserRoute extends Component {
  renderRoute = ({ ...props }) => {
    const { accountType, component: Component } = this.props;
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

export default UserRoute;
