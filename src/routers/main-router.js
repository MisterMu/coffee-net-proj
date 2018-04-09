import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginPage, MainPage, CartPage, ShopPage, ApplyingPage } from '../pages';
import { AdminRouter } from './admin-router';

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

const MainRouter = () => {
  window.scrollTo(0, 0);
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/checkout" component={null} />
      <Route path="/cart" component={CartPage} />
      <Route path="/login" component={chkSession} />
      <Route path="/applying" component={ApplyingPage} />
      <Route path="/store/:id" component={navShopPage} />
      <Route path="/admin" component={AdminRouter} />
      <Route component={redirect} />
    </Switch>
  );
};

export default MainRouter;