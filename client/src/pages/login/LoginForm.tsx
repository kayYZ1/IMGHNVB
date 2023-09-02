import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { IUserLogin } from '../../ts/interfaces/user.interface';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/setup';
import SpinComponent from '../../components/shared/SpinComponent';
import AlertComponent from '../../components/alerts/AlertComponent';


const LoginForm: React.FC = () => {
  const [errMessage, setErrMessage] = useState("")
  const [demoErrorMessage, setDemoErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const demoLogin = async () => {
    const email = "demo@demo.demo"
    const password = "demodemo"
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      setLoading(false)
      navigate("/")
    } catch (e: any) {
      setLoading(true)
      console.error(e)
      setDemoErrorMessage(e.message)
      setLoading(false)
    }
  }

  const onFinish = async (values: IUserLogin) => {
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, values.email, values.password)
      setLoading(false)
      navigate("/")
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
        <Button type="default" htmlType="button" className="btn-demo" onClick={demoLogin}>Demo</Button>
        <Button type="dashed" htmlType="button" className="btn-register"><Link to="/Register">Sign Up</Link></Button>
      </Form.Item>
      {errMessage ? <AlertComponent description={errMessage} message="Login error" type="warning" /> : ""}
      {demoErrorMessage ? <AlertComponent description={errMessage} message="Problems with demo login" type="warning" /> : "" }
    </Form>
  )
};

export default LoginForm;