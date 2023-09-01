import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const HomePage = () => {
  const user = useSelector((state: any) => state.data.user.user)
  console.log(user)
  return (
    <React.Fragment>
      {user ? <Navigate to="/App/" /> : <Navigate to="/Login" />}
    </React.Fragment>
  )
}

export default HomePage