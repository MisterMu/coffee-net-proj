import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import MainRouter from './routers/main-router';
import { Topbar, MainMenu } from './components/layouts/';
import {ShopPage} from './pages/shop-page/shop-page.js'

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
          {/* <MainRouter /> */}
          <ShopPage />
        </div>
      </div>
    );
  }
}

export default App;
