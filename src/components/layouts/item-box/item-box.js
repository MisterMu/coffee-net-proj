import React from 'react';
import { Button, Icon } from 'antd';

import './item-box.scss';

export class ItemBox extends React.Component {
  addToCart = () => {
      let cart = []
      let tmp = localStorage.getItem("cart")
      if(tmp != null){
          cart = JSON.parse(tmp);
          if (!cart.includes(this.props.data.id)) {
            cart.push(this.props.data.id);
            localStorage.setItem("cart",JSON.stringify(cart))
          }
      }
  }

  render () {
    if (this.props.data) {
      return (
        <div className="item-box">
          <div className="pic">
            <img className="img" src={this.props.data.img_path} alt="item pic" />
          </div>
          <h3 className="name">{this.props.data.name}</h3>
          <p className="price">{this.props.data.price}</p>
          <Button onClick={this.addToCart}>
            Add to cart <Icon type="shopping-cart" />
          </Button>
        </div>
      );
    } else {
      return null;
    }
  }
}

