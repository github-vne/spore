import { COLOR } from 'const';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 0 20px 10px;
  padding-top: 3px;
`;

export const CurrentPage = styled.h4`
  font-size: 20px;
  margin-right: 20px;
`;

export const Nav = styled.ol`
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
  height: 100%;
`;

export const Menu = styled.ul`
  display: flex;
  height: 100%;
  margin-right: 10px;
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
