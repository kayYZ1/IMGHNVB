import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Link } from 'react-router-dom';
import moment from 'moment';

import UploadAvatarComponent from '../../components/shared/UploadAvatarComponent';
import { IUser } from '../../ts/interfaces/user.interface';
import { db } from '../../firebase/setup';

import { auth } from '../../firebase/setup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth/cordova';
import { addDoc, collection } from 'firebase/firestore/lite';

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
};
/* eslint-enable no-template-curly-in-string */

const RegisterForm: React.FC = () => {
  const [form] = useForm()
  const onFinish = (values: IUser) => {
    values["date"] = moment(values.date).format("YYYY-MM-DD")
    const userCollectionRef = collection(db, "users")

    console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
    //updateProfile(auth.currentUser, { displayName: values.name, photoURL: values.avatar })
    addDoc(userCollectionRef, { values }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  };

  return (
    <Form
      {...layout}
      name="form"
      form={form}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      initialValues={{ avatar: "https://firebasestorage.googleapis.com/v0/b/imagert-9b377.appspot.com/o/Question.png?alt=media&token=60ca0b98-8e65-470e-b92b-99ebadddc1c6" }}
      validateMessages={validateMessages}
    >
      <Form.Item name='name' label="Name" hasFeedback rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='email' label="Email" hasFeedback rules={[{ type: 'email', required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="gender" label="Gender" hasFeedback>
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
      <Form.Item name="avatar" label="Avatar" style={{ width: 300 }}>
        <UploadAvatarComponent />
      </Form.Item>
      <Form.Item name='date' label="Birthday" hasFeedback rules={[{ required: true }]}>
        <DatePicker onChange={onChange} style={{ width: 200 }} format="YYYY-MM-DD" />
      </Form.Item>
      <Form.Item name='introduction' hasFeedback label="Intro">
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
}

export default RegisterForm;