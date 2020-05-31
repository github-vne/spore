import { COLOR, HEADER_HEIGHT } from 'const';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
  padding: 0 20px;
`;

export const BreadCrumbs = styled.ul`
  display: flex;
  align-items: center;
  color: ${COLOR.WHITE};
  font-size: 16px;
`;

export const Crumb = styled.li`
  &:not(:first-child) {
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
  width: 22px;
  position: relative;
  margin-left: auto;
  color: ${COLOR.WHITE};
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 2px;
    width: 10px;
    height: 10px;
    background: ${COLOR.RED_100};
    border-radius: 50%;
  }
  :hover {
    color: ${COLOR.BLUE_60};
  }
`;
