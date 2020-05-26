import { Box } from 'common';
import { COLOR } from 'const';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

export const Container = styled.div`
  display: flex;
`;

export const Settings = styled(Box)`
  width: 100%;
`;

export const EditProfile = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 15px;
  margin-bottom: 20px;
`;

export const User = styled(Box)`
  position: relative;
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
  width: 35px;
  color: ${COLOR.WHITE};
`;

export const UploadPhoto = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
