// Module Imports
import React, { useState } from 'react'
import Modal from '../Modal'

// Style Imports
import { ModalTitleWrapper, Button, CloseBtn } from './style'

// Constants
const MODAL_TITLE = 'Hello React Modal'
const OPEN_BUTTON_TEXT = 'Open Modal'
const CLOSE_BUTTON_TEXT = 'X'
const MODAL_HEIGHT = '250px'
const MODAL_WIDTH = '600px'
const MODAL_POSITION = 'top' // top, center, bottom
const MODAL_INFO = 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'

const SampleModal = () => {

  // Uncommment the code for testing purpose gives clear view of modal opening in stack order
  /*
  const rand = () => {
    return Math.round(Math.random() * 20) - 10;
  }
  
  const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const [modalStyle] = useState(getModalStyle)
  */

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const modalBody = (
    <>
      <ModalTitleWrapper>
        <h2>{MODAL_TITLE}</h2>
        <CloseBtn onClick={toggleModal} className="close-modal">
          {CLOSE_BUTTON_TEXT}
        </CloseBtn>
      </ModalTitleWrapper>
      <p>{MODAL_INFO}</p>
      <SampleModal />
    </>
  )

  return (
    <>
      <Button onClick={toggleModal}>{OPEN_BUTTON_TEXT}</Button>
      <Modal
        isOpen={isModalOpen}
        handleClose={toggleModal}
        height={MODAL_HEIGHT}
        width={MODAL_WIDTH}
        position={MODAL_POSITION}
      >
        {modalBody}
      </Modal>
    </>
  )
}

export default SampleModal