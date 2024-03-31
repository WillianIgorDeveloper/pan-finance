import { Navigate, Outlet } from "react-router-dom"

export function OnlyPublicRoutes() {
  const token = localStorage.getItem(import.meta.env.VITE_TOKEN_NAME)
  return token ? <Navigate to="/app" replace={true} /> : <Outlet />
}
