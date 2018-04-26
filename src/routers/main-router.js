import React from 'react';
import { Icon, Menu, Dropdown, Input, Button, message } from 'antd';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { LoginPage, MainPage, CartPage, ShopPage, ApplyingPage, OrderPage } from '../pages';
import { MainMenu } from '../components';
import { AdminRouter } from './admin-router';
import Axios from 'axios';

const navOrderPage = ({match}) => {
  return <OrderPage order_id={match.params.id} />
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

class OverlayVisible extends React.Component {
  state = {
    visible: false,
    nav: false,
    data: ''
  };

  enterLoading = (val) => {
    Axios.get('/order/get/' + val).then((res) => {
      if (res.data.length > 0) {
        this.setState({ nav: true });
        this.setState({ data: val });
      }
      else {
        message.error('Cant find your order number ' + val)
      }
    });
  }

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }

  render() {
    const Search = Input.Search;
    const menu = (
      <Menu>
        <Menu.Item key="1"><Search placeholder="order number" onSearch={value => this.enterLoading(value)} enterButton=">" size="large" /></Menu.Item>
      </Menu>
    );
   
    if (this.state.nav) {
      return (
        <Redirect to={"/order/" + this.state.data} />
      );
      this.setState({ nav: false });
    }
    else{
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
}

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
        <Route path="/order/:id" component={navOrderPage} />
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