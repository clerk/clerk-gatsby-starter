import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import SignInButton from "./sign-in-button"

const Header = ({ siteTitle }) => (
  <header>
    <div className="inner-container">
      <h1>
        <Link to="/" className="logo">
          {siteTitle}
        </Link>
      </h1>

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
