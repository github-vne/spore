import { COLOR } from 'const';
import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
  grid-gap: 5px;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 15px 15px 5px;
  border: 1px solid ${COLOR.BLUE_60};
  border-radius: 5px;
  margin: 5px 0 20px;
  > * {
    margin-right: 15px;
    margin-bottom: 10px;
  }
`;
