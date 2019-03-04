import React, { Component } from 'react'
import { ADMIN, UNAUTHORIZED } from '../../reducers/Account';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export class AdminRoute extends Component {
  renderRoute = ({ ...props }) => {
    const { accountType, altPath, component: Component } = this.props;
    if (accountType === UNAUTHORIZED) return (<Redirect to="/login" />);
    if (accountType !== ADMIN) return (<Redirect to="/" exact />);
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

export default AdminRoute
