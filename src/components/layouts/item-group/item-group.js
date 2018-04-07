import React from 'react';
import { Divider, Spin } from 'antd';

import './item-group.scss';
import { ItemBox } from '..';

export class ItemGroup extends React.Component {
  render() {
    let tmp = [];
    if (this.props.data != 0) {
      tmp = this.props.data.map((item) => {
        return (
          <div className="box" >
            <ItemBox data={item} key={item.id} />
          </div>
        );
      });
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