// Module Imports
import React, { useState } from 'react'
import { Modal, ModalTitle, ModalContent, ModalFooter } from '../Modal'
import Button from '../Common/Components/Button'

// Style Imports
import { TitleText } from './style'

// Constant Imports
import {
  MODAL_TITLE,
  OPEN_BUTTON_TEXT,
  MODAL_INFO
} from './constant'

/**
 * @description LongContentModal shows the Modal Component is flexible for long paragraph 
 */

const LongContentModal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Button handleClick={toggleModal}>{OPEN_BUTTON_TEXT}</Button>
      <Modal
        isOpen={isModalOpen}
        handleClose={toggleModal}
      >
        <ModalTitle handleClose={toggleModal}>
          <TitleText>{MODAL_TITLE}</TitleText>
        </ModalTitle>
        <ModalContent>{MODAL_INFO}</ModalContent>
        <ModalFooter>
          <Button handleClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default LongContentModal