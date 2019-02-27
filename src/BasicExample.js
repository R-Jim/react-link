import React from 'react'
import PropTypes from 'prop-types'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// const Home = () => (
//   <div>
//     <h1>Home</h1>
//   </div>
// )



const About = () => (
  <div>
    <h1>About</h1>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

Topic.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

const Topics = ({ match }) => (
  <div>
    <h2>Topic</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
                </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
                </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
                </Link>
      </li>
    </ul>
    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

Topics.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)
export default BasicExample;