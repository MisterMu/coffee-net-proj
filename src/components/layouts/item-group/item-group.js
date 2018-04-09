import React from 'react';
import { Divider, Spin } from 'antd';

import './item-group.scss';
import { ItemBox, StoreBox } from '..';

export class ItemGroup extends React.Component {
  render() {
    let tmp = [];
    if (this.props.data.length !== 0) {
      if (this.props.type === 'stores') {
        tmp = this.props.data.map((store) => {
          return (
            <div className="box" key={store.id}>
              <StoreBox data={store} />
            </div>
          );
        });
      } else {
        tmp = this.props.data.map((item) => {
          return (
            <div className="box" key={item.id}>
              <ItemBox data={item} />
            </div>
          );
        });
      }
    } else {
      tmp = <div className="spin"><Spin /></div>;
    }

    return (
      <div className="item-group">
        <Divider><span className="title">{this.props.title || 'Title'}</span></Divider>
        <div className="container">
          { tmp }
        </div>
      </div>
    );
  }
}