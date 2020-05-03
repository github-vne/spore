import { COLOR } from 'const';
import styled from 'styled-components';
import { styleEl } from 'ui-kit/FormControl';

export const Textarea = styled.textarea`
  ${styleEl};
`;

export const TextareaBox = styled.div`
  width: 100%;
  position: relative;
  color: ${COLOR.WHITE};
`;

export const InnerBtn = styled.button.attrs({ type: 'button' })`
  position: absolute;
  bottom: 8px;
  right: 10px;
  width: 24px;
  height: 24px;

  color: #617b95;
  &:hover {
    color: #2b5278;
  }
`;
