import { FormattedMessage, Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Language from "./language"
import Logo from "../images/wlab-logo.svg"

const Header = ({ siteTitle }) => {
  return (
  <header className="section site-header">
    <div className="container is-max-desktop site-header-container">
      <div className="site-navbar">
        <div className="level is-mobile">
          <div className="level-left">
            <div className="site-nav-brand">
              <h1>
                <Link to="/" className="has-text-primary">
                  <img src={Logo} alt="{siteTitle}" />
                </Link>
              </h1>
            </div>
          </div>
          <div className="level-right">
            <Language />
          </div>
        </div>
      </div>
      <div className="site-menu" style={{ marginTop: "220px" }}>
        <div className="level">
          <div className="level-left">
            <Link to="/about" className="has-text-primary is-size-5"><FormattedMessage id="about" /></Link>
          </div>
          <div className="level-right"></div>
        </div>
      </div>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
