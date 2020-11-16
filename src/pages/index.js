import React from "react"
import { withPrefix } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import "../styles/styles.scss"

import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"

import WlabMiniProd from "../images/wlab-mini-prod.jpg"
import WlabRingProd from "../images/wlab-ring-prod.jpg"
import WlabPlusProd from "../images/wlab-plus-prod.jpg"
import WlabMaxProd from "../images/wlab-max-prod.jpg"

import WlabMiniCover from "../images/wlab-mini-cover.jpg"
import WlabMiniImg1 from "../images/wlab-mini-1.jpg"
import WlabMiniImg2 from "../images/wlab-mini-2.jpg"
import WlabMiniImg3 from "../images/wlab-mini-3.jpg"

import WlabRingCover from "../images/wlab-ring-cover.jpg"
import WlabRingImg1 from "../images/wlab-ring-1.jpg"
import WlabRingImg2 from "../images/wlab-ring-2.jpg"
import WlabRingImg3 from "../images/wlab-ring-3.jpg"

import Flavor1 from "../images/flavor-1.jpg"
import Flavor2 from "../images/flavor-2.jpg"
import Flavor3 from "../images/flavor-3.jpg"
import Flavor4 from "../images/flavor-4.jpg"
import Flavor5 from "../images/flavor-5.jpg"
import Flavor6 from "../images/flavor-6.jpg"


