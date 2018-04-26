import React from 'react';
import { Menu, Divider } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

import './styles.scss';
import Axios from 'axios';

export class CategorySideMenu extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      items: []
    };
  }

  handleClick = (e) => {
    console.log('click', e);
  }

  componentDidMount () {
    Axios.get('/item/cat').then((res) => {
      this.setState({ items: res.data });
    });
  }

  render () {
    let items = this.state.items.map((item, i) => {
      return (
        <Menu.Item key={i}>{item}</Menu.Item>
      );
    });
    return (
      <div className='side-menu'>
        <Divider><span className='title'>CATEGORY</span></Divider>
        <Menu
          onClick={this.handleClick}
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
          { items }
        </Menu>
      </div>
    );
  }
}