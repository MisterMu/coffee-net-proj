import React from 'react';
import { Menu, Divider } from 'antd';
import './styles.scss';
import color from '../../assets/values/color';

export class OtherSideMenu extends React.Component {
  handleClick = (e) => {
    console.log('click', e);
  }

  render() {
    return (
      <div className='side-menu'>
        <Divider><span className='title'>OTHER</span></Divider>
        <Menu
          onClick={this.handleClick}
          mode="inline"
        >
          <Menu.Item key="1"><a href='/'>วิธีเลือก-เก็บรักษากาแฟคั่ว</a></Menu.Item>
          <Menu.Item key="2"><a href='/'>Roast and Learn</a></Menu.Item>
          <Menu.Item key="3"><a href='/'>เส้นทางสายไหน</a></Menu.Item>
          <Menu.Item key="4"><a href='/'>Roastman Talk</a></Menu.Item>
          <Menu.Item key="5"><a href='/'>ชงกาแฟง่ายๆด้วยตัวเอง</a></Menu.Item>
        </Menu>
      </div>
    );
  }
}