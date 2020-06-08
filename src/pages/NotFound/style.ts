import { GRADIENT, STYLED } from 'const';
import styled from 'styled-components';
import { Button } from 'ui-kit';

export const Content = styled.main`
  width: 100%;
  height: 100vh;
  background: ${GRADIENT.BACKGROUND};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  height: 50vh;
`;

export const Comeback = styled(Button).attrs({
  styled: STYLED.TERTIARY
})`
  position: absolute;
  top: 20px;
  left: 20px;
`;
