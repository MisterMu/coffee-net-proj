import React from 'react';
import { Icon, Menu, Dropdown, Input, Button } from 'antd';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { LoginPage, MainPage, CartPage, ShopPage, ApplyingPage, OrderPage } from '../pages';
import { MainMenu } from '../components';
import { AdminRouter } from './admin-router';

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };
  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  }
  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1"><Input placeholder="order number" /> <Button type="primary"><Icon type="right" /></Button></Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" href="#">
        <Icon type="search" /> Track My Order <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

const navShopPage = ({match}) => {
  return <ShopPage shop_id={match.params.id} />
}

const chkSession = () => {
  if (sessionStorage.isLogin === undefined && localStorage.isLogin === undefined) {
    return <LoginPage />
  } else {
    return <Redirect to="/admin" />;
  }
}

const redirect = () => (
  <Redirect to="/" />
);

const mainMenu = () => {
  if (window.location.pathname.slice(0, 6) !== '/admin') {
    return (
      <MainMenu>
        <Link to="/"><Icon type="home" /> Home </Link>
        <Link to="/cart"><Icon type="shopping-cart" /> Cart </Link>
        <OverlayVisible />
        <Link to="/applying"><Icon type="solution" /> Join us </Link>
        <Link to="/login"><Icon type="login" /> Login </Link>
      </MainMenu>
    );
  } else {
    return null;
  }
}

const MainRouter = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      { mainMenu() }
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/login" component={chkSession} />
        <Route path="/applying" component={ApplyingPage} />
        <Route path="/store/:id" component={navShopPage} />
        <Route path="/admin" component={AdminRouter} />
        <Route component={redirect} />
      </Switch>
    </div>
  );
};

export default MainRouter;