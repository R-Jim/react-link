import React from 'react'
import PropTypes from 'prop-types'
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'
import Account from './containers/Account'
import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/account" component={Account} />
    </Switch>
  </Router>
)
export default BasicExample;