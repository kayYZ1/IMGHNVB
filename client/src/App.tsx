import React from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"
import DashboardPage from "./pages/dashboard/DashboardPage"
import SettingsPage from "./pages/settings/SettingsPage"
import ImageEditPage from "./pages/image-edit/ImageEditPage"
import ImageListPage from "./pages/image-list/ImageListPage"
import StartingPage from "./pages/starting-page/StartingPage"

import ContentComponent from "./components/shared/ContentComponent"
import ProtectedRoute from "./components/ProtectedRoutes"

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="Register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="App" element={<DashboardPage />}>
            <Route element={<ContentComponent />}>
              <Route path="" element={<StartingPage />} />
              <Route path="Image-Edit" element={<ImageEditPage />} />
              <Route path="Image-List" element={<ImageListPage />} />
              <Route path="Settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App