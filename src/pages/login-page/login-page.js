import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { LoginForm, RegisterForm, MainMenu } from '../../components';

import './login-page.scss';

export class LoginPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      username: '',
      password: '',
      btn_disabled: false
    }
  }

  componentDidMount () {
    document.title = "Login"
  }

  render () {
    return (
      <div>
        <MainMenu>
          <Link to="/account"><Icon type="user" /> Account </Link>
          <Link to="/wishlist"><Icon type="star-o" /> Wishlist </Link>
          <Link to="/checkout"><Icon type="check-circle-o" /> Checkout </Link>
          <Link to="/cart"><Icon type="shopping-cart" /> Cart </Link>
          <Link to="/login"><Icon type="login" /> Login </Link>
        </MainMenu>
        <div className="host">
          <div className="login-card">
            <LoginForm />
            <div className="divider">
              <b>OR</b>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
    );
  }
}

