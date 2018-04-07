import React from 'react';
import { Menu, Divider } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

import './styles.scss';

export class CategorySideMenu extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      openKeys: ['CB']
    };
    this.rootSubmenuKeys = ['CB', 'CM', 'DB'];
  }

  onOpenChange = (openKeys) => {
    const lastestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(lastestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({ openKeys: lastestOpenKey? [lastestOpenKey] : []});
    }
  }

  handleClick = (e) => {
    console.log('click', e);
  }

  render() {
    return (
      <div className='side-menu'>
        <Divider><span className='title'>CATEGORY</span></Divider>
        <Menu
          onClick={this.handleClick}
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
          <SubMenu key="CB" title={<span>COFFEE BEANS</span>}>
            <Menu.Item key="1">Special Process Coffee</Menu.Item>
            <Menu.Item key="2">Peaberry</Menu.Item>
            <Menu.Item key="3">Delight Coffee</Menu.Item>
            <Menu.Item key="4">Medium Coffee</Menu.Item>
            <Menu.Item key="5">Bold</Menu.Item>
          </SubMenu>
          <SubMenu key="CM" title={<span>COFFEE MAKERS</span>}>
            <Menu.Item key="6">Moka Pot</Menu.Item>
            <Menu.Item key="7">Hand Grinder</Menu.Item>
            <Menu.Item key="8">French Press</Menu.Item>
            <Menu.Item key="9">Filter Paper</Menu.Item>
            <Menu.Item key="10">Dripper & Kettle</Menu.Item>
          </SubMenu>
          <SubMenu key="DB" title={<span>DRIP BAGS</span>}>
            <Menu.Item key="11">Dark Blend</Menu.Item>
            <Menu.Item key="12">Original Blend</Menu.Item>
            <Menu.Item key="13">Go Blend</Menu.Item>
            <Menu.Item key="14">City Roast</Menu.Item>
            <Menu.Item key="15">Full City Roast</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}