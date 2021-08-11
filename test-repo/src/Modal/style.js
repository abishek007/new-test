// Module Imports
import styled from "styled-components";

// Common Styles Import
import { centeredCss } from '../common/styles'

export const ModalWrapperContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  ${centeredCss}
`

export const Overlay = styled.div`
  background-color: rgba(49, 49, 49, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
`

export const ModalContent = styled.div`
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
  background-color: #f1f1f1;
`