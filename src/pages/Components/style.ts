import { COLOR } from 'const';
import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
  grid-gap: 5px;
  align-items: flex-end;
  padding: 15px;
  border: 1px solid ${COLOR.WHITE};
  border-radius: 5px;
  margin: 5px 0 20px;
  > *:not(:last-child) {
    margin-right: 15px;
  }
`;
