import { Box } from 'common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
`;

export const ProgressPages = styled(Box)`
  display: flex;
  flex: none;
  flex-direction: column;
  width: 300px;
  margin-right: 20px;
`;

export const PagesItem = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 25px 1fr;
  align-items: center;
  padding: 10px 0;
`;

export const Graph = styled(Box)`
  width: 100%;
`;
