import { COLOR, GRADIENT, STYLED } from 'const';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import RawSvg from 'ui-kit/RawSvg';

const BtnStyle = css`
  font-size: 13px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  color: ${COLOR.WHITE};
  font-size: 1em;
  min-width: 80px;
  padding: 0.6em 1.5em;
  transition: 0.2;
  ${({ styled }: { styled: STYLED }) => {
    let _backgound: string;
    switch (styled) {
      case STYLED.PRIMARY:
        _backgound = GRADIENT.PRIMARY;
        break;
      case STYLED.SECONDARY:
        _backgound = GRADIENT.SECONDARY;
        break;
      case STYLED.TERTIARY:
        _backgound = GRADIENT.TERTIARY;
        break;
      default:
        _backgound = GRADIENT.DEFAULT;
        break;
    }
    return css`
      background: ${_backgound};
    `;
  }}
`;

export const ButtonRawSvg = styled(RawSvg)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  ${BtnStyle}
  &:disabled {
    opacity: 0.65;
  }
`;

export const BtnLink = styled(Link)`
  ${BtnStyle}
`;
