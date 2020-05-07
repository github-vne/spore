import styled from 'styled-components';

export const Main = styled.div`
  height: 100vh;
  background: #1e1e2f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  bottom: 0;
  width: 100%;
  background-image: url(${require('./image/line.svg')});
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 1100px 160px;
  height: 0;
  padding: 0;
  padding-bottom: 100px;
`;
