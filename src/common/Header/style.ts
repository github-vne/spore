import { COLOR, HEADER_HEIGHT } from 'const';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

export const Wrapper = styled.header`
  display: flex;
  height: ${HEADER_HEIGHT}px;
  align-items: center;
  padding: 0 20px;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  color: ${COLOR.WHITE};
  font-size: 16px;
  & > li:not(:first-child) {
    &:before {
      content: '';
      display: inline-block;
      height: 7px;
      width: 7px;
      border-radius: 50%;
      background: #fff;
      margin: 0 8px;
    }
  }
`;

export const HomeIcon = styled(RawSvg)`
  width: 20px;
`;

export const Panel = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${COLOR.WHITE};
  :hover {
    color: ${COLOR.BLUE_60};
  }
`;
