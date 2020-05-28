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
  background: #67b26f; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #67b26f, #4ca2cd); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #67b26f,
    #4ca2cd
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const UserAvatar = styled(Avatar)`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50px);
`;
