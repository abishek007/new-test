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

export const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
`

