/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

import Header from "./header"
import "../styles/styles.scss"
import { FormattedMessage } from "gatsby-plugin-intl"

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
      <Header siteTitle={data.site.siteMetadata?.title || `WLAB`} />
      <div className="section">
        <main>{children}</main>
      </div>
      <footer className="footer">
        <div className="container is-max-desktop has-text-centered is-size-7">
          © {new Date().getFullYear()} <FormattedMessage id="title" />
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
