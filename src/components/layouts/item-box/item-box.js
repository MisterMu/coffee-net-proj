import React from 'react';
import { Button } from 'antd';

import './item-box.scss';

export class ItemBox extends React.Component {
  addToCart = () => {
      let cart = []
      let tmp = localStorage.getItem("cart")
      console.log(tmp)
      if(tmp!=null){
          cart = JSON.parse(tmp)
      }
      cart.push(this.props.data.id);
      localStorage.setItem("cart",JSON.stringify(cart))
  }

  render () {
    return (
    <div className="item-box">
      <div className="product-image-wrapper">
        <div className="single-products">
            <div className="itempic"></div>
            <h2 className="item-text">{this.props.data.price}</h2>
            <p className="item-text">{this.props.data.name}</p>
            <Button onClick={this.addToCart}>Add</Button>
        </div>
      </div>
    </div>
    );
  }
}

