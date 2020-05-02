import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 200px;
  grid-gap: 20px;
`;

export const Panel = styled.div`
  height: calc(100vh - 65px);
  position: sticky;
  top: 0;
`;

export const PostList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: max-content;
`;
