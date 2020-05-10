import { Box } from 'common';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

export const Wrapper = styled.div`
  display: flex;
`;

export const ProgressPages = styled(Box)`
  display: flex;
  flex: none;
  flex-direction: column;
  max-width: 400px;
  margin-right: 20px;
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

export const Graph = styled(Box)`
  width: 100%;
`;
