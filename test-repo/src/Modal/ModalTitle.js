// Module Imports
import React from 'react'
import { node, func } from 'prop-types'

// Style Imports
import { ModalTitleContainer, CloseBtn } from './style'

// Constant Imports
import { CLOSE_BUTTON_TEXT } from './constant'

const ModalTitle = ({ children, handleClose }) => (
  <ModalTitleContainer>
    {children}
    <CloseBtn onClick={handleClose}>{CLOSE_BUTTON_TEXT}</CloseBtn>
  </ModalTitleContainer>
)

ModalTitle.defaultProps = {
  children: null,
  handleClose: () => {}
}

ModalTitle.propTypes = {
  children: node,
  handleClose: func
}

export default ModalTitle