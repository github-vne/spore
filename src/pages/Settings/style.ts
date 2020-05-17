import { Box } from 'common';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

export const Container = styled.div`
  display: flex;
`;

export const UserInfo = styled(Box)`
  width: 100%;
`;

export const EditProfile = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 15px;
  margin-bottom: 20px;
`;

export const User = styled(Box)`
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin-left: 20px;
  padding: 35px 15px;
`;

export const UploadSvg = styled(RawSvg)`
  width: 50px;
`;

export const UploadPhoto = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.6);
  transition: 0.2s;
  opacity: 0;
`;

export const UserImage = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  :hover {
    ${UploadPhoto} {
      opacity: 1;
    }
  }
`;

export const UserName = styled.h3`
  margin: 20px 0 10px;
`;

export const UserDescription = styled.p`
  margin-top: 10px;
`;
