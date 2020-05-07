import { COLOR } from 'const';
import styled from 'styled-components';

export const Word = styled.h5`
  text-align: center;
  font-size: 26px;
  padding: 6px 0;
  background: ${COLOR.GRAY_80};
  margin-bottom: 20px;
  color: ${COLOR.WHITE};
`;

export const Definition = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
`;
