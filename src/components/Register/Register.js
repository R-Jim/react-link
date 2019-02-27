import React from 'react'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: '',
      count: 5
    }
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer.bind(this), 1000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    const count = this.state.count - 1;
    this.setState({
      count: count
    });
    if (count == 0) {
      clearInterval(this.state.intervalId);
    }
  }
  ///afdsafdsaf
  render() {
    const count = this.state.count;
    if (count == 0)
      return <Redirect exact to={{ pathname: '/', state: { loggedIn: true } }} />
    return (
      <div>
        <h1>Waiting: {count}</h1>
      </div>
    )
  }
}

export default Register