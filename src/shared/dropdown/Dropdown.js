import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import IconHome from './../../images/icons/IconHome3'
const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`
const DropdownMenu = styled.div`
  width: 220px;
  border-radius: 4px;
  background-color: #fff;
  position: absolute;
  top: 40px;
  left: -80px;
  border: .1px solid #ddd;
  z-index: 1;
  padding: 10px 20px;
  visibility: ${props => props.open ? 'visible': 'hidden'}
  opacity: ${props => props.open ? 1 : 0}
  transition: visibility .3s, opacity .3s;
  box-shadow: 0px 6px 69px -16px rgba(0,0,0,0.20);
`

const DropdownMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  font-size: 1.1rem;
  text-transform: capitalize;
  &:hover{
    cursor: pointer;
    background-color: rgb(235, 247, 255);
  }
`

const Controls = styled.span`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  &:hover{
    cursor: pointer;
  }
`
const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: red;
  height: 20px;
  width: 25px;
  font-size: .9rem;
  color: #fff;
  font-weight: bold;
`

const LinkIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`



class Dropdown extends Component {
  state = {
    open: false
  }

  toggleDropdown = () => {
    console.log('clicked')
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    return (
      <DropdownContainer >
        <Controls onClick={this.toggleDropdown}>{this.props.children}</Controls>
        <DropdownMenu open={this.state.open} className={this.state.open ? 'open' : ''}>
          <DropdownMenuItem>
            <LinkIconContainer>
              <IconHome stroke='#3BADFE' fill='none'/>&nbsp;profile
            </LinkIconContainer>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LinkIconContainer>
              <IconHome stroke='#B584F9 ' fill='none'/>&nbsp;messages
            </LinkIconContainer>
            <Badge>
              11
            </Badge>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LinkIconContainer>
              <IconHome stroke='#FF5263' fill='none'/>&nbsp;logout
            </LinkIconContainer>
          </DropdownMenuItem>
        </DropdownMenu>
      </DropdownContainer>
    )
  }
}

export default Dropdown
