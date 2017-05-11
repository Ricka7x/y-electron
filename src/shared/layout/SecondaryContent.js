import styled from 'styled-components'

const SecondaryContent = styled.div`
  min-width:  350px;
  border-left: .1px solid #ddd;
  height: 100%;
  display: ${props => props.visible ? 'block' : 'none'};
`
export default SecondaryContent
