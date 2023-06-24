import React from 'react'
import { Row, Col, Button } from "antd"
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import RegisterForm from '../../components/forms/RegisterForm'

import "./RegisterStyle.css"

const RegisterPage = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <div className="register-container">
        <Row>
        <Col span={12}>
            <div className="left-side-panel">
            </div>
        </Col>
        <Col span={12}>
          <div className="right-side-panel">
             <Button icon={<LeftOutlined />} onClick={() => navigate(-1)}></Button>
            <RegisterForm />
          </div>
        </Col>
      </Row>
      </div>
    </React.Fragment>
  )
}

export default RegisterPage