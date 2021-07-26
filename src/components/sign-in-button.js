import * as React from "react"
import { useClerk } from "@clerk/clerk-react"

const SignInButton = () => {
  const { openSignIn } = useClerk()

  return (
    <button className="sign-in-btn" onClick={() => openSignIn({})}>
      Sign In
    </button>
  )
}

export default SignInButton
