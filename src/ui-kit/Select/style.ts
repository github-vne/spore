import { COLOR } from 'const';
import styled, { css } from 'styled-components';
import { RawSvg } from 'ui-kit';

const Item = css`
  height: 40px;
  width: 100%;
  color: ${COLOR.WHITE};
  text-align: left;
  padding-left: 20px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: block;
`;

export const Select = styled.button`
  ${Item};
  border: 2px solid ${COLOR.BLUE_20};
  border-radius: 5px;
`;

export const List = styled.ul`
  z-index: 2;
  position: absolute;
  top: 45px;
  height: auto;
  max-height: 150px;
  overflow: auto;
  width: 100%;
  background: ${COLOR.GRAY_80};
`;

export const Option = styled.li`
  ${Item};
  display: flex;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #fff;
  }
`;

export const Arrow = styled(RawSvg)`
  position: absolute;
  width: 16px;
  right: 10px;
  top: 12px;
  transition: 0.3s;
  ${({ opened }: { opened: boolean }) =>
    opened &&
    css`
      transform: rotate(180deg);
    `};
`;
