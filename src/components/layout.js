/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import "../styles/layout.css"
import "../styles/custom.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="main-container">
        <main>{children}</main>
        <footer>
          <StaticImage
            src="../../docs/logo.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            placeholder="none"
            alt="Clerk + Gatsby"
            style={{ marginBottom: `1.45rem` }}
          />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
