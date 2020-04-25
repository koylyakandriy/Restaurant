import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner, PageHeader } from "../utils"
import { menuImg } from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader img={menuImg}>
      <Banner title="menu" subtitle={`Let' s dig in`} />
    </PageHeader>
  </Layout>
)

export default MenuPage
