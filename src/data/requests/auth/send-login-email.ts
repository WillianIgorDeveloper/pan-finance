export async function sendLoginEmail({ email }: { email: string }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  localStorage.setItem(import.meta.env.VITE_TOKEN_NAME, "dev-token")
  return {
    success: true,
    body: {
      token: null,
    },
  }
  // const response = await fetch("http://localhost:4000/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email }),
  // })

  // return await response.json()
}
