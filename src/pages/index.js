import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/hero"
import BusinessNeeds from "../components/homepage/businessNeeds"
import Projects from "../components/homepage/projects"
import ContactUs from "../components/homepage/contactus"
import TrustedBy from "../components/homepage/trustedby"

const IndexPage = () => (
  <Layout>
    <SEO title="Drip Creative - Digital Solutions Provider" />
    <Hero />
    <BusinessNeeds />
    <Projects />
    <ContactUs />
    <TrustedBy />
  </Layout>
)

export default IndexPage
