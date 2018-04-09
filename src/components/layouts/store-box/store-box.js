import React from 'react';
import { Redirect } from 'react-router-dom';

import './store-box.scss';

export class StoreBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nav: false
    };
  }

  goToShopPage = () => {
    this.setState({ nav: true });
  }

  render() {
    if (this.state.nav) {
      return <Redirect to={"/store/" + this.props.data.id} />
    }
    else {
      return (
        <div className="store-box" onClick={this.goToShopPage}>
          <div className="img-container">
            <img src={this.props.data.img} alt={this.props.data.name + " logo"} />
          </div>
          <p className="store-name">{this.props.data.name}</p>
        </div>
      );
    }
  }
}