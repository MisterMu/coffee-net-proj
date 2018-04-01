import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainRouter from './routers/main-router';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      ready: true
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Root</Link></li>
          <li><Link to="/test">Test Router</Link></li>
          <li><Link to="/login">Log in</Link></li>
        </ul>
        <p>App content</p>
        <MainRouter />
      </div>
    );
  }
}

export default App;
