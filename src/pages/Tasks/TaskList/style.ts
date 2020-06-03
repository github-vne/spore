import { Box } from 'common';
import { COLOR, RGBA } from 'const';
import styled, { css } from 'styled-components';
import { Textarea as _Textarea } from 'ui-kit';

export const TasksList = styled(Box)`
  display: grid;
  grid-template-rows: repeat(2, auto) 1fr;
  height: 100%;
  overflow: hidden;
`;

export const TabPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 15px;
`;

export const TabItem = styled.button`
  text-align: center;
  color: ${COLOR.WHITE};
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid ${COLOR.WHITE};
  ${({ active }: { active: boolean }) =>
    active
      ? css`
          color: ${COLOR.BLUE_60};
          border-color: ${COLOR.BLUE_60};
        `
      : css`
          :hover {
            color: ${COLOR.GRAY_80};
            border-color: ${COLOR.GRAY_80};
          }
        `}
`;

export const List = styled.ul`
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Task = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  margin-bottom: 10px;
  min-height: 56px;
  padding: 5px 10px;
  border: 1px solid ${COLOR.GRAY_80};
  border-radius: 4px;
  word-break: break-all;
  cursor: pointer;
  &:hover {
    background: ${RGBA.BLUE_HOVER};
    border-color: ${COLOR.BLUE_60};
  }
`;

export const Textarea = styled(_Textarea)`
  textarea {
    max-height: 74px;
    padding: 12px 0;
    border-color: ${COLOR.WHITE};
  }
`;

export const TaskActions = styled.div`
  display: flex;
`;

export const ActionBtn = styled.button`
  width: 20px;
  margin-left: 10px;
  color: ${COLOR.BLUE_60};
  &:hover {
    color: ${COLOR.WHITE};
  }
`;
