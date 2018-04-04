import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { MainMenu, ItemGroup } from '../../components/layouts';

import './main-page.scss';

export class MainPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    // get data from api
    let tmp = [1, 2, 3, 4, 5].map((i) => {
      return {
        id: '00' + i,
        name: 'product ' + i,
        price: '200 Baht'
      }
    });
    this.setState({ data: tmp });
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