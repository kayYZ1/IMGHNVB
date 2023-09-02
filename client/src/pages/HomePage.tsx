import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { auth } from "../firebase/setup"
import { setLoading, userLogin } from "../redux/slices/userSlice"

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(userLogin({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,
          avatar: authUser.photoURL
        }))
        dispatch(setLoading(false))
      } else {
        console.log("User not logged in.")
      }
    })
  }, [])

  const user = useSelector((state: any) => state.data.user.user)

  return (
    <React.Fragment>
      {user ? <Navigate to="/App/" /> : <Navigate to="/Login" />}
    </React.Fragment>
  )
}

export default HomePage