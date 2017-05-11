import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Track = styled.circle`
  fill: transparent;
  stroke: #DAE2E5;
  stroke-width: 26;
`
const Indicator = styled.circle`
  fill: transparent;
  stroke: #B584F9;
  stroke-width: 26;
  stroke-dasharray: 0 10000;
  transition: stroke-dasharray .3s ease;
`
const Chart = styled.svg`
  margin: 0 auto;
  border-radius: 50%;
  display: block;
`
const Text = styled.text`
  fill: #fff;
  font-weight: bold;
`
const Percent = styled.tspan`
  font-size:20px;
  font-weight: bold;
`
const Val = styled.tspan`
  font-size:22px;
`
const Label = styled.tspan`
  font-size:9px;
  text-transform: uppercase;
`



class Donut extends Component {
  render() {
    const halfsize = (this.props.size * 0.5);
    const radius = halfsize - (this.props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: this.props.strokewidth};
    const indicatorstyle = {strokeWidth: this.props.strokewidth, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';
    return (
      <Chart width={this.props.size} height={this.props.size}>
        <Track r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle}/>
        <Indicator r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle}/>
        <Text x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
          <Val>{this.props.value}</Val>
          <Percent>%</Percent>
          <Label x={halfsize} y={halfsize+10}>{this.props.valuelabel}</Label>
        </Text>
      </Chart>
    )
  }
}

Donut.defaultProps = {
  value: 0,
  valuelabel: 'Completado',
  size: 130,
  strokewidth: 15
}

Donut.propTypes = {
  value: PropTypes.number,        // value the chart should show
  valuelabel: PropTypes.string,   // label for the chart
  size: PropTypes.number,         // diameter of chart
  strokewidth: PropTypes.number   // width of chart line
}


export default Donut
