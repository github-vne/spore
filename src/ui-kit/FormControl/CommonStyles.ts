import { COLOR, STYLED } from 'const';
import styled, { css } from 'styled-components';

interface StyledProps {
  hasInnerBtn?: boolean;
  hasIcon?: boolean;
  styled?: STYLED;
}

export const styleEl = css`
  width: 100%;
  font-size: 16px;
  outline: 0;
  display: block;
  box-sizing: border-box;
  padding: 8px 10px;
  min-height: 40px;
  transition: 0.3s ease-in-out;
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
  ${({ styled }: StyledProps) => {
    switch (styled) {
      case STYLED.PRIMARY:
        return css`
          border-bottom: 2px solid ${COLOR.BLUE_20};
        `;
      default:
        return css`
          border: 2px solid ${COLOR.BLUE_20};
          border-radius: 5px;
        `;
    }
  }}
  :focus {
    border-color: ${COLOR.BLUE_60};
  }
  :disabled {
    opacity: 0.6;
  }
  ${({ hasIcon }: StyledProps) =>
    hasIcon &&
    css`
      padding-left: 39px;
    `};
  ${({ hasInnerBtn }: StyledProps) =>
    hasInnerBtn &&
    css`
      padding-right: 39px;
    `}
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  color: ${({ focus }: { focus: boolean }) => (focus ? COLOR.BLUE_60 : 'inherit')};
  transition: color 0.3s ease-in-out;
`;
