import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { styles } from "../../utils"

const Product = ({
  product: {
    name,
    price,
    ingradients,
    img: { fixed },
  },
}) => {
  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">${price}</h3>
        </div>
        <p className="info">{ingradients}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  .img {
    border-radius: 0.5rem;
  }

  .text {
    .product-content {
      display: flex;
      justify-content: space-between;
      font-size: 1.4rem;
      text-transform: uppercase;

      .name,
      .price {
        color: ${styles.colors.mainYellow};
        margin-top: 0.5rem;
      }
    }
    .info {
      margin-top: 0.5rem;
      word-spacing: 0.2rem;
      text-transform: lowercase;
    }
  }

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
`

export default Product
