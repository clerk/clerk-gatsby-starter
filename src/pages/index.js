import * as React from "react"
import { Link } from "gatsby"
import { SignedIn, SignedOut } from "@clerk/clerk-react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GreetUser from "../components/greet-user"

const IndexPage = () => (
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

    <p>
      <a href="/api/get-user-id">Get your user ID from a Gatsby Function</a>
    </p>

    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
