import React from 'react';
import './cart-page.scss';

export class CartPage extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        data: []
      }
    }

    getToCart = () => {
      let cart = []
      let tmp = localStorage.getItem("cart")
      cart = JSON.parse(tmp)
      return cart[0];
    }
  
    componentDidMount () {
      // get data from api
      console.log(this.getToCart())
    }
  
    render () {
      return (
        <div className="cart-page">

        </div>
      );
    }
  }