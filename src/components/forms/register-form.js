import React from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';

import './styles.scss';
import Axios from 'axios';

class RawRegisterForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      confirmDirty: false
    }
  }

  checkPwd = (rule, value, callback) => {
    if (value && value !== this.props.form.getFieldValue('regis_password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPwd = (rule, value, callback) => {
    if (value && this.state.confirmDirty) {
      this.props.form.validateFields(['regis_confirm'], { force: true });
    }
    callback();
  }

  handleConfirmBlur = (e) => {
    this.setState({ confirmDirty: this.state.confirmDirty || !!e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Values of Register Form:', values);
        let email = values.regis_email;
        let pass = values.regis_password;
        let role = values.regis_role;
        Axios.post('/user/register', { email: email, pass: pass, role: role }).then((res) => {
          console.log(res);
        }).catch(err => console.log(err));
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <Form.Item>
          {getFieldDecorator('regis_email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!'
            },{
              required: true, message: 'Please input your Email!' 
            }]
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0, 0, 0, 0.25) '}} />} placeholder="E-mail" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('regis_password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, 0.25) '}} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('regis_confirm', {
            rules: [{
              required: true, message: 'Please input your Confirm Password!'
            }, {
              validator: this.checkPwd
            }]
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, 0.25) '}} />} type="password" placeholder="Re-Password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('regis_role', {
            rules: [{ required: true, message: 'Please choose your Role!' }]
          })(
            <Select placeholder="Select a role">
              <Select.Option value="super-admin"> Super Admin </Select.Option>
              <Select.Option value="admin"> Admin </Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-submit-btn">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const RegisterForm = Form.create()(RawRegisterForm);