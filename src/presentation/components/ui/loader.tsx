import { cn } from "@/presentation/lib/utils"
import { cva } from "class-variance-authority"
import { Loader2 } from "lucide-react"

type LoaderProps = {
  type?: "fullScreen"
  className?: string
  title?: string
}

const loaderVariants = cva("flex flex-col gap-2 items-center justify-center", {
  variants: {
    type: {
      default: "",
      fullScreen: "fixed w-full h-screen top-0 left-0 bg-zinc-100",
    },
  },
  defaultVariants: {
    type: "default",
  },
})

export const Loader = ({ type, className, title }: LoaderProps) => {
  return (
    <div className={cn(loaderVariants({ type, className }))}>
      <Loader2 size={48} className="animate-spin text-emerald-500" />
      {title && <p>{title}</p>}
    </div>
  )
}
