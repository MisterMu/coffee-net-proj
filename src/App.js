import React, { Component } from 'react';
import MainRouter from './routers/main-router';
import { Topbar, Footer } from './components/layouts/';
import './App.scss';
import * as axios from 'axios';

axios.defaults.baseURL = "https://se-coffee-backend.herokuapp.com/api";

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
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
