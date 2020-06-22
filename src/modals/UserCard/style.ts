import { COLOR } from 'const';
import styled from 'styled-components';
import { Avatar } from 'ui-kit';

export const Content = styled.div`
  min-height: 200px;
  padding: 30px 0;
  text-align: center;
  position: relative;
`;

export const Background = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(to right, ${COLOR.GREEN_80}, ${COLOR.BLUE_80});
`;

export const UserAvatar = styled(Avatar)`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50px);
`;
