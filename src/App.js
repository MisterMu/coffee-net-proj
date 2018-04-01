import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import MainRouter from './routers/main-router';
import { Topbar, MainMenu } from './components/layouts/';

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
        <Topbar />
        <div style={{paddingLeft: 72, paddingRight: 72}}>
          <MainMenu>
            <Link to="/account"><Icon type="user" /> Account </Link>
            <Link to="/wishlist"><Icon type="star-o" /> Wishlist </Link>
            <Link to="/checkout"><Icon type="check-circle-o" /> Checkout </Link>
            <Link to="/cart"><Icon type="shopping-cart" /> Cart </Link>
            <Link to="/login"><Icon type="login" /> Login </Link>
          </MainMenu>
          <p>App content</p>
          <MainRouter />
        </div>
      </div>
    );
  }
}

export default App;
