import { COLOR, RGBA } from 'const';
import styled from 'styled-components';

export const Block = styled.div`
  display: grid;
  gap: 11px;
  padding: 8px 16px;
  grid-template-columns: auto 1fr;
  align-items: center;
  border: 1px solid ${COLOR.GRAY_80};
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: ${RGBA.BLUE_HOVER};
    border-color: ${COLOR.BLUE_60};
    color: ${COLOR.BLUE_60};
  }
`;
