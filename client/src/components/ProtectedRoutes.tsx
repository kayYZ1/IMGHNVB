import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProtectedRoute = () => {
  const user = useSelector((state: any) => state.data.user.user)
  return user ? <Outlet /> : <Navigate to="/Login" />
}

export default ProtectedRoute