import React from 'react';
import { Divider } from 'antd';
import { ShopListMenu, ShopListTable } from '../../components';
import './styles.scss';
import Axios from 'axios';

export class ShopListPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [{}]
    };
  }

  filtering = (filter) => {
    Axios.get('/shop/all').then((res) => {
      console.log(res);
      if (res.data) {
        let tmp = [];
        res.data.forEach(shop => {
          if (filter.key === '1' || shop.approved === (filter.key === '2')) {
            tmp.push({
              key: shop.id + '',
              name: shop.name,
              revenue: '1000 ฿',
              approved: shop.approved
            });
          }
        });
        console.log(tmp);
        this.setState({ data: tmp });
      }
    });
  }

  approve = (item) => {
    let id = item.key;
    Axios.post('/shop/approve/' + id, {}).then((res) => {
      if (res.data.success) {
        let tmp = this.state.data;
        let index = tmp.indexOf(item);
        tmp[index].approved = true;
        this.setState({ data: tmp });
      }
    });
  }

  delete = (item) => {
    let id = item.key;
    let method = {};
    if (item.approved) {
      method = Axios.post('/shop/remove/' + id, {});
    } else {
      method = Axios.post('./shop/remove/' + id, {});
    }
    method.then((res) => {
      if (res.data.success) {
        let tmp = this.state.data;
        tmp = tmp.filter((obj) => obj !== item);
        this.setState({ data: tmp });
      }
    }).catch(err => console.error(err));
  }

  componentDidMount () {
    Axios.get('/shop/all').then((res) => {
      if (res.data) {
        let tmp = res.data.map((shop) => {
          return {
            key: shop.id + '',
            name: shop.name,
            revenue: '1000 ฿',
            approved: shop.approved
          }
        });
        this.setState({ data: tmp });
      }
    }).catch(err => console.error(err));
  }

  render () {
    let cmd = {
      approve: this.approve,
      delete: this.delete
    }
    return (
      <div className="shop-list-page">
        <section>
          <ShopListMenu action={this.filtering} />
        </section>
        <section className="content">
          <ShopListTable data={this.state.data} action={cmd} />
        </section>
      </div>
    );
  }
}