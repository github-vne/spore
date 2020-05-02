import { COLOR, SIZE } from 'const';
import styled, { css } from 'styled-components';
import { AvatarProps } from './types';

export const Avatar = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${COLOR.WHITE};
  font-weight: bold;
  background: ${COLOR.BLUE_50};
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid ${COLOR.WHITE};
  text-transform: uppercase;
  ${({ size }: AvatarProps) => {
    let _size;
    switch (size) {
      case SIZE.EXTRA_SMALL:
        _size = 30;
        break;
      case SIZE.SMALL:
        _size = 40;
        break;
      case SIZE.MIDDLE:
        _size = 60;
        break;
      case SIZE.EXTRA_LARGE:
        _size = 100;
        break;
      default:
        _size = 80;
    }
    return css`
      height: ${_size}px;
      width: ${_size}px;
      svg {
        width: ${_size - 5}px;
      }
    `;
  }};
`;