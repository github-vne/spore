import { COLOR } from 'const';
import styled from 'styled-components';

export default styled.progress`
  width: 100%;
  height: 4px;
  border-radius: 8px;
  ::-webkit-progress-bar {
    background-color: ${COLOR.WHITE};
    border-radius: 8px;
  }
  ::-webkit-progress-value {
    background-color: ${COLOR.BLUE_60};
    border-radius: 8px;
  }
`;
