import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { MainMenu } from '../../components/layouts';

export class MainPage extends React.Component {
  render () {
    return (
      <div>
        <MainMenu>
          <Link to="/account"><Icon type="user" /> Account </Link>
          <Link to="/wishlist"><Icon type="star-o" /> Wishlist </Link>
          <Link to="/checkout"><Icon type="check-circle-o" /> Checkout </Link>
          <Link to="/cart"><Icon type="shopping-cart" /> Cart </Link>
          <Link to="/login"><Icon type="login" /> Login </Link>
        </MainMenu>
        <h2>Main Page</h2>
      </div>
    );
  }
}