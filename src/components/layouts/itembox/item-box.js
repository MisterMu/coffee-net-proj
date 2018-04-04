import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './item-box.scss';

export class ItemBox extends React.Component {
  render () {
    return (
    <div className="item-box">
      <div className="product-image-wrapper">
        <div className="single-products">
            <div className="itempic"></div>
            <h2 className="item-text">{this.props.item.price}</h2>
            <p className="item-text">{this.props.item.name}</p>
            <Button>Add</Button>
        </div>
      </div>
    </div>
    );
  }
}

// <div class="product-image-wrapper">
// 								<div class="single-products">
// 									<div class="productinfo text-center">
// 										<img src="images/home/product4.jpg" alt="" />
// 										<h2>180 Bath</h2>
// 										<p>Simply Sweet</p>
// 										<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
// 									</div>