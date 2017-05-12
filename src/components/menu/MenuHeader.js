import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 10px;
`
const Text = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  color: ${props => props.color ? props.color : '#FFFFFF'}
`


const MenuHeader = props => {
  return (
    <HeaderContainer>
      <Text>{props.children}</Text>
    </HeaderContainer>
  )
}

export default MenuHeader
