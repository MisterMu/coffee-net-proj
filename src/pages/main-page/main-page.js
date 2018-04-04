import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { MainMenu, ItemGroup } from '../../components/layouts';

import './main-page.scss';

export class MainPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5]
    }
  }

  componentDidMount () {
    // get data from api
  }

  render () {
    return (
      <div className="main-page">
        <MainMenu>
          <Link to="/account"><Icon type="user" /> Account </Link>
          <Link to="/wishlist"><Icon type="star-o" /> Wishlist </Link>
          <Link to="/checkout"><Icon type="check-circle-o" /> Checkout </Link>
          <Link to="/cart"><Icon type="shopping-cart" /> Cart </Link>
          <Link to="/login"><Icon type="login" /> Login </Link>
        </MainMenu>
        <div className="banner-img">
          BANNER
        </div>
        <ItemGroup data={this.state.data} />
      </div>
    );
  }
}