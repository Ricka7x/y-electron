import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import classNames from 'classnames'

const Container = ({ children, fluid, marginTop, marginBottom, paddingTop, paddingBottom }) => {
  const styles = {
    marginTop: marginTop,
    marginBottom: marginBottom,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom
  }
  return (
    <div style={styles}
      className={classNames({
      'container-fluid': fluid,
      'container': !fluid
    })}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool
}

Container.defaultProps = {
  fluid: false
}

export {Container}
