import { COLOR } from 'const';
import styled, { css } from 'styled-components';
import { RawSvg } from 'ui-kit';

const Item = css`
  height: 40px;
  width: 100%;
  color: ${COLOR.WHITE};
  text-align: left;
  padding: 0 36px 0 20px;
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
  font-size: 16px;
`;

export const List = styled.ul`
  z-index: 2;
  border-radius: 5px;
  position: absolute;
  top: 45px;
  height: auto;
  max-height: 170px;
  overflow: auto;
  width: 100%;
  background: ${COLOR.BLUE_10};
`;

export const Option = styled.li`
  ${Item};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid ${COLOR.WHITE};
  }
  &:hover {
    color: ${COLOR.BLUE_60};
    background: ${COLOR.WHITE};
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
