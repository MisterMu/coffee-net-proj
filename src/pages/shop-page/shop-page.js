import React from 'react';
import Axios from 'axios';

import { CategorySideMenu, OtherSideMenu, ItemGroup } from '../../components';
import './shop-page.scss';


export class ShopPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [],
      shop: {}
    }
  }

  filterByCat = (cat) => {
    this.setState({ items: [] });
    Axios.get('/item/findByCat/' + cat + '/' + this.props.shop_id).then((res) => {
      console.log(res);
      let items = res.data.map((item, i) => {
        return {
          id: item.id,
          name: item.nameEn,
          price: item.price + ' ฿',
          img_path: item.image,
          desc: item.desc,
          shop_name: item.shop.name
        }
      });
      this.setState({ items: items });
    });
  }

  componentDidMount() {
    Axios.get('/shop/get/' + this.props.shop_id).then((val) => {
      console.log(val);
      let items = val.data[0].items;
      let tmp = items.map((item) => {
        return {
          id: item.id,
          name: item.nameEn,
          price: item.price + ' ฿',
          img_path: item.image,
          desc: item.desc,
          shop_name: val.data[0].name
        }
      });
      let shop = {
        name: val.data[0].name,
        logo: val.data[0].logo,
        banner: val.data[0].banner
      }
      this.setState({ items: tmp, shop: shop });
    });
  }

  render() {
    return (
      <div className="shop-page">
        <section>
          <div className="banner-img">
            <img src={this.state.shop.banner} alt={this.state.shop.name + " banner"} />
          </div>
        </section>
        <div className="layout">
          <section>
            <CategorySideMenu filter={this.filterByCat} />
          </section>
          <section>
            <ItemGroup data={this.state.items} title="Items" />
          </section>
        </div>
      </div>
    );
  }
}