import { Box } from 'common';
import { COLOR, RGBA } from 'const';
import styled, { css } from 'styled-components';
import { Textarea as _Textarea } from 'ui-kit';

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 45% 1fr;
  height: 100%;
`;

export const TaskSettings = styled.div`
  display: grid;
  height: 100%;
  gap: 20px;
  grid-template-rows: auto 1fr;
`;

export const Textarea = styled(_Textarea)`
  textarea {
    max-height: 92px;
  }
`;

export const TasksCard = styled(Box)`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  overflow: hidden;
`;

export const Title = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
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
    active &&
    css`
      color: ${COLOR.BLUE_60};
      border-color: ${COLOR.BLUE_60};
    `}
  :hover {
    border-color: ${COLOR.BLUE_60};
  }
`;

export const TabContent = styled.ul`
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
  padding: 12px 5px 12px 10px;
  border: 1px solid ${COLOR.GRAY_80};
  border-radius: 4px;
  word-break: break-all;
  cursor: pointer;
  &:hover {
    background: ${RGBA.BLUE_HOVER};
    border-color: ${COLOR.BLUE_60};
  }
`;

export const TaskActions = styled.div`
  display: flex;
`;

export const ActionBtn = styled.button`
  width: 20px;
  margin-right: 10px;
  color: ${COLOR.BLUE_60};
  &:hover {
    color: ${COLOR.WHITE};
  }
`;
