import React from "react"

import "./LoginStyle.css"

import LoginForm from "./LoginForm"

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="login-container">
        <div className="login__left centered">
          <LoginForm />
        </div>
        <div className="login__right centered no__overflow">
          <img className="img" src="https://res.cloudinary.com/diod8pjhj/image/upload/v1670658158/3d1920_e2qpuj.jpg" alt="picture"></img>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginPage