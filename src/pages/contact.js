import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner, PageHeader } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={contactImg}>
      <Banner title="contact us" subtitle={`Let's get in touch `} />
    </PageHeader>
  </Layout>
)

export default ContactPage
