// Module Imports
import React from 'react'
import { node } from 'prop-types'

// Style Imports
import { ModalContentContainer } from './style'

/**
 * @description ModalContent used to pass content(body) of Modal
 */

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