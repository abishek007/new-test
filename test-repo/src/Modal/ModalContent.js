// Module Imports
import React from 'react'
import { node } from 'prop-types'

// Style Imports
import { ModalContentContainer } from './style'

const ModalContent = ({ children }) => (
  <ModalContentContainer>{children}</ModalContentContainer>
)

ModalContent.defaultProps = {
  children: null
}

ModalContent.propTypes = {
  children: node
}

export default ModalContent