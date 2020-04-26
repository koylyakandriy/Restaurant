import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner, BannerButton, HomeHeader } from "../utils"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"
import Menu from "../components/HomePageComponents/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HomeHeader>
      <Banner title="eatery" subtitle="55 main street. Santa Monica, CA">
          <Link to="/menu/" style={{ textDecoration: "none" }}>
            <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
          </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
