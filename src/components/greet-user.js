import * as React from "react"
import { useUser } from "@clerk/clerk-react"
import axios from "axios"

const GreetUser = () => {
  const user = useUser()
  const [userId, setUserId] = React.useState(null)

  React.useEffect(() => {
    axios
      .get("/api/get-user-id")
      .then(({ data }) => {
        setUserId(data.id)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h2>Hi, {user.firstName}</h2>
      {userId && (
        <p>
          Your ID: <strong>{userId}</strong>
        </p>
      )}
    </>
  )
}

export default GreetUser
