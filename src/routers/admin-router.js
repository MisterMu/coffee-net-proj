import React from 'react';
import { Icon } from 'antd';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { MainMenu } from '../components';
import { ShopListPage } from '../pages';

export class AdminRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      permission: false
    };
  }

  logout = () => {
    console.log('logout')
    sessionStorage.removeItem('isLogin');
    localStorage.removeItem('isLogin');
    this.setState({ permission: false });
    return null;
  }

  chkSession = () => {
    let session = sessionStorage.getItem('isLogin');
    let local = localStorage.getItem('isLogin');
    if (session !== null) {
      this.setState({ permission: true });
    } else if (local !== null) {
      this.setState({ permission: true });
    } else {
      this.setState({ permission: false });
    }
  }

  componentWillMount () {
    this.chkSession();
  }

  render () {
    if (this.state.permission) {
      return (
        <div>
          <BrowserRouter
            basename="/admin"
          >
            <div>
              <MainMenu>
                <Link to="/"> Shop list </Link>
                <Link to="/logout"><Icon type="logout" /> Logout </Link>
              </MainMenu>
              <Switch>
                <Route exact path="/" component={() => <Redirect to="/shop-list" />} />
                <Route path="/shop-list" component={ ShopListPage } />
                <Route path="/logout" component={this.logout} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <Redirect to="/login" />
      );
    }
  }
}