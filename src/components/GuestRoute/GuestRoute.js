import React, { Component } from 'react'
import { ADMIN, UNAUTHORIZED } from '../../reducers/Account';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export class GuestRoute extends Component {
  renderRoute = ({ ...props }) => {
    const { accountType, component: Component } = this.props;
    if (accountType !== UNAUTHORIZED) return (<Redirect to="/" />);
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

export default GuestRoute;
