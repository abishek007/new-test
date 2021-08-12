// Module Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { node, func, string, object, bool } from 'prop-types'

// Style Imports
import { ModalContainer, ModalWrapper, Overlay } from './style'

// Constant Imports
import { MODAL_PORTAL_ELEMENT, MODAL_POSITIONS, MODAL_PORTAL, BODY, BEFORE_END } from './constant'

/* Used React Portals */
const modalPortal = document.getElementById(MODAL_PORTAL)

if (!modalPortal) {
  document
    .querySelector(BODY)
    .insertAdjacentHTML(BEFORE_END, MODAL_PORTAL_ELEMENT);
}

const Modal = ({ children, handleClose, height, width, position, customStyle, isOpen }) => {

  return isOpen && (ReactDOM.createPortal(
    <ModalContainer>
      <Overlay onClick={handleClose}></Overlay>
      <ModalWrapper
        height={height}
        width={width}
        position={MODAL_POSITIONS[position]}
        style={customStyle}
      >
        { children }
      </ModalWrapper>
    </ModalContainer>,
    document.getElementById(MODAL_PORTAL)
  ))

}

Modal.defaultProps = {
  children: null,
  handleClose: () => {},
  height: '',
  width: '',
  position: 'top',
  customStyle: {},
  isOpen: false
}

Modal.propTypes = {
  children: node,
  handleClose: func,
  height: string,
  width: string,
  position: string,
  customStyle: object,
  isOpen: bool
}

export default Modal