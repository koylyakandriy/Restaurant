import React from "react"
import styled from "styled-components"
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa"

import { styles } from "../../../utils"

const NavbarIcons = () => {
  const icons = [
    {
      id: 1,
      icon: <FaFacebookSquare className="icon facebook-icon"/>,
      path: "https://www.facebook.com"
    },
    {
      id: 2,
      icon: <FaTwitter className="icon twitter-icon"/>,
      path: "https://www.twitter.com"
    },
    {
      id: 3,
      icon: <FaInstagram className="icon instagram-icon"/>,
      path: "https://www.instagram.com"
    }
  ]
  
  return (
    <IconWrapper>
      { icons.map(({ id, path, icon }) => (
        <a href={ path } key={ id } target="_blank" rel="noopener noreferrer">
          { icon }
        </a>
      )) }
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  display: none;
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${ styles.transFunction() };
    &:hover {
      color: ${ styles.colors.mainYellow };
    }
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 10rem;
  }
`

export default NavbarIcons
