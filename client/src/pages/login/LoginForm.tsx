import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Divider, Avatar } from 'antd';
import { UserOutlined } from "@ant-design/icons"

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const LoginForm: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, paddingTop: 200, marginLeft: 100 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="E-mail"
      name="email"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item style={{ marginLeft: "21.5vh" }}>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <a className="login-form-forgot" href="" style={{ marginLeft: "1vh" }}>
        Forgot password
      </a>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
      <span style={{ marginLeft: "0.5vh" }}>Or <Link to="/register">register now!</Link></span>
    </Form.Item>

    <Divider style={{ paddingLeft: "20vh" }}>Or... test the demo version</Divider>
    <Link to="/App">
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        style={{ marginLeft: 350 }}
        icon={<UserOutlined />}
      />
    </Link>
  </Form>
);

export default LoginForm;