import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ContactUs from "../../components/contactus"
import TrustedBy from "../../components/trustedby"

const IndexPage = () => (
  <Layout>
    <SEO title="Drip Creative - Digital Solutions Provider" />
    <ContactUs />
    <TrustedBy />
  </Layout>
)

export default IndexPage
