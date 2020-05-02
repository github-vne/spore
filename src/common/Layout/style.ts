import { GRADIENT } from 'const';
import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  display: flex;
  background: ${GRADIENT.BACKGROUND};
  padding-top: 10px;
  z-index: 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 3000px;
  z-index: 1;
`;

export const Main = styled.main`
  width: 100%;
  position: relative;
  height: calc(100vh - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  padding: 0 20px 10px;
  display: block;
`;
