import React from 'react';
import { Table, InputNumber, Popconfirm, Button, Icon } from 'antd';
import './cart-page.scss';
import Axios from 'axios';

export class CartPage extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        data: []
      }
    }

    checkOut = () => {
      console.log('chk out this cart ->', this.state.data);
    }

    onDelete = (id) => {
      let items = this.state.data.filter((item) => item.key !== id);
      let tmp = items.map((item) => {
        return item.key;
      });
      localStorage.setItem('cart', JSON.stringify(tmp));
      this.setState({ data: items });
    }

    onNumberChange = (value, record) => {
      let tmp = this.state.data;
      let index = tmp.indexOf(record);
      tmp[index].qty = value;
      tmp[index].price = 
      this.setState({ data: tmp });
    }

    componentDidMount () {
      let cart = []
      let tmp = JSON.parse(localStorage.getItem("cart"));
      if (tmp) {
        tmp.map((id, i) => {
          Axios.get('/item/get/' + id).then((res) => {
            if (res.data) {
              cart[i] = {
                key: res.data[0].id,
                name: res.data[0].nameEn,
                ppp: res.data[0].price,
                price: '',
                qty: 1
              }
              this.setState({ data: cart });
            }
          })
        });
      }
    }
  
    render () {
      let data = this.state.data.map((item) => {
        item.price = '฿ ' + (item.ppp * item.qty);
        return item;
      });
      const column = [{
        title: 'Product',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },{
        title: 'Quantity',
        dataIndex: 'qty',
        key: 'qty',
        render: (qty, record) => <InputNumber min={0} max={99} defaultValue={1} onChange={(value) => this.onNumberChange(value, record)} />,

      }, {
        title: 'Delete',
        render: (text, record) => {
          return (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
              <Button icon="delete" type="danger" />
            </Popconfirm>
          );
        },
      }];
      return (
        <div className="cart-page">
          <Table dataSource={data} columns={column} />
          <Button onClick={this.checkOut}><Icon type="shopping-cart" /> Checkout</Button>
        </div>
      );
    }
  }