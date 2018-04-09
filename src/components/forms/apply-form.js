import React from 'react';
import { Form, Input, Button, Alert } from 'antd';
import Axios from 'axios';
const FormItem = Form.Item;

class RawApplyForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      confirmDirty: false,
      disabled: false,
      success: false
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  handleSubmit = (e) => {
    this.setState({ disabled: true });
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let body = {
          email: values.email,
          pass: values.password,
          name: values.name,
          logo: (values.logo === '-')? '' : values.logo,
          banner: (values.banner === '-')? '' : values.banner
        }
        Axios.post('/shop/create', body).then((res) => {
          if (res.data.success) {
            this.setState({ disabled: false, success: true });
          } else {
            this.setState({ disabled: false });
          }
        }).catch(err => console.error(err));
      } else {
        this.setState({ disabled: false });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit} className="apply-form">
      {(this.state.success)? <Alert type="success" message="Your shop is already pending, waiting for approval." /> : null}
        <FormItem label="E-mail" {...formItemLayout}>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail'
            }]
          })(
            <Input disabled={this.state.disabled} />
          )}
        </FormItem>
        <FormItem label="Password" {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!'
            }, {
              validator: this.validateToNextPassword
            }]
          })(
            <Input type="password" disabled={this.state.disabled} />
          )}
        </FormItem>
        <FormItem label="Confirm Password" {...formItemLayout}>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} disabled={this.state.disabled} />
          )}
        </FormItem>
        <FormItem label="Shop Name" {...formItemLayout}>
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'Please confirm your shop name!',
            }],
          })(
            <Input disabled={this.state.disabled} />
          )}
        </FormItem>
        <FormItem label="Logo (url)" {...formItemLayout}>
          {getFieldDecorator('logo', {
            rules: [{
              required: true, message: 'Give us your shop logo or type \'-\'',
            }],
          })(
            <Input disabled={this.state.disabled} />
          )}
        </FormItem>
        <FormItem label="Banner (url)" {...formItemLayout}>
          {getFieldDecorator('banner', {
            rules: [{
              required: true, message: 'Give us your shop banner or type \'-\'',
            }],
          })(
            <Input disabled={this.state.disabled} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={this.state.disabled} disabled={this.state.success}>Register</Button>
        </FormItem>
      </Form>
    );
  }
}

export const ApplyForm = Form.create()(RawApplyForm);