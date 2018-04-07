import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { MainMenu, CategorySideMenu, OtherSideMenu, ItemGroup } from '../../components';
import './shop-page.scss';


export class ShopPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    Axios.get('/item/all').then((val) => {
      let items = val.data.map((item) => {
        return {
          id: item.id,
          name: item.nameEn + ' ' + item.size,
          price: item.price + ' ฿',
          img_path: item.image
        }
      });
      this.setState({ items: items });
    });
  }

  render() {
    return (
      <div className="shop-page">
        <section>
          <MainMenu>
            <Link to="/account"><Icon type="user" /> Account </Link>
            <Link to="/wishlist"><Icon type="star-o" /> Wishlist </Link>
            <Link to="/checkout"><Icon type="check-circle-o" /> Checkout </Link>
            <Link to="/cart"><Icon type="shopping-cart" /> Cart </Link>
            <Link to="/login"><Icon type="login" /> Login </Link>
          </MainMenu>
          <div className="banner-img">BANNER</div>
        </section>
        <div className="layout">
          <section>
            <CategorySideMenu />
            <OtherSideMenu />
          </section>
          <section>
            <ItemGroup data={this.state.items} title="Items" />
          </section>
        </div>
      </div>
    );
  }
}