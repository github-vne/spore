import { COLOR, GRADIENT } from 'const';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { RawSvg as _RawSvg } from 'ui-kit';

const FULL_WIDTH = 210;
const SMALL_WIDTH = 70;

export const Container = styled.div`
  width: ${({ expand }: { expand: boolean }) => (expand ? `${FULL_WIDTH}px` : `${SMALL_WIDTH}px`)};
  flex: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${GRADIENT.SIDEBAR};
  border-radius: 0 0 5px 0;
  transition: width 0.3s;
  padding: 20px 22px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  margin: 20px 0;
  border-top: 1px solid ${COLOR.WHITE};
`;

export const NavItem = styled(Link)`
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  font-size: 16px;
  color: ${({ selected }: { selected?: boolean }) => (selected ? COLOR.RED_100 : COLOR.WHITE)};
`;

export const RawSvg = styled(_RawSvg)`
  width: 26px;
  height: 26px;
  margin-right: 15px;
`;

export const ButtonPanel = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

export const IconButton = styled.button`
  width: 26px;
  height: 39px;
  color: ${COLOR.WHITE};
`;
