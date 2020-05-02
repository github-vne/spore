import { COLOR } from 'const';
import styled from 'styled-components';

export const Container = styled.aside`
  margin-top: 20px;
`;

export const Day = styled.h3`
  color: ${COLOR.BLUE_50};
  margin-bottom: 20px;
  font-weight: bold;
`;

export const List = styled.div``;

export const Item = styled.div`
  padding: 15px 10px;
  border-bottom: 1px solid #333;
  :first-child {
    border-top: 1px solid #333;
  }
  display: flex;
`;
