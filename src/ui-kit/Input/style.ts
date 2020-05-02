import { COLOR } from 'const';
import styled from 'styled-components';
import { styleEl } from 'ui-kit/FormControl';
import RawSvg from 'ui-kit/RawSvg';

export const InputIcon = styled(RawSvg)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-12px);
  right: 18px;
  color: ${COLOR.BLUE_20};
`;

export const Input = styled.input`
  ${styleEl}
`;

export const InputBox = styled.div`
  position: relative;
  color: ${COLOR.WHITE};
`;
