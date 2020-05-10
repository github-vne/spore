import { COLOR } from 'const';
import styled, { css } from 'styled-components';
import { RawSvg } from 'ui-kit';

export const Wrapper = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
  > div {
    min-height: 110px;
  }
`;

export const Title = styled.h4`
  font-size: 14px;
  text-transform: uppercase;
  color: ${COLOR.GRAY_80};
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 5px;
  background: #fff;
  border-radius: 50%;
`;

export const Status = styled.span`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Percent = styled.div`
  ${({ positive }: { positive: boolean }) =>
    positive
      ? css`
          color: ${COLOR.GREEN_80};
          ${StatusIcon} {
            transform: rotate(90deg);
          }
        `
      : css`
          color: ${COLOR.RED_100};
          ${StatusIcon} {
            transform: rotate(-90deg);
          }
        `};
`;

export const StatusIcon = styled(RawSvg)`
  width: 13px;
  margin-right: 3px;
`;
