// Module Imports
import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.GRAY};
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
`

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.GRAY};
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
`

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.WHITE};
  transform: translateX(-50%);
  top:  ${({ position }) => position || '10%'};
  left: 50%;
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || '600px'};
  overflow: auto;
  border-radius: 3px;
  padding: 14px 28px;
  line-height: 1.4;
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
