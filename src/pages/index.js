import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner, BannerButton, HomeHeader } from "../utils"
import QuickInfo from "../components/HomePageComponents/QuickInfo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HomeHeader>
      <Banner title="eatery" subtitle="55 main street. Santa Monica, CA">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
