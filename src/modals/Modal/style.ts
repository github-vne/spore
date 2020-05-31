import { COLOR } from 'const';
import styled, { css } from 'styled-components';
import { ModalDefinition, WrapperProps } from './types';

export const ModalWrapper = styled.div`
  visibility: hidden;
  overflow: hidden;
  position: fixed;
  padding: 15px;
  left: 9999px;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, visibility 0s 0.3s linear;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  ${(props: WrapperProps) =>
    props.backdropVisible &&
    css`
      top: 0;
      left: 0;
    `};
  ${(props: WrapperProps) =>
    props.showModal &&
    css`
      visibility: visible;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    `};
`;

export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  user-select: none;
  opacity: 0.4;
  background: ${COLOR.BLACK};
  transform: translateZ(-1px);

  ${(props: WrapperProps) =>
    props.backdropVisible &&
    css`
      position: fixed;
    `};
`;

export const ModalInner = styled.div`
  overflow: auto;
  background: ${COLOR.WHITE};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  min-width: 320px;
  position: relative;
  transition: transform 0.3s ease-in-out;
  ${(props: ModalDefinition) =>
    props.fullHeight
      ? css`
          height: 100vh;
        `
      : css`
          max-height: calc(100% - 80px);
        `};

  ${(props: ModalDefinition) =>
    props.fullWidth
      ? css`
          width: 100vw;
        `
      : props.width &&
        css`
          width: ${props.width};
        `};
`;

export const ModalContent = styled.section`
  overflow-y: auto;
  height: auto;
  min-height: 100px;
  /* border-top: 1px solid transparent;
  border-bottom: 1px solid transparent; */
  transition: border-color 0.25s;
  color: ${COLOR.BLACK};
  ${({ scrollContent }: { scrollContent: boolean }) =>
    scrollContent &&
    css`
      border-color: ${COLOR.GRAY_80};
    `}
`;

export const Header = styled.header`
  min-height: 30px;
  font-size: 20px;
  padding: 15px 35px 10px 15px;
  color: ${COLOR.BLACK};
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 25px;
  height: 25px;
  transition: all 0.15s linear;
  border-radius: 0 4px 0 0;
  z-index: 10;
`;

export const Footer = styled.footer`
  padding: 15px 15px;
  color: ${COLOR.BLACK};
`;
