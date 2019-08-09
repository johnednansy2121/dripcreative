import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/hero"
import BusinessNeeds from "../components/homepage/businessNeeds"
import TrustedBy from "../components/homepage/trustedby"

const IndexPage = () => (
  <Layout>
    <SEO title="Drip Creative - Digital Solutions Provider" />
    <Hero />
    <BusinessNeeds />
    <TrustedBy />
  </Layout>
)

export default IndexPage
