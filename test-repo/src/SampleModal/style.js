// Module Imports
import styled from "styled-components";

export const Button = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_GREEN};
  border: none;
  color: ${({ theme }) => theme.WHITE};
  padding: 10px 8px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  max-width: 235px;
`

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CloseBtn = styled.div`
  color: ${({ theme }) => theme.BLACK};
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`

export const ModalFooterWrapper = styled.div`
  display: flex;
  align-items: center;
`