import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2<FormattedMessage id="go_page2" /></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
