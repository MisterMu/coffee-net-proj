import React from 'react';
import { Divider } from 'antd';

import './item-group.scss';
import { ItemBox } from '..';

export class ItemGroup extends React.Component {
  render() {
    let tmp = [];
    if (this.props.data) {
      tmp = this.props.data.map((item) => {
        return (
          <div className="box" >
            <ItemBox data={item} />
          </div>
        );
      });
    } else {
      tmp = null;
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