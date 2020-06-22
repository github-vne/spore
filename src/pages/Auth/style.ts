import { Box as _Box } from 'common';
import { COLOR, GRADIENT, SHADOW } from 'const';
import styled from 'styled-components';
import { Input as _Input } from 'ui-kit';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${GRADIENT.BACKGROUND};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const Tabs = styled.ol`
  display: flex;
`;

export const Tab = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: 5px 5px 0 0;
  box-shadow: ${SHADOW.BOX};
  position: relative;
  cursor: pointer;
  background: ${({ selected }: { selected?: boolean }) => (selected ? COLOR.BLUE_10 : COLOR.GRAY_80)};
`;

export const Box = styled(_Box)`
  border-radius: 0 5px 5px;
  box-shadow: none;
`;

export const Input = styled(_Input)`
  margin-bottom: 15px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
