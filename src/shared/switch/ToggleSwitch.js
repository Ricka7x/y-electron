import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Toggle = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;
  border-radius: 25px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  &:hover{
    cursor: pointer;
  }
`
const Slider = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${props => props.on ? '#01EAC3': 'lightgrey'};
  position: absolute;
  left: ${props => props.on? 30 : 2}px;
  top: 1px;
  transition: left .2s .1s ease-out, background-color .2s .1s ease-out;
  &::before{
    content: 'LIVE'
    position: absolute;
    top: 2px;
    left: -24px;
    font-size: 10px;
    font-weight: bold;
  }

  &::after{
    content: 'TEST'
    position: absolute;
    top: 2px;
    left: 20px;
    font-size: 10px;
    font-weight: bold;
  }
`

class ToggleSwitch extends Component{
  state={
    on: false
  }

  toggleSwitch = () => {
    this.setState({
      on: !this.state.on
    })
    if(this.state.on){
      this.handleOff()
    }else{
      this.handleOn()
    }
  }

  handleOn = () =>{
    console.log('on')
    this.props.switchOn()
  }

  handleOff = () => {
    console.log('off')
    this.props.switchOn()
  }

  render() {
    const {on} = this.state
    return (
      <Toggle on={on} onClick={this.toggleSwitch}>
        <Slider on={on}/>
      </Toggle>
    )
  }
}

ToggleSwitch.defaultProps = {
  switchOff: () => console.log('is off'),
  switchOn: () => console.log('is on')
}

ToggleSwitch.propTypes = {
  switchOff: PropTypes.func.isRequired,        // what to do when is off
  switchOn: PropTypes.func.isRequired          // what to do when is on
}

export default ToggleSwitch
