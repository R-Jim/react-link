import React, { Component } from 'react';
import Icon from '../../icon.png';
import moment from 'moment';

const dateFormat = 'MMMM Do YYYY, h:mm:ss a';

export class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment().format(dateFormat)
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: moment().format(dateFormat)
    })
  }

  render() {
    const { currentTime } = this.state;
    return (
      <div>
        <div>{currentTime}</div>
        <div>version</div>
        <div>
          <img src={Icon} />
        </div>
        <button>logout</button>
      </div>
    )
  }
}

export default Setting;
