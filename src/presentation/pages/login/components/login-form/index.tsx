import type { z } from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form"
import { Input } from "@/presentation/components/ui/input"
import { Button } from "@/presentation/components/ui/button"
import { sendLoginEmail } from "@/data/requests/auth/send-login-email"
import { useToast } from "@/presentation/components/ui/use-toast"
import { Loader } from "@/presentation/components/ui/loader"
import { formSchema } from "./schemas"
import { CheckCircle, Send } from "lucide-react"

export function LoginForm() {
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      const response = await sendLoginEmail(values)
      if (response.success) setEmailSent(true)
    } catch (error) {
      toast({
        title: "An error occurred while trying to send an email.",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loader title="Sending email..." />
  }

  if (emailSent) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-3 space-y-3 max-w-sm mx-auto">
        <legend className="text-2xl font-semibold flex gap-3 items-center">
          <CheckCircle className="text-primary" /> Email sent!
        </legend>
        <p className="text-center">
          We sent you an email with a link to access your account.
        </p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center justify-center p-3 space-y-3 max-w-sm mx-auto"
      >
        <legend className="text-2xl font-semibold">
          {(() => {
            const hour = new Date().getHours()
            if (hour >= 0 && hour < 12) return "Good morning!"
            if (hour >= 12 && hour < 18) return "Good afternoon!"
            if (hour >= 18 && hour < 24) return "Good evening!"
          })()}
        </legend>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  id="tag"
                  type="email"
                  placeholder="email@exemple.com"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full gap-3">
          Send email <Send size={18} />
        </Button>
      </form>
    </Form>
  )
}
