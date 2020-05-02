import { GRADIENT } from 'const';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background: ${GRADIENT.BACKGROUND};
  padding: 20px;
`;
export const Header = styled.header``;

export const Footer = styled.footer`
  font-size: 12px;
`;
