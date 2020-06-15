import { COLOR, hexToRgba, STYLED } from 'const';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import RawSvg from 'ui-kit/RawSvg';

const BtnStyle = css`
  position: relative;
  font-size: 13px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 1em;
  min-width: 80px;
  padding: 0.6em 1.5em;
  transition: 0.2s;
  ${({ styled }: { styled: STYLED }) => {
    let _color: string;
    switch (styled) {
      case STYLED.PRIMARY:
        _color = COLOR.GREEN_80;
        break;
      case STYLED.SECONDARY:
        _color = COLOR.PINK_100;
        break;
      case STYLED.TERTIARY:
        _color = COLOR.PINK_10;
        break;
      default:
        _color = COLOR.BLUE_40;
        break;
    }
    return css`
      color: ${_color};
      border: 1px solid ${_color};
      &:hover {
        background: ${hexToRgba(_color, 0.2)};
      }
    `;
  }};
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

export const BtnHref = styled.a`
  ${BtnStyle}
`;
