import { GRADIENT } from 'const';
import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  display: flex;
  background: ${GRADIENT.BACKGROUND};
  z-index: 0;
  position: relative;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 3000px;
`;

export const Main = styled.main`
  display: block;
  width: 100%;
  height: calc(100vh - 55px);
  position: relative;
  overflow-y: auto;
  padding: 0 20px 10px;
`;
