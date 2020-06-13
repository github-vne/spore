import { COLOR, RGBA } from 'const';
import styled from 'styled-components';

export const Settings = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
`;

export const FilterPanel = styled.div`
  display: flex;
  align-items: center;
`;

export const SortBtn = styled.button`
  height: 24px;
  width: 24px;
  color: ${COLOR.WHITE};
  margin-right: 10px;
  :hover {
    color: ${COLOR.BLUE_60};
  }
`;

export const UserList = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 20px 0;
`;

export const Status = styled.h3`
  color: ${COLOR.BLUE_60};
`;

export const UserItem = styled.div`
  display: grid;
  gap: 11px;
  padding: 8px 16px;
  grid-template-columns: auto 1fr;
  align-items: center;
  border: 1px solid ${COLOR.GRAY_80};
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: ${RGBA.BLUE_HOVER};
    border-color: ${COLOR.BLUE_60};
    color: ${COLOR.BLUE_60};
  }
`;
