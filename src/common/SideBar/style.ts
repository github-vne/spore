import { COLOR, GRADIENT } from 'const';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { RawSvg as _RawSvg } from 'ui-kit';

const FULL_WIDTH = 210;
const SMALL_WIDTH = 70;

export const Container = styled.div`
  width: ${({ expand }: { expand: boolean }) => (expand ? `${FULL_WIDTH}px` : `${SMALL_WIDTH}px`)};
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${GRADIENT.SIDEBAR};
  border-radius: 0 0 5px 0;
  transition: width 0.3s;
  padding: 20px 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const NavItem = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ selected }: { selected?: boolean }) => (selected ? COLOR.RED_100 : COLOR.WHITE)};
  position: relative;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const RawSvg = styled(_RawSvg)`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Toggle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  ${({ expand }: { expand: boolean }) =>
    expand &&
    css`
      > ${RawSvg} {
        transform: rotate(180deg);
      }
    `};
  ${RawSvg} {
    width: 20px;
    height: 20px;
    margin: 0 ${`${(SMALL_WIDTH - 20) / 2}px`};
    transition: 0.3s;
  }
`;
