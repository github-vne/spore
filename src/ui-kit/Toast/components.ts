import { COLOR } from 'const';
import styled, { css } from 'styled-components';
import RawSvg from 'ui-kit/RawSvg';
import { ToastType } from './types';

export const ToastsList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  font-weight: normal;
  position: fixed;
  right: 20px;
  top: 10px;
  z-index: 2000;
`;

export const Toast = styled.div`
  animation: toastAnimation 0.3s;
  background: ${COLOR.WHITE};
  border-radius: 4px;
  color: ${COLOR.BLACK};
  margin-bottom: 12px;
  padding: 15px;
  position: relative;
  width: 500px;
  transition: 0.3s;
  ${({ removed }: { removed: boolean }) =>
    removed &&
    css`
      opacity: 0.5;
      transform: translateX(550px) translateZ(0);
    `}
  @keyframes toastAnimation {
    from {
      transform: translateX(500px) translateZ(0);
    }
    to {
      transform: translateX(0) translateZ(0);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  ${({ type }: { type: ToastType }) =>
    css`
      color: ${ToastIconColor[type]};
    `}
`;

export const CloseBtn = styled.button.attrs({ type: 'button' })`
  flex: none;
  cursor: pointer;
  margin: 0 0 auto auto;
`;

const ToastIconColor = {
  [ToastType.INFO]: `${COLOR.BLUE_50}`,
  [ToastType.ERROR]: `${COLOR.RED_100}`,
  [ToastType.SUCCESS]: `${COLOR.GREEN_100}`,
  [ToastType.WARNING]: `${COLOR.ORANGE_100}`
};

export const Icon = styled(RawSvg)`
  height: 24px;
  margin: 0 8px auto 0;
  width: 24px;
`;

export const Title = styled.h5`
  overflow: hidden;
`;

export const Content = styled.p`
  color: ${COLOR.GRAY_80};
`;
