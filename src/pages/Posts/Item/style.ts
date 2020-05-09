import { Box } from 'common';
import { COLOR } from 'const';
import styled from 'styled-components';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: max-content;
`;

export const Owner = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h5`
  font-size: 22px;
`;

export const Images = styled.img`
  width: calc(100% + 30px);
  margin: 10px -15px;
`;

export const ActionPanel = styled.div`
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid ${COLOR.WHITE};
  color: ${COLOR.WHITE};
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
`;

export const ActionButton = styled.button`
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  :hover {
    color: #33b5e5;
  }
  & + & {
    margin-left: 15px;
  }
  > span {
    margin-left: 5px;
  }
`;

export const CreateComment = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 10px;
`;
