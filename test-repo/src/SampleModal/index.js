// Module Imports
import React, { useState } from 'react'
import { Modal, ModalTitle, ModalContent, ModalFooter } from '../Modal'
import { getModalStyle } from './helper'

// Style Imports
import { Button, TitleText } from './style'

// Constant Imports
import {
  MODAL_TITLE,
  OPEN_BUTTON_TEXT,
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
        <ModalTitle handleClose={toggleModal}>
          <TitleText>{MODAL_TITLE}</TitleText>
        </ModalTitle>
        <ModalContent>{MODAL_INFO}</ModalContent>
        <ModalFooter><SampleModal /></ModalFooter>
      </Modal>
      <Modal
        isOpen={isRandomModalOpen}
        handleClose={toggleRandomModal}
        height={MODAL_HEIGHT}
        width={MODAL_WIDTH}
        position={MODAL_POSITION}
        customStyle={modalStyle}
      >
        <ModalTitle handleClose={toggleRandomModal}>
          <TitleText>{MODAL_TITLE}</TitleText>
        </ModalTitle>
        <ModalContent>{MODAL_INFO}</ModalContent>
        <ModalFooter><SampleModal /></ModalFooter>
      </Modal>
    </>
  )
}

export default SampleModal