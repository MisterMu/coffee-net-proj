import React from 'react';
import { Menu, Divider } from 'antd';
import './styles.scss';

export class ShopListMenu extends React.Component {
  handleClick = (e) => {
    this.props.action(e);
  }

  render() {
    return (
      <div className='side-menu'>
        <Divider><span className='title'>Filter</span></Divider>
        <Menu
          onClick={this.handleClick}
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1"> All </Menu.Item>
          <Menu.Item key="2"> Approved </Menu.Item>
          <Menu.Item key="3"> Pending </Menu.Item>
        </Menu>
      </div>
    );
  }
}