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

    updateSummary(){
        this.state.price = 0;
        this.state.qty = 0;
        this.props.items.forEach(item => {
            this.state.price += item.pricer;
            this.state.qty += item.qty
        });
    }

    render(){
        this.updateSummary();
        let tmp = [];
        tmp = this.props.items.map((item) => {
            return (
                <div>
                <span className='left'>
                {item.name} ({item.qty} ชิ้น)
                </span>	   
                <span className='right'>
                ราคา {item.price}
                </span>
                </div>
            );
          });

        return (
            <div clssName='checkout-modal'>
            <div>
            {tmp}
            <span className='left'>
            ยอดรวม (จำนวน {this.state.qty} ชิ้น)
            </span>	   
            <span className='right'>
             ฿{this.state.price}
             </span>
            </div>
            </div>
        );
    }
}