// Module Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { node, func, string, object, bool } from 'prop-types'

// Style Imports
import { ModalWrapperContainer, ModalContent, Overlay } from './style'

// Constants
/* Used React Portals */
const modalPortal = document.getElementById("modal-portal")
const MODAL_PORTAL_ELEMENT = `<div id="modal-portal"></div>`
const MODAL_POSITIONS = {
  top: '40%',
  center: '50%',
  botton: '60%'
}

if (!modalPortal) {
  document
    .querySelector("body")
    .insertAdjacentHTML("beforeend", MODAL_PORTAL_ELEMENT);
}

const Modal = ({ children, handleClose, height, width, position, customStyle, isOpen }) => {

  return isOpen && (ReactDOM.createPortal(
    <ModalWrapperContainer>
      <Overlay onClick={handleClose}></Overlay>
      <ModalContent
        height={height}
        width={width}
        position={MODAL_POSITIONS[position]}
        style={customStyle}
      >
        { children }
      </ModalContent>
    </ModalWrapperContainer>,
    document.getElementById("modal-portal")
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