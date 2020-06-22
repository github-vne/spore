import { COLOR, hexToRgba } from 'const';
import styled, { css } from 'styled-components';

export const User = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;
  &:hover {
    background: ${hexToRgba(COLOR.GRAY_80, 0.4)};
  }
  ${({ selected }: { selected?: boolean }) =>
    selected &&
    css`
      background: ${COLOR.BLUE_30};
    `}
`;

export const Info = styled.div`
  margin-left: 12px;
`;
