import { Box } from 'common';
import { COLOR } from 'const';
import styled, { css } from 'styled-components';

const OverflowText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const List = styled.div`
  column-width: 300px;
  column-gap: 15px;
`;

export const Post = styled(Box)`
  width: 100%;
  display: inline-block;
  margin-bottom: 15px;
`;

export const Owner = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h5`
  ${OverflowText};
  font-size: 22px;
  margin-bottom: 10px;
`;

export const Images = styled.img`
  width: calc(100% + 30px);
  margin: 0 -15px 10px -15px;
`;

export const Text = styled.pre`
  ${OverflowText};
  -webkit-line-clamp: 5;
`;

export const ActionPanel = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid ${COLOR.WHITE};
  color: ${COLOR.WHITE};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
`;

export const Date = styled.span`
  color: ${COLOR.GREEN_80};
`;

export const ActionButton = styled.button`
  cursor: pointer;
  color: ${({ active }: { active: boolean }) => (active ? COLOR.BLUE_60 : COLOR.WHITE)};
  display: flex;
  align-items: center;
  :hover {
    opacity: 0.7;
  }
  > span {
    margin-left: 5px;
  }
`;
