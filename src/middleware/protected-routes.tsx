import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoutes() {
  const token = localStorage.getItem(import.meta.env.VITE_TOKEN_NAME)
  return token ? <Outlet /> : <Navigate to="/login" replace={true} />
}
