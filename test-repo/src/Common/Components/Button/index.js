// Module Imports
import React from 'react'
import { node, func, object } from 'prop-types'

// Style Imports
import { ButtonWrapper } from './style'

const Button = ({ children, handleClick, customStyles }) => (
  <ButtonWrapper
    style={customStyles}
    onClick={handleClick}
  >
    {children}
  </ButtonWrapper>
)

Button.defaultProps = {
  children: null,
  handleClick: () => {},
  customStyles: {}
}

Button.propTypes = {
  children: node,
  handleClick: func,
  customStyles: object
}

export default Button