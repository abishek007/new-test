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
  font-weight: bold;
  border-radius: 4px;
`

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`

export const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
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
  justify-content: flex-end;
  padding: 8px;
`

export const ModalContentWrapper = styled.div`
    padding: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`