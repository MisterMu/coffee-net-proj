import React from 'react';
import { ItemGroup } from '../../components/layouts';
import * as axios from 'axios';

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
    axios.get('/item/top/5').then((val) => {
      let tmp = val.data.map((item) => {
        return {
          id: item.id,
          name: item.nameEn,
          price: item.price + ' ฿',
          img_path: item.image
        }
      });
      this.setState({ top_item: tmp, ready: true });
    }).catch(err => console.log(err));
    let tmp = [0, 1, 2, 3].map((i) => {
      return {
        id: i,
        name: 'store ' + i,
        img: ''
      }
    });
    this.setState({ stores: tmp });
  }

  render () {
    return (
      <div className="main-page">
        <section>
          <div className="banner-img">
            BANNER
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