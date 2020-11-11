import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import "../styles/styles.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  
  return (<Layout>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <div className="container is-max-desktop">
      <div className="columns">
        <div className="column">
        </div>
      </div>
    </div>
  </Layout>)
}

export default IndexPage
