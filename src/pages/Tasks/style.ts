import styled from 'styled-components';
import { Textarea as _Textarea } from 'ui-kit';

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 45% 1fr;
  height: 100%;
`;

export const TaskSettings = styled.div`
  display: grid;
  height: 100%;
  gap: 20px;
  grid-template-rows: auto 1fr;
`;

export const Textarea = styled(_Textarea)`
  textarea {
    max-height: 92px;
  }
`;
