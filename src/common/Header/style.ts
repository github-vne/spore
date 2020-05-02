import { COLOR } from 'const';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 0 20px 10px;
  padding-top: 3px;
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

export const Page = styled.p`
  color: ${COLOR.WHITE};
`;
