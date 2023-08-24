import React from 'react'

import RegisterForm from './RegisterForm'

import "./RegisterStyle.css"

const RegisterPage = () => {

  return (
    <React.Fragment>
      <div className="register-container">
        <div className="register__left centered">
          <RegisterForm />
        </div>
        <div className="register__right centered no__overflow">
          <img className="img" src="https://images.unsplash.com/photo-1549924327-093737b3bb46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="picture"></img>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RegisterPage