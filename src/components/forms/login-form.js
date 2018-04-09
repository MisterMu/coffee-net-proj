import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import { Redirect } from 'react-router-dom';

import './styles.scss';
import Axios from 'axios';

class RawLoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      disabled: false,
      alert: "",
      redirect: false
    };
  }

  handleSubmit = (e) => {
    this.setState({ disabled: true });
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let email = values.login_email;
        let pass = values.login_password;
        Axios.post('/user/login', { email: email, pass: pass }).then((res) => {
          if (res.data.email === email) {
            this.setState({ alert: "", disabled: false })
            if (values.login_remember) {
              localStorage.setItem('isLogin', 'y');
            } else {
              sessionStorage.setItem('isLogin', 'y');
            }
            this.setState({ redirect: true });
          } else {
            this.setState({ alert: "Invalid username or password", disabled: false })
          }
        }).catch(err => console.log(err));
      } else {
        this.setState({ disabled: false });
      }
    });
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to="/admin" />
    } else {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          {
            (this.state.alert.length !== 0)? <Alert type="error" message={this.state.alert} banner /> : null
          }
          <Form.Item>
            {getFieldDecorator('login_email', {
              rules: [{ required: true, message: 'Please input your Email!' }],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" disabled={this.state.disabled} />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('login_password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" disabled={this.state.disabled} />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('login_remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            {/* <a className="login-form-forgot" href="">Forgot password</a> */}
            <Button type="primary" htmlType="submit" loading={this.state.disabled} className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
}

export const LoginForm = Form.create()(RawLoginForm);
