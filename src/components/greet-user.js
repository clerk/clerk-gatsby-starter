import * as React from "react"
import { useUser } from "@clerk/clerk-react"

const GreetUser = () => {
  const user = useUser()

  return <h2>Hi, {user.firstName}</h2>
}

export default GreetUser
