import { COLOR, SHADOW } from 'const';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border-radius: 5px;
  background: ${COLOR.BLUE_10};
  box-shadow: ${SHADOW.BOX};
  padding: 15px;
`;

export const Title = styled.h4`
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Footer = styled.div`
  font-weight: bold;
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
`;
