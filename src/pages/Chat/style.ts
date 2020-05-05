import styled, { css } from 'styled-components';
import { RawSvg, Textarea as _Textarea } from 'ui-kit';
import { MessageType } from './types';

export const Column = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  overflow: auto;
`;

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 250px;
`;

export const UserColumn = styled.div`
  ${Column};
`;

export const MessageColumn = styled.div`
  ${Column};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  min-height: 55px;
  border: 1px solid #fff;
`;

export const UserList = styled.ul`
  height: 100%;
  overflow-y: auto;
  border: 1px solid #fff;
`;

export const TextareaBox = styled.div`
  padding: 5px;
  background: #1e1e24;
  width: 100%;
  border: 1px solid #fff;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageList = styled.ol`
  border: 1px solid #fff;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px;
`;

const MessageBefore = css`
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    border: solid;
    border-color: transparent;
  }
`;

export const Message = styled.li`
  position: relative;
  width: fit-content;
  max-width: 500px;
  padding: 8px 10px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  margin-bottom: 10px;
  border-radius: 8px;
  ${({ type }: { type?: MessageType }) => {
    switch (type) {
      case MessageType.MY:
        return css`
          align-self: flex-end;
          background: #2b5278;
          ${MessageBefore};
          &:before {
            right: -9px;
            border-width: 10px 0px 0px 15px;
            border-left-color: #2b5278;
          }
        `;
      case MessageType.CONTACT:
        return css`
          align-self: flex-start;
          background: #617b95;
          ${MessageBefore};
          &:before {
            left: -9px;
            border-width: 10px 15px 0px 0px;
            border-right-color: #617b95;
          }
        `;
      case MessageType.INFO:
        return css`
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 15px;
          align-self: center;
          background: #617b95;
        `;
      default:
        break;
    }
  }};
`;

export const Test = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: auto;
`;

export const SendButton = styled(RawSvg)`
  color: ${({ hasMessage }: { hasMessage?: boolean }) => (hasMessage ? '#2b5278' : '#617b95')};
`;

export const Textarea = styled(_Textarea)`
  textarea {
    max-height: 160px;
  }
`;
