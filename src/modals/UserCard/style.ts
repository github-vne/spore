import styled from 'styled-components';
import { Avatar } from 'ui-kit';

export const Content = styled.div`
  min-height: 200px;
  text-align: center;
`;

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background: green;
  margin-bottom: 50px;
`;

export const UserAvatar = styled(Avatar)`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50px);
`;
