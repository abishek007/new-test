// Module Imports
import React from 'react'
import { node } from 'prop-types'

// Style Imports
import { ModalFooterContainer } from './style'

const ModalFooter = ({ children }) => (
  <ModalFooterContainer>{children}</ModalFooterContainer>
)

ModalFooter.defaultProps = {
  children: null
}

ModalFooter.propTypes = {
  children: node
}

export default ModalFooter