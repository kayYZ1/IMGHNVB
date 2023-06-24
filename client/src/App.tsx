import React from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"
import DashboardPage from "./pages/dashboard/DashboardPage"

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="*" element={<NotFoundPage />}/>
        <Route path="/Login" element={<LoginPage />}/>
        <Route path="/Register" element={<RegisterPage />}/>
        <Route path="/Main" element={<DashboardPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App