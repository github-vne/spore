import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr 200px;
  grid-gap: 20px;
`;

export const Panel = styled.div`
  height: calc(100vh - 65px);
  position: sticky;
  top: 0;
`;
