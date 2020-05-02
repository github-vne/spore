import { Box } from 'common';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ChangePhoto = styled.div`
  display: grid;
  grid-gap: 10px;
  width: max-content;
`;

export const Profile = styled.div`
  width: 100%;
`;

export const EditProfile = styled(Box)`
  margin-bottom: 20px;
`;

export const User = styled(Box)`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: max-content;
  margin-left: 20px;
  align-items: center;
  padding: 35px 15px;
`;

export const UserName = styled.h3`
  margin: 20px 0 10px;
`;
export const UserPosition = styled.h3`
  margin-bottom: 20px;
`;
export const UserDescription = styled.p``;
