import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { MainMenu, ApplyForm } from '../../components/';
import './applying-page.scss';

export class ApplyingPage extends React.Component {
  render() {
    return (
      <div className="applying-page">
        <section>
          <MainMenu>
            <Link to="/"><Icon type="home" /> Home </Link>
            <Link to="/cart"><Icon type="shopping-cart" /> Cart </Link>
            <Link to="/checkout"><Icon type="check-circle-o" /> Checkout </Link>
            <Link to="/applying"><Icon type="solution" /> Join us </Link>
            <Link to="/login"><Icon type="login" /> Login </Link>
          </MainMenu>
        </section>
        <section>
          <div className="form">
            <ApplyForm />
          </div>
        </section>
      </div>
    );
  }
}