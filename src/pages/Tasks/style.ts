import { Box } from 'common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 50% 1fr;
`;

export const CreateTask = styled.div``;

export const TasksCard = styled(Box)`
  overflow: auto;
  max-height: 100vh;
`;

export const TabLine = styled.div``;
