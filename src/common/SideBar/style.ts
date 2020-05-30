import { COLOR, GRADIENT } from 'const';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

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
  display: grid;
  align-items: center;
  grid-template-columns: 26px 1fr;
  gap: 15px;
  position: relative;
  margin-bottom: 20px;
  font-size: 16px;
  color: ${({ selected }: { selected?: boolean }) => (selected ? COLOR.RED_100 : COLOR.WHITE)};
`;

export const ButtonPanel = styled.div`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

export const ActionButton = styled.button`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 15px;
  text-align: left;
  color: ${COLOR.WHITE};
  padding: 10px 3px;
  font-size: 16px;
`;

export const ToggleIcon = styled(RawSvg)`
  transition: 0.3s;
  transform: ${({ expand }: { expand: boolean }) => (expand ? 'rotate(180deg)' : 'none')};
`;
