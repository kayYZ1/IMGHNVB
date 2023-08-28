import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
};

const LoginForm: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 32 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="on"
  >
    <Form.Item<FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 2, span: 32 }}>
      <Button type="primary" htmlType="submit" className="btn-submit">
        Sign In
      </Button>
      <Button type="default" htmlType="button" className="btn-demo"><Link to="/App">Demo</Link></Button>
      <Button type="dashed" htmlType="button" className="btn-register"><Link to="/Register">Sign Up</Link></Button>
    </Form.Item>
  </Form>
);

export default LoginForm;