import React from 'react';
import { Table, InputNumber, Popconfirm, Button, Icon } from 'antd';
import './cart-page.scss';

export class CartPage extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        data: []
      }
    }

    checkOut = () => {
      console.log('chk out')
    }

    onDelete = (id) => {
      console.log('del', id);
      let items = this.state.data.filter((item) => item.key !== id);
      let tmp = items.map((item) => {
        return item.key;
      });
      localStorage.setItem('cart', JSON.stringify(tmp));
      this.setState({ data: items });
    }

    onNumberChange = (value, record) => {
      console.log(value, record);
    }

    getToCart = () => {
      let cart = []
      let tmp = JSON.parse(localStorage.getItem("cart"));
      if (tmp) {
        cart = tmp.map((id) => {
          if (!cart.includes(id)) {
            return {
              key: '' + id,
              name: 'product ' + id,
              price: '฿' + (200 * id),
              qty: 1
          };
          }
        });
      }
      return cart;
    }

    componentDidMount () {
      let tmp = this.getToCart();
      this.setState({ data: tmp });
    }
  
    render () {
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
        render: (rec) => <InputNumber min={0} max={99} defaultValue={1} onChange={(value) => this.onNumberChange(value, rec)} />,

      }, {
        render: (text, record) => {
          return (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
              <a href="#">Delete</a>
            </Popconfirm>
          );
        },
      }];
      return (
        <div className="cart-page">
          <Table dataSource={this.state.data} columns={column} />
          <Button onClick={this.checkOut}><Icon type="shopping-cart" /> Checkout</Button>
        </div>
      );
    }
  }