import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  position: relative;
`

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-left: 10px;
  &.active{
    font-weight: bold;
  }
  &.active::before{
    content: '';
    display: block;
    height: 100%;
    width: 4px;
    border-radius: 10px;
    position: absolute;
    background-color: #3BADFE;
    left:0;
    top: 0;
  }
`

const LinkIconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Children = styled.span`
  margin-left: 10px;
`

const LinkItem = ({children, icon, to, exact}) => {
  return (
    <LinkContainer>
      <LinkIconWrapper>
        <Link to={to} exact={exact} activeClassName='active'>{icon} <Children>{children}</Children></Link>
      </LinkIconWrapper>
    </LinkContainer>
  )
}

export default LinkItem
