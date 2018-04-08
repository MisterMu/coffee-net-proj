import React from 'react';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import './main-menu.scss';

export class MainMenu extends React.Component {
  render () {
    return (
      <div className="main-menu">
        <div className="menu-content">
          <Link to="/">
            <div className="logo">
              <img src={this.props.img || require('../../../assets/images/logo.png')} alt="logo" />
            </div>
          </Link>
          <div className="menu">
            {this.props.children}
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}