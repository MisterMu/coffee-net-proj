import React from 'react';
import { ItemGroup } from '../../components/layouts';
import Axios from 'axios';

import './main-page.scss';

export class MainPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      top_item: [],
      stores: []
    }
  }

  componentDidMount () {
    document.title = "Coffee-Net"
    Axios.get('/item/top/5').then((val) => {
      let tmp = val.data.map((item) => {
        return {
          id: item.id,
          name: item.nameEn,
          price: item.price + ' ฿',
          img_path: item.image
        }
      });
      this.setState({ top_item: tmp, ready: true });
    }).catch(err => console.error(err));
    Axios.get('/shop/all').then((res) => {
      if (res.data) {
        let tmp = res.data.map((shop) => {
          return {
            id: shop.id,
            name: shop.name,
            img: shop.logo
          }
        });
        this.setState({ stores: tmp });
      }
    }).catch(err => console.error(err));
  }

  render () {
    return (
      <div className="main-page">
        <section>
          <div className="banner-img">
            <img src={require('../../assets/images/banner.jpg')} alt="official banner" />
          </div>
        </section>
        <section>
          <ItemGroup data={this.state.top_item} title="Top 5 Products!!" />
          <ItemGroup type="stores" data={this.state.stores} title="Our Stores" />
        </section>
      </div>
    );
  }
}