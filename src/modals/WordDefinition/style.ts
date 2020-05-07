import { COLOR } from 'const';
import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Word = styled.h5`
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
