import { Box } from 'common';
import styled from 'styled-components';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: max-content;
`;

export const Text = styled.p`
  padding: 10px 0;
`;

export const Images = styled.img`
  width: calc(100% + 30px);
  margin: 0 -15px;
`;

export const Statistics = styled.ol`
  padding: 10px 0;
  border-bottom: 1px solid #fff;
  color: #fff;
  display: flex;
  > li:not(:last-child):after {
    content: '|';
    margin: 0 5px;
  }
  font-size: 15px;
`;

export const ActionPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 0 10px 0;
`;

export const ActionButton = styled.button`
  padding: 5px;
  color: #fff;
  transition: 0.2s;
  border-radius: 8px;
  :hover {
    color: #33b5e5;
  }
  & + & {
    margin-left: 5px;
  }
`;

export const CreateComment = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 10px;
`;
