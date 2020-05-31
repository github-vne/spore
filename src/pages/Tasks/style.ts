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
