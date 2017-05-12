import React from 'react'
import styled from 'styled-components'

const BrandContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgba(0,0,0,0.1);
`
const Brand = props => {
  return (
    <BrandContainer>
      {props.children}
    </BrandContainer>
  )
}

export default Brand
