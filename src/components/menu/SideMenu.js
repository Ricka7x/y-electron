import React from 'react'
import styled from 'styled-components'

const Menu = styled.div`
  width: 100%;
  position: relative;
`



const SideMenu = props => {
  return (
    <Menu>
      {props.children}
    </Menu>
  )
}

export default SideMenu
