import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"

import Logo from "../../../images/logo.svg"
import { styles } from "../../../utils"

const NavbarHeader = ({ handleNavbar }) => (
  <HeaderWrapper>
    <Link to="/">
      <img src={Logo} alt="restaurant name" />
    </Link>
    <FaAlignRight className="toggle-icon" onClick={handleNavbar} />
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`

export default NavbarHeader
