// Module Imports
import styled from "styled-components";

// Common Styles Import
import { centeredCss } from '../common/styles'

export const AppTitle = styled.p`
  width: 84%;
  display: flex;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const SampleModalWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 24px;
  margin: 0 auto;
  width: 80%;
  border-radius: 4px;
  margin-top: 15px;
  ${centeredCss}
`