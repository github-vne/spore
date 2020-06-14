import { COLOR } from 'const';
import styled from 'styled-components';
import RawSvg from 'ui-kit/RawSvg';
import { ToastType } from './types';

const ToastBackground = {
  [ToastType.INFO]: COLOR.BLUE_40,
  [ToastType.ERROR]: COLOR.PINK_100,
  [ToastType.SUCCESS]: COLOR.GREEN_80,
  [ToastType.WARNING]: COLOR.PINK_10
};

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
  background: ${({ type }: { type: ToastType }) => (type ? ToastBackground[type] : ToastBackground[ToastType.INFO])};
  color: ${COLOR.WHITE};
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 10px 15px 15px;
  position: relative;
  width: 500px;
  transition: 0.3s;
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
  align-items: flex-end;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const CloseBtn = styled.button`
  color: ${COLOR.WHITE};
  width: 24px;
  height: 24px;
  flex: none;
  cursor: pointer;
  margin: 0 0 auto auto;
`;

export const Icon = styled(RawSvg)`
  width: 24px;
  margin-right: 5px;
`;
