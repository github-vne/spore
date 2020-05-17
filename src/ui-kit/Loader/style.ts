import { COLOR, SIZE } from 'const';
import styled, { css } from 'styled-components';
import RawSvg from 'ui-kit/RawSvg';
import { ILoaderProps } from './types';

export const Loader = styled(RawSvg)`
  ${(props: ILoaderProps) => {
    let size;
    switch (props.size) {
      case SIZE.EXTRA_SMALL:
        size = 10;
        break;
      case SIZE.SMALL:
        size = 20;
        break;
      case SIZE.LARGE:
        size = 45;
        break;
      case SIZE.EXTRA_LARGE:
        size = 64;
        break;
      default:
        size = 32;
    }
    return css`
      width: ${size}px;
      height: ${size}px;
    `;
  }};
  color: ${({ inverseColor }: ILoaderProps) => (inverseColor ? COLOR.BLUE_10 : COLOR.WHITE)};
  & > svg {
    width: 100%;
  }
`;

export const FullScreen = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
