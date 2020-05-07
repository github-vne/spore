import { COLOR, SHADOW } from 'const';
import styled from 'styled-components';

export const Title = styled.h5`
  font-size: 22px;
  margin-bottom: 10px;
`;

export const Section = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Word = styled.div`
  position: relative;
  border-radius: 5px;
  background: ${COLOR.BLUE_10};
  padding: 15px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    box-shadow: ${SHADOW.BOX};
  }
`;
