import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { Link } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const RegisterForm: React.FC = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'password']} label="Password" rules={[{ required: true }]}>
      <Input.Password
        placeholder="Input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </Form.Item>
    <Form.Item name={['user', 'repeatPasword']} label="Password x2" rules={[{ required: true }]}>
      <Input.Password
        placeholder="Repeat password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </Form.Item>
    <Form.Item name={["user", "gender"]} label="Gender">
      <Select style={{ width: 200 }} options={[
        {
          label: "Please select",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "No answer", value: "noAnswer" }
          ]
        }
      ]}>

      </Select>
    </Form.Item>
    <Form.Item name={["user", 'date']} label="Birthday" rules={[{ required: true }]}>
      <DatePicker onChange={onChange} style={{width: 200}}/>
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Intro">
      <Input.TextArea autoSize={{ minRows: 1, maxRows: 4 }} />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Sign up
      </Button>
      <Button type="default" htmlType="button" className="btn-demo"><Link to="/App">Demo</Link></Button>
    </Form.Item>
  </Form>
);

export default RegisterForm;