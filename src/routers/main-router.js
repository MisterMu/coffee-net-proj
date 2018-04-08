import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginPage, MainPage, CartPage, ShopPage, ApplyingPage } from '../pages';

const navShopPage = ({match}) => {
  return <ShopPage shop_id={match.params.id} />
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
      <Route path="/login" component={LoginPage} />
      <Route path="/applying" component={ApplyingPage} />
      <Route path="/store/:id" component={navShopPage} />
      <Route component={redirect} />
    </Switch>
  );
};

export default MainRouter;