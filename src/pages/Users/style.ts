import { UserInfo as _UserInfo } from 'common';
import { COLOR, hexToRgba } from 'const';
import styled, { css } from 'styled-components';

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
  color: ${({ active }: { active: boolean }) => (active ? COLOR.BLUE_60 : COLOR.WHITE)};
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

const StyleUserCard = css`
  border: 1px solid ${COLOR.GRAY_80};
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    background: ${hexToRgba(COLOR.BLUE_60, 0.2)};
    border-color: ${COLOR.BLUE_60};
    color: ${COLOR.BLUE_60};
  }
`;

export const UserInfo = styled(_UserInfo)`
  ${StyleUserCard}
  padding: 20px 10px 10px;
`;

export const UserItem = styled.div`
  ${StyleUserCard};
  display: grid;
  gap: 11px;
  padding: 8px 16px;
  grid-template-columns: auto 1fr;
  align-items: center;
  cursor: pointer;
`;
