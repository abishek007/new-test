// Module Imports
import React, { useState } from 'react'
import Modal from '../Modal'
import { getModalStyle } from './helper'

// Style Imports
import { ModalTitleWrapper, ModalFooterWrapper, Button, CloseBtn } from './style'

// Constant Imports
import {
  MODAL_TITLE,
  OPEN_BUTTON_TEXT,
  CLOSE_BUTTON_TEXT,
  MODAL_HEIGHT,
  MODAL_WIDTH,
  MODAL_POSITION,
  MODAL_INFO,
  OPEN_RANDOM_BUTTON_TEXT
} from './constant'

const SampleModal = () => {

  const [modalStyle] = useState(getModalStyle)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRandomModalOpen, setIsRandomModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const toggleRandomModal = () => {
    setIsRandomModalOpen(!isRandomModalOpen)
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
      <ModalFooterWrapper>
        <SampleModal />
      </ModalFooterWrapper>
    </>
  )

  return (
    <>
      <Button onClick={toggleModal}>{OPEN_BUTTON_TEXT}</Button>
      <Button onClick={toggleRandomModal}>{OPEN_RANDOM_BUTTON_TEXT}</Button>
      <Modal
        isOpen={isModalOpen}
        handleClose={toggleModal}
        height={MODAL_HEIGHT}
        width={MODAL_WIDTH}
        position={MODAL_POSITION}
      >
        {modalBody}
      </Modal>
      <Modal
        isOpen={isRandomModalOpen}
        handleClose={toggleRandomModal}
        height={MODAL_HEIGHT}
        width={MODAL_WIDTH}
        position={MODAL_POSITION}
        customStyle={modalStyle}
      >
        {modalBody}
      </Modal>
    </>
  )
}

export default SampleModal