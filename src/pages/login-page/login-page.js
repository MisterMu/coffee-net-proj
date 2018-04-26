import React from 'react';
import { LoginForm, RegisterForm } from '../../components';

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
      <div className="login-page">
        <section>
          <div className="login-card">
            <LoginForm />
          </div>
        </section>
      </div>
    );
  }
}

