import { Card } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const CardStyled = styled(Card)`
  width: 30rem;
  margin-top: 120px;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
