import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import classNames from 'classnames'

const Col = ({
  children,
  reverse,
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset
}) => {
  return (
    <div
      className={
        classNames({
          'col-xs': typeof xs === 'boolean',
          'col-sm': typeof sm === 'boolean',
          'col-md': typeof md === 'boolean',
          'col-lg': typeof lg === 'boolean',
          [`col-xs-${xs}`]: typeof xs === 'number',
          [`col-sm-${sm}`]: typeof sm === 'number',
          [`col-md-${md}`]: typeof md === 'number',
          [`col-lg-${lg}`]: typeof lg === 'number',
          [`col-xs-offset-${xsOffset}`]: xsOffset,
          [`col-sm-offset-${smOffset}`]: smOffset,
          [`col-md-offset-${mdOffset}`]: mdOffset,
          [`col-lg-offset-${lgOffset}`]: lgOffset,
          [`col reverse`]: reverse
        })}>
      {children}
    </div>
  )
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  xs: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number
}

export {Col}
