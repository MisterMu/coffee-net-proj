import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginPage, MainPage, CartPage, ShopPage } from '../pages';

const navShopPage = ({match}) => {
  return <ShopPage shop_id={match.params.id} />
}

const redirect = () => (
  <Redirect to="/" />
);

const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/account" component={null} />
    <Route path="/wishlist" component={null} />
    <Route path="/checkout" component={null} />
    <Route path="/cart" component={CartPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/store/:id" component={navShopPage} />
    <Route component={redirect} />
  </Switch>
);

export default MainRouter;