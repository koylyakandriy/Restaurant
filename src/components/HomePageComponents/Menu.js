import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import { Section, styles, Title } from "../../utils"
import Product from "./Product"

const PRODUCTS = graphql`
  {
    items: allContentfulRestaurantMenu {
      edges {
        node {
          id
          name
          ingradients
          price
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Menu = () => {
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={({ items }) => {
            const products = items.edges
            return products.map(({ node }) => (
              <Product key={node.id} product={node} />
            ))
          }}
        />
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 768px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default Menu
