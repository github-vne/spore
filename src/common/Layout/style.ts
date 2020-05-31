import { GRADIENT, HEADER_HEIGHT } from 'const';
import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  background: ${GRADIENT.BACKGROUND};
  z-index: 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 3000px;
  z-index: 1;
`;

export const Main = styled.main`
  display: block;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  position: relative;
  overflow-y: auto;
  padding: 0 20px 10px;
`;
