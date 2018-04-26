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
          <Menu.Item key="1">
            <div>
              <span style={{float: 'left'}}> All </span>
              <span style={{float: 'right'}}> {this.props.quantity[0]} </span>
            </div>
          </Menu.Item>
          <Menu.Item key="2">
            <div>
              <span style={{float: 'left'}}> Approved </span>
              <span style={{float: 'right'}}> {this.props.quantity[1]} </span>
            </div>
          </Menu.Item>
          <Menu.Item key="3">
            <div>
              <span style={{float: 'left'}}> Pending </span>
              <span style={{float: 'right'}}> {this.props.quantity[2]} </span>
            </div>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}