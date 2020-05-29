import { COLOR, HEADER_HEIGHT } from 'const';
import styled from 'styled-components';

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
      background: ${COLOR.WHITE};
      margin: 0 8px;
    }
  }
`;

export const Notification = styled.button`
  position: relative;
  width: 25px;
  margin-left: auto;
  color: ${COLOR.WHITE};
  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${COLOR.RED_100};
    border-radius: 50%;
    top: 0;
    right: 2px;
  }
  :hover {
    color: ${COLOR.BLUE_60};
  }
`;
