import React from 'react';
import { Divider } from 'antd';
import { ShopListMenu, ShopListTable } from '../../components';
import './styles.scss';
import Axios from 'axios';

export class ShopListPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [{}],
      quantity: [0, 0, 0]
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
              total_income: shop.totalIncome,
              delivered: shop.percentageDelivered + '%',
              status: (shop.approved)? 'Approved' : 'Pending',
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
    let quantity = this.state.quantity;
    if (item.approved) {
      method = Axios.post('/shop/remove/' + id, {});
      quantity[1] -= 1;
    } else {
      method = Axios.post('./shop/remove/' + id, {});
      quantity[2] -= 1;
    }
    quantity[0] -= 1;
    method.then((res) => {
      if (res.data.success) {
        let tmp = this.state.data;
        tmp = tmp.filter((obj) => obj !== item);
        this.setState({ data: tmp, quantity: quantity });
      }
    }).catch(err => console.error(err));
  }

  componentDidMount () {
    document.title = 'Admin'
    Axios.get('/shop/all').then((res) => {
      if (res.data) {
        console.log(res.data);
        let quantity = [res.data.length, 0, 0];
        let tmp = res.data.map((shop, i) => {
          if (shop.approved) {
            quantity[1] += 1;
          } else {
            quantity[2] += 1;
          }
          return {
            key: shop.id + '',
            name: shop.name,
            total_income: shop.totalIncome,
            delivered: shop.percentageDelivered + '%',
            status: (shop.approved)? 'Approved' : 'Pending',
            approved: shop.approved
          }
        });
        this.setState({ data: tmp, quantity: quantity });
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
          <ShopListMenu action={this.filtering} quantity={this.state.quantity} />
        </section>
        <section className="content">
          <ShopListTable data={this.state.data} action={cmd} />
        </section>
      </div>
    );
  }
}