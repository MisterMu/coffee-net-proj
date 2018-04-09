import React from 'react';
import Axios from 'axios';

import { CategorySideMenu, OtherSideMenu, ItemGroup } from '../../components';
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
          name: item.nameEn,
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