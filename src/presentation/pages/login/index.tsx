import { Button } from "@/presentation/components/ui/button"
import { ROUTES } from "@/utils/routes"
import { Link } from "react-router-dom"
import { LoginForm } from "./components/login-form"

export function LoginPage() {
  return (
    <div className="h-screen flex">
      <div className="bg-brand-gradient flex items-center justify-center relative lg:flex-1">
        <div className="absolute w-full h-full bg-zinc-500/50 backdrop-blur-sm" />
      </div>
      <div className="w-full p-3 flex flex-col items-center justify-center shadow-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl relative">
        <Link to={ROUTES.HOME} className="absolute right-3 top-3">
          <Button variant="link" className="font-bold text-md">
            Home
          </Button>
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
