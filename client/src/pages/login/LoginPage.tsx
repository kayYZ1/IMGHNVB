import React from "react"
import { Row, Col } from "antd"

import LoginForm from "./LoginForm"

import "./LoginStyle.css"

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="login-container">
        <Row>
        <Col span={12}>
            <div className="left-side-panel">
              SDASD
            </div>
        </Col>
        <Col span={12}>
          <div className="right-side-panel">
            <LoginForm />
          </div>
        </Col>
      </Row>
      </div>
    </React.Fragment>
  )
}

export default LoginPage