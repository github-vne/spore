import styled from 'styled-components';

export const SearchPanel = styled.div`
  display: flex;
`;

export const UserList = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 20px 0;
`;
