import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import MainRouter from './routers/main-router';
import { Topbar, MainMenu, Footer } from './components/layouts/';
import {ShopPage} from './pages/shop-page/shop-page.js'
import './App.scss';
import * as axios from 'axios';

axios.defaults.baseURL = "http://se-coffee-backend.herokuapp.com/api";

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      ready: true
    }
  }

  render() {
    return (
      <div className="body">
        <Topbar />
        <div style={{paddingLeft: 72, paddingRight: 72}}>
          <MainRouter /> 
          {/* <ShopPage /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
