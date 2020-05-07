import { Box } from 'common';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

export const CardPanel = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const ProgressPages = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 33%;
`;

export const PagesItem = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 40px 1fr;
  align-items: center;
  padding: 10px 0;
`;

export const PageIcon = styled(RawSvg)`
  width: 100%;
`;

export const ProgressBar = styled.progress`
  width: 100%;
  height: 4px;
  border-radius: 8px;
  ::-webkit-progress-bar {
    background-color: #e6e9ec;
    border-radius: 8px;
  }
  ::-webkit-progress-value {
    background-color: #11cdef;
    border-radius: 8px;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const Graph = styled(Box)`
  width: 70%;
  margin-left: 3%;
`;
