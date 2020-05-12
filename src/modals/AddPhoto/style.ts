import { COLOR, STYLED } from 'const';
import styled from 'styled-components';
import { Button, Input as _Input, Textarea as _Textarea } from 'ui-kit';

export const Content = styled.div`
  height: 400px;
  padding: 50px;
  border: 1px solid #333;
`;

export const Preview = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DemoImg = styled.img`
  height: 100%;
`;
