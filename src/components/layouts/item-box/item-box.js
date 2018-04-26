import React from 'react';
import { Button, Icon, Modal, message } from 'antd';
import { ItemModal } from '../item-modal/item-modal';
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
      console.log(tmp);
      if (tmp) {
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
            title={this.props.data.name}
            visible={this.state.modal_visible}
            onOk={this.closeModal}
            onCancel={this.closeModal}
            footer={[
              <Button key="modal-cancel" onClick={this.closeModal}>Cancel</Button>,
              <Button key="modal-checkout" type="primary" onClick={this.addToCart}>
                Add to cart <Icon type="shopping-cart" />
              </Button>,
            ]}
          >
          <ItemModal detail={this.props.data}/>
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

