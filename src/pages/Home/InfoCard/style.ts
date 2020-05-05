import { COLOR, SHADOW } from 'const';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

export const InfoCard = styled.div`
  position: relative;
  border-radius: 5px;
  background: ${COLOR.BLUE_10};
  box-shadow: ${SHADOW.BOX};
  padding: 10px 15px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Title = styled.h4`
  font-size: 13px;
  text-transform: uppercase;
  color: ${COLOR.GRAY_80};
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 5px;
`;

export const InfoStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: ${({ positive }: { positive: boolean }) => (positive ? COLOR.GREEN_80 : COLOR.RED_100)};
`;

export const Status = styled.span``;

export const StatusIcon = styled(RawSvg)`
  width: 13px;
  transform: rotate(90deg);
  margin-right: 3px;
`;

export const LastUpload = styled.p`
  color: ${COLOR.WHITE};
`;
