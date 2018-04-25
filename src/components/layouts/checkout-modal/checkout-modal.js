import React from 'react';
import './checkout-modal.scss';

export class CheckoutModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          price: 0,
          qty: 0
        }
    }

    componentWillMount(){
        this.props.items.forEach(item => {
            this.state.price += item.pricer;
            this.state.qty += item.qty
        });
    }

    render(){
        return (
            <div>
            ยอดรวม (จำนวน {this.state.qty} ชิ้น)	    ฿{this.state.price}
            </div>
        );
    }
}