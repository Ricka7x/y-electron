import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 40px;
`

const MenuFooter = props => {
  return (
    <FooterContainer>
      {props.children}
    </FooterContainer>
  )
}

export default MenuFooter
