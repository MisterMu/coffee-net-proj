import React from 'react';
import './checkout-modal.scss';

export class CheckoutModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          price: 0,
          qty: 0,
          data: {}
        }
    }

    componentDidMount() {
        let data = {};
        let price = 0;
        let qty = 0;
        this.props.items.forEach((item, i) => {
            let tmp = data[item.shop] || [];
            tmp.push({
                name: item.name,
                price: item.price,
                qty: item.qty
            });
            data[item.shop] = tmp;
            price += item.pricer;
            qty += item.qty;
        });
        this.setState({ data: data, price: price, qty: qty });
    }

    render(){
        let data = this.state.data;
        let shops = Object.keys(data);
        for (let i = 0; i < shops; i ++) {
            console.log(data[shops[i]]);
        }
        let content = shops.map((shop, i) => {
            let items = data[shop].map((item, j) => {
                return (
                    <p className='clear' key={item.name}>
                        <span className='left'>{item.name} (จำนวน {item.qty} ชิ้น)</span>
                        <span className='right'>{item.price}</span>
                    </p>
                );
            });
            return (
                <div className='shop-container' key={shop}>
                    <h4>{shop}</h4>
                    <div className='item-container'>
                        { items }
                    </div>
                </div>
            );
        });
        return (
            <div className='checkout-modal'>
            { content }
            <p className='bill-summary'>
                <span className='left'> ราคาสุทธิ (สินค้าจำนวน {this.state.qty} ชิ้น) </span>
                <span className='right'> ฿ {this.state.price} </span>
            </p>
            </div>
        );
    }
}