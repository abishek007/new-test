// Module Imports
import styled from "styled-components";

// Common Styles Import
import { centeredCss } from '../common/styles'

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.GRAY};
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  ${centeredCss}
`

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.TRANSPARENT_BLACK};
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
`

export const ModalWrapper = styled.div`
  position: absolute;
  top:  ${({ position }) => position || '40%'};
  left: 50%;
  border-radius: 3px;
  padding: 14px 28px;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  height: ${({ height }) => height || '500px'};
  width: ${({ width }) => width || '600px'};
  overflow: auto;
  background-color: ${({ theme }) => theme.DIM_GRAY};
`

export const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`

export const CloseBtn = styled.div`
  color: ${({ theme }) => theme.BLACK};
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`

export const ModalFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`

export const ModalContentContainer = styled.div`
    padding: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`
