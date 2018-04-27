import React from 'react';
import './item-modal.scss';

export class ItemModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            desc: ''
        };
    }

    componentDidMount () {
        let desc = '';
        desc = this.props.detail.desc.replace(/(<br>|<ul>|<\/ul>|<ol>|<\/ol>|<li>|<\/li>|<p>|<\/p>)/g, ' ');
        this.setState({ desc: desc });
    }

    render(){
        if(this.props.detail){
             return (
                <div className='item-modal'>
                    <div className='img-container'>
                        <img src={this.props.detail.img_path} alt='item pic' />
                    </div>
                    <h3>{this.props.detail.name}</h3>
                    <p>ราคา: {this.props.detail.price}</p>
                    <p>รายละเอียดสินค้า: {this.state.desc}</p>
                    <p>สินค้าจากร้าน: {this.props.detail.shop_name}</p>
                    <p>ระยะเวลาจัดส่ง: 1-3 วัน</p>
                </div>
            );
        }
        else return null;
    }
}