import * as React from "react"
import { Link } from "gatsby"
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react"
import axios from "axios"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GreetUser from "../components/greet-user"

const IndexPage = () => {
  const [isLogged, setIsLogged] = React.useState(null)
  const { isSignedIn } = useAuth()

  React.useEffect(() => {
    axios
      .get("/api/get-logged-in-status")
      .then(({ data }) => {
        setIsLogged(data.isLogged)
      })
      .catch(error => {
        console.log(error)
      })
  }, [isSignedIn])

  return (
    <Layout>
      <Seo title="Home" />

      <SignedIn>
        <GreetUser />
      </SignedIn>

      <SignedOut>
        <h2>Hi, there!</h2>
        <p>
          Hit that <strong>Sign In</strong> button on the top right corner.
        </p>
      </SignedOut>

      {typeof isLogged === "boolean" && (
        <p>
          Status:{" "}
          {isLogged ? <strong>Logged In</strong> : <strong>Logged Out</strong>}
        </p>
      )}

      <p>
        <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/clerkinc/clerk-gatsby-starter">
          Deploy this starter on Gatsby Cloud
        </a>
      </p>

      <p>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
