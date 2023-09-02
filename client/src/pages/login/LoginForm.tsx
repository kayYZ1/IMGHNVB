import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { IUserLogin } from '../../ts/interfaces/user.interface';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/setup';
import SpinComponent from '../../components/shared/SpinComponent';
import AlertComponent from '../../components/alerts/AlertComponent';


const LoginForm: React.FC = () => {
  const [errMessage, setErrMessage] = useState("")
  const [loading, setLoading] = useState(false)


  const onFinish = async (values: IUserLogin) => {
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, values.email, values.password)
      setLoading(false)
    } catch (e: any) {
      setLoading(true)
      console.error(e)
      setErrMessage(e.message)
      setLoading(false)
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 32 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="on"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
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

      <Form.Item wrapperCol={{ offset: 2, span: 32 }}>
        <Button type="primary" htmlType="submit" className="btn-submit">
          {loading ? <SpinComponent /> : "Sign In"}
        </Button>
        <Button type="default" htmlType="button" className="btn-demo"><Link to="/App">Demo</Link></Button>
        <Button type="dashed" htmlType="button" className="btn-register"><Link to="/Register">Sign Up</Link></Button>
      </Form.Item>
      {errMessage ? <AlertComponent description={errMessage} message="Login error" type="warning" /> : ""}
    </Form>
  )
};

export default LoginForm;