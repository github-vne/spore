import styled, { css } from 'styled-components';

export const User = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;
  &:hover {
    background: rgba(111, 130, 149, 0.4);
  }
  ${({ selected }: { selected?: boolean }) =>
    selected &&
    css`
      background: #2b5278;
    `}
`;

export const Info = styled.div`
  margin-left: 12px;
`;
