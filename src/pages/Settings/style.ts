import { Box } from 'common';
import { COLOR } from 'const';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;
`;

export const EditWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 15px;
  margin-bottom: 20px;
`;

export const User = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
