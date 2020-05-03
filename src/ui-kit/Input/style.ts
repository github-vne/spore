import { COLOR } from 'const';
import styled, { css } from 'styled-components';
import { styleEl } from 'ui-kit/FormControl';
import RawSvg from 'ui-kit/RawSvg';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
`;

export const InputBox = styled.div`
  width: 100%;
  position: relative;
  color: ${COLOR.WHITE};
`;

interface InputStyledProps {
  hasInnerBtn?: boolean;
  hasIcon?: boolean;
}

export const Input = styled.input`
  ${styleEl}
  ${({ hasIcon }: InputStyledProps) =>
    hasIcon &&
    css`
      padding-left: 39px;
    `};
  ${({ hasInnerBtn }: InputStyledProps) =>
    hasInnerBtn &&
    css`
      padding-right: 39px;
    `}
`;

const Icon = css`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-12px);
`;

export const InputIcon = styled(RawSvg)`
  ${Icon};
  transition: 0.3s ease-in-out;
  left: 10px;
  color: ${COLOR.BLUE_20};
  ${({ focus }: { focus: boolean }) =>
    focus &&
    css`
      color: ${COLOR.BLUE_60};
    `}
`;

export const InnerBtn = styled.button.attrs({ type: 'button' })`
  ${Icon};
  right: 10px;
  color: ${COLOR.BLUE_20};
  &:hover {
    color: ${COLOR.BLUE_60};
  }
`;
