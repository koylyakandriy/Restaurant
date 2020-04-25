import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Section, SectionButton, styles, Title } from "../../utils"

const QuickInfo = () => {
  return (
    <Section>
      <Title message="Let us tell you" title="our mission" />
      <QuickInfoWrapper>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          culpa cumque magnam minus reiciendis saepe totam. A at consequuntur
          dolorum expedita neque sed similique unde voluptas! Ab, accusantium
          aspernatur consequatur cum deleniti, dicta error incidunt inventore,
          iusto laudantium maiores maxime mollitia nam nihil nisi nostrum porro
          repellendus sint ut voluptatem.
        </p>

        <Link to="/about/" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  )
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo
