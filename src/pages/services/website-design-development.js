import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ContactUs from "../../components/contactus"
import TrustedBy from "../../components/trustedby"
import Hero from "../../components/services/website/hero"
import Features from "../../components/services/website/features"

const WebsiteDesignDevelopment = () => (
  <Layout>
    <SEO title="Drip Creative - Digital Solutions Provider" />
    <Hero />
    <Features />
    <ContactUs />
    <TrustedBy />
  </Layout>
)

export default WebsiteDesignDevelopment