const IndexPage = () => {
  const intl = useIntl()
  
  return (<Layout>
    <Helmet>
      <link href="https://sachinchoolur.github.io/lightgallery.js/lightgallery/css/lightgallery.css" rel="stylesheet" />
      <script src="https://code.jquery.com/jquery-2.2.4.min.js" type="text/javascript" />
      <script defer src={withPrefix('lightgallery.js')} type="text/javascript" />
      <script defer src={withPrefix('lg-thumbnail.js')} type="text/javascript" />
      <script defer src={withPrefix('scripts.js')} type="text/javascript" />
    </Helmet>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <div className="container is-max-desktop">
      <div className="our-products-container columns">
        <div className="column is-three-fifths">
          <div>
            <h1 className="title styled-title is-size-4">{intl.formatMessage({ id: "our_products_ttl" })}</h1>
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <p>
                <img src={WlabMiniProd} alt={intl.formatMessage({ id: "wlab_mini" })} />
              </p>
              <p className="brand-name">{intl.formatMessage({ id: "wlab_mini" })}</p>
            </div>
            <div className="column">
              <p>
                <img src={WlabRingProd} alt={intl.formatMessage({ id: "wlab_ring" })} />
              </p>
              <p className="brand-name">{intl.formatMessage({ id: "wlab_ring" })}</p>
            </div>
            <div className="column">
              <p>
                <img src={WlabPlusProd} alt={intl.formatMessage({ id: "wlab_plus" })} />
              </p>
              <p className="brand-name">{intl.formatMessage({ id: "wlab_plus" })}</p>
            </div>
            <div className="column">
              <p>
                <img src={WlabMaxProd} alt={intl.formatMessage({ id: "wlab_max" })} />
              </p>
              <p className="brand-name">{intl.formatMessage({ id: "wlab_max" })}</p>
            </div>
          </div>
        </div>
        <div className="column about-us-container">
          <h1 className="title styled-title is-size-4">{intl.formatMessage({ id: "about_us" })}</h1>
          <p>{intl.formatMessage({ id: "index_about_text" })}</p>
        </div>
      </div>
      <div className="columns product-section">
        <div className="column product-cover-container">
          <h1 className="title brand-name brand-name-mobile">{intl.formatMessage({ id: "wlab_mini" })}</h1>
          <img src={WlabMiniCover} alt={intl.formatMessage({ id: "wlab_mini" })} />
        </div>
        <div className="column product-detail-container">
          <h1 className="title brand-name brand-name-desktop">{intl.formatMessage({ id: "wlab_mini" })}</h1>
          <table className="table">
            <tbody>
              <tr>
                <th><FormattedMessage id="material" /></th>
                <td><FormattedMessage id="material_value_wlab_mini" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="e_liquid_capacity" /></th>
                <td><FormattedMessage id="e_liquid_capacity_value_wlab_mini" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="concentration_nicotine" /></th>
                <td><FormattedMessage id="concentration_nicotine_value_wlab_mini" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="battery_capacity" /></th>
                <td><FormattedMessage id="battery_capacity_value_wlab_mini" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="puffs" /></th>
                <td><FormattedMessage id="puffs_value_walb_mini" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="size" /></th>
                <td><FormattedMessage id="size_value_wlab_mini" /></td>
              </tr>
            </tbody>
          </table>
          <div id="lightgallery" className="gallery-container columns is-mobile">
            <a href={WlabMiniImg1} className="column is-narrow">
              <img src={WlabMiniImg1} alt={intl.formatMessage({ id: "wlab_mini" })} />
            </a>
            <a href={WlabMiniImg2} className="column is-narrow">
              <img src={WlabMiniImg2} alt={intl.formatMessage({ id: "wlab_mini" })} />
            </a>
            <a href={WlabMiniImg3} className="column is-narrow">
              <img src={WlabMiniImg3} alt={intl.formatMessage({ id: "wlab_mini" })} />
            </a>
          </div>
        </div>
      </div>

      <div className="columns product-section product-section-even">
        <div className="column product-detail-container">
          <h1 className="title brand-name brand-name-desktop">{intl.formatMessage({ id: "wlab_ring" })}</h1>
          <table className="table">
            <tbody>
              <tr>
                <th><FormattedMessage id="material" /></th>
                <td><FormattedMessage id="material_value_wlab_ring" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="e_liquid_capacity" /></th>
                <td><FormattedMessage id="e_liquid_capacity_value_wlab_ring" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="concentration_nicotine" /></th>
                <td><FormattedMessage id="concentration_nicotine_value_wlab_ring" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="battery_capacity" /></th>
                <td><FormattedMessage id="battery_capacity_value_wlab_ring" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="puffs" /></th>
                <td><FormattedMessage id="puffs_value_walb_ring" /></td>
              </tr>
              <tr>
                <th><FormattedMessage id="size" /></th>
                <td><FormattedMessage id="size_value_wlab_ring" /></td>
              </tr>
            </tbody>
          </table>
          <div id="lightgallery2" className="gallery-container columns is-mobile" style={{ overflow: "scroll" }}>
            <a href={WlabRingImg1} className="column is-narrow">
              <img src={WlabRingImg1} alt={intl.formatMessage({ id: "wlab_ring" })} />
            </a>
            <a href={WlabRingImg2} className="column is-narrow">
              <img src={WlabRingImg2} alt={intl.formatMessage({ id: "wlab_ring" })} />
            </a>
            <a href={WlabRingImg3} className="column is-narrow">
              <img src={WlabRingImg3} alt={intl.formatMessage({ id: "wlab_ring" })} />
            </a>
          </div>
        </div>
        <div className="column product-cover-container">
          <h1 className="title brand-name brand-name-mobile">{intl.formatMessage({ id: "wlab_ring" })}</h1>
          <img src={WlabRingCover} alt={intl.formatMessage({ id: "wlab_ring" })} />
        </div>
      </div>

      <div className="product-section">
        <h1 className="title styled-title is-size-4 title-cross mb-6">{intl.formatMessage({ id: "many_flavors" })}</h1>
      </div>
      <div className="columns is-mobile is-multiline">
        <div className="column is-half-mobile is-one-third-tablet">
          <img src={Flavor1} alt="" />
        </div>
        <div className="column is-half-mobile is-one-third-tablet">
          <img src={Flavor2} alt="" />
        </div>
        <div className="column is-half-mobile is-one-third-tablet">
          <img src={Flavor3} alt="" />
        </div>
        <div className="column is-half-mobile is-one-third-tablet">
          <img src={Flavor4} alt="" />
        </div>
        <div className="column is-half-mobile is-one-third-tablet">
          <img src={Flavor5} alt="" />
        </div>
        <div className="column is-half-mobile is-one-third-tablet">
          <img src={Flavor6} alt="" />
        </div>
      </div>
    </div>
  </Layout>)
}

export default IndexPage
