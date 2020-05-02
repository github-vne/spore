import { COLOR } from 'const';
import styled, { css } from 'styled-components';

export const styleEl = css`
  width: 100%;
  font-size: 16px;
  border: 2px solid ${COLOR.BLUE_20};
  border-radius: 5px;
  outline: 0;
  display: block;
  box-sizing: border-box;
  padding: 10px;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  color: inherit;
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
  :-moz-placeholder,
  ::-moz-placeholder,
  :-ms-input-placeholder,
  ::-webkit-input-placeholder {
    color: hsla(0, 0%, 100%, 0.5);
  }
  :focus {
    border-color: ${COLOR.BLUE_60};
  }
  :disabled {
    opacity: 0.6;
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  color: ${({ focus }: { focus: boolean }) => (focus ? COLOR.BLUE_60 : 'inherit')};
  transition: color 0.3s ease-in-out;
`;
