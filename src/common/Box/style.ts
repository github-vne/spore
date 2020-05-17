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

export const Footer = styled.footer`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  * + * {
    margin-left: 10px;
  }
`;
