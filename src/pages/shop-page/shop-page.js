import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { MainMenu } from '../../components/layouts';
import '../css/animate.css';
// import '../css/bootstrap.min.css';
// import '../css/font.min.css';
// import '../css/main.css';
// import '../css/prettyPhoto.css';
import '../css/price-range.css';
import '../css/responsive.css';
import { ItemBox } from '../../components/layouts/itembox/item-box';

export class ShopPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			item: {}	
		}
	}

	componentDidMount () {
		let tmp = {
			id:'001',
			name: 'Sweet Potato',
			price: '999 Bath',
		}
		this.setState({ item: tmp });
	}

    render () {
        return (
            <div>
            <MainMenu>
                <Link to="/account"><Icon type="user" /> Account </Link>
                <Link to="/wishlist"><Icon type="star-o" /> Wishlist </Link>
                <Link to="/checkout"><Icon type="check-circle-o" /> Checkout </Link>
                <Link to="/cart"><Icon type="shopping-cart" /> Cart </Link>
                <Link to="/login"><Icon type="login" /> Login </Link>
            </MainMenu>
			<h2>SHOPPP</h2>
			<ItemBox item={this.state.item} />
            </div>
    );
    }
}