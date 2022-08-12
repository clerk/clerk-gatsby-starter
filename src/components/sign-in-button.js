import * as React from "react"
import { useClerk } from "@clerk/clerk-react"

const SignInButton = () => {
  const { openSignIn } = useClerk()
  const appearance = {
    variables: {
      colorPrimary: "#639",
    },
  }

  return (
    <button
      className="sign-in-btn"
      onClick={() =>
        openSignIn({
          appearance,
        })
      }
    >
      Sign In
    </button>
  )
}

export default SignInButton
