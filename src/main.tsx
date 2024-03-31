import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { OnlyPublicRoutes, ProtectedRoutes } from "./middleware"
import "./index.css"
// TanstackQuery
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
const queryClient = new QueryClient()
// Pages
import { HomePage } from "@/presentation/pages/home"
// Only public pages
import { LoginPage } from "@/presentation/pages/login"
// Protected pages
import { AppLayout } from "@/presentation/pages/app/layout"
import { AppPage } from "@/presentation/pages/app"
import { DatabasePage } from "@/presentation/pages/app/pages/database"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<OnlyPublicRoutes />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="app" element={<AppLayout />}>
              <Route index element={<AppPage />} />
              <Route path="database" element={<DatabasePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
