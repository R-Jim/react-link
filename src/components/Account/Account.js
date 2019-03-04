import React from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { username, email } = this.props;
    return <div>
      <h1>Account info</h1>
      <div>
        Username
      </div>
      <input
        value={username}
        disabled
      />
      <div>
        Email
      </div>
      <input
        value={email}
        disabled
      />
      <button>
        Change password
      </button>
    </div>
  }
}

export default Account;