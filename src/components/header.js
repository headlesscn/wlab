import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Language from "./language"
import Logo from "../images/wlab-logo.svg"
import IconFB from "../images/sm-fb.svg"
import IconTT from "../images/sm-tt.svg"
import IconIG from "../images/sm-ig.svg"

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
        <div className="level is-mobile">
          <div className="level-left">
          </div>
          <div className="level-right">
            <a href="https://www.facebook.com/WLAB-108086620855319/" title="Facebook" target="_blank" rel="noreferrer" className="mr-2">
              <img src={IconFB} width="20" height="20" alt="Facebook" />
            </a>
            <a href="https://twitter.com/wlabtech" target="_blank" rel="noreferrer" title="Twitter" className="mr-2">
              <img src={IconTT} width="20" height="20" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/wlab.tech/" target="_blank" rel="noreferrer" title="Instagram" className="mr-2">
              <img src={IconIG} width="20" height="20" alt="Instagram" />
            </a>
          </div>
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
