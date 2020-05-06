import { COLOR, GRADIENT } from 'const';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { RawSvg as _RawSvg } from 'ui-kit';

const FULL_WIDTH = 180;
const SMALL_WIDTH = 70;

export const Container = styled.div`
  width: ${({ expand }: { expand: boolean }) => (expand ? `${FULL_WIDTH}px` : `${SMALL_WIDTH}px`)};
  flex: none;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: ${GRADIENT.SIDEBAR};
  border-radius: 5px;
  transition: width 0.3s;
  padding-bottom: 20px;
  margin: 0 0 10px 10px;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: none;
  overflow: hidden;
`;

export const NavItem = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 55px;
  color: ${COLOR.WHITE};
  position: relative;
  :hover {
    color: ${COLOR.GREEN_80};
    :after {
      border-color: transparent ${COLOR.GREEN_80} transparent transparent;
    }
  }
  ${({ selected }: { selected?: boolean }) =>
    selected &&
    css`
      :after {
        content: '';
        position: absolute;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent ${COLOR.WHITE} transparent transparent;
      }
    `};
`;

export const RawSvg = styled(_RawSvg)`
  width: 32px;
  height: 32px;
  margin: 0 ${`${(SMALL_WIDTH - 32) / 2}px`};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${COLOR.WHITE};
  border-radius: 4px;
  color: ${COLOR.WHITE};
  padding: 15px 0;
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
