import React from 'react'
import styled from 'styled-components'
import Dropdown from './../../shared/dropdown/Dropdown'

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #3BADFE;
  border: none;
  outline: none;
  margin-left: 10px;
`
const Top = props => {
  return (
    <TopContainer>
      something goes here
      <Dropdown>
        <Profile>
          rick@yabit.io
          <Avatar src='https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png'></Avatar>
        </Profile>
      </Dropdown>
    </TopContainer>
  )
}

export default Top
