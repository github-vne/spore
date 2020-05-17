import { COLOR, STYLED } from 'const';
import styled, { css } from 'styled-components';
import RawSvg from 'ui-kit/RawSvg';

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

export const Wrapper = styled.div`
  width: 100%;
  display: block;
  color: ${COLOR.WHITE};
`;

export const Relative = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  color: ${({ focus }: { focus: boolean }) => (focus ? COLOR.BLUE_60 : 'inherit')};
  transition: color 0.3s ease-in-out;
`;

const Badge = css`
  position: absolute;
  width: 24px;
  height: 24px;
  bottom: 8px;
  transition: 0.3s ease-in-out;
  color: ${COLOR.BLUE_20};
`;

export const Icon = styled(RawSvg)`
  ${Badge};
  left: 10px;
  ${({ focus }: { focus: boolean }) =>
    focus &&
    css`
      color: ${COLOR.BLUE_60};
    `}
`;

export const InnerBtn = styled.button.attrs({ type: 'button' })`
  ${Badge};
  right: 10px;
  &:hover {
    color: ${COLOR.BLUE_60};
  }
`;
