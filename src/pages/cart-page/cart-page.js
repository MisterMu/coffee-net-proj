import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { MainMenu } from '../../components/layouts';

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
          <MainMenu>
            <Link to="/"><Icon type="home" /> Home </Link>
            <Link to="/cart"><Icon type="shopping-cart" /> Cart </Link>
            <Link to="/checkout"><Icon type="check-circle-o" /> Checkout </Link>
            <Link to="/applying"><Icon type="solution" /> Join us </Link>
            <Link to="/login"><Icon type="login" /> Login </Link>
          </MainMenu>
        </div>
      );
    }
  }