import React from 'react';
import { Button, Icon, Modal, message } from 'antd';

import './item-box.scss';

export class ItemBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal_visible: false
    };
  }

  addToCart = () => {
      let cart = []
      let tmp = localStorage.getItem("cart");
      let item_id = this.props.data.id;
      if (tmp != null) {
          cart = JSON.parse(tmp);
          if (!cart.includes(item_id)) {
            cart.push(item_id);
            localStorage.setItem("cart",JSON.stringify(cart));
          }
      } else {
        cart.push(item_id);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      message.success('Successfully add item to cart');
  }

  openModal = (e) => {
    if (e.target.getAttribute('id') !== 'add-to-cart') {
      this.setState({ modal_visible: true });
    }
  }

  closeModal = (e) => {
    if (this.state.modal_visible) {
      this.setState({ modal_visible: false });
    }
  }

  prepareModalData = () => {
    
  }

  componentDidMount () {

  }

  render () {
    if (this.props.data) {
      return (
        <div>
          <Modal
            title="modal"
            visible={this.state.modal_visible}
            onOk={this.closeModal}
            onCancel={this.closeModal}
            footer={null}
          >
            test
          </Modal>
          <div className="item-box" onClick={this.openModal}>
            <div className="pic">
              <img className="img" src={this.props.data.img_path} alt="item pic" />
            </div>
            <h3 className="name">{this.props.data.name}</h3>
            <p className="price">{this.props.data.price}</p>
            <Button onClick={this.addToCart} id='add-to-cart'>
              Add to cart <Icon type="shopping-cart" />
            </Button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

