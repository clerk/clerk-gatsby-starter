import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
      <h2>Hi, stranger.</h2>
      <h5>What about hitting that "Sign In" button on the top right corner?</h5>
    </SignedOut>

    <StaticImage
      src="../../docs/logo.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Clerk + Gatsby"
      style={{ marginBottom: `1.45rem` }}
    />

    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
