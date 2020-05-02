import styled from 'styled-components';

export const ChatContainer = styled.div`
  height: calc(100vh - 115px);
  display: grid;
  grid-template-columns: 1fr 250px;
`;

export const UserList = styled.ul`
  height: 100%;
  overflow-y: auto;
  border: 1px solid #fff;
  padding: 0 10px;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const ChatInput = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #fff;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  padding: 20px;
  border: 1px solid #fff;
`;

export const Users = styled.div`
  height: 100%;
  overflow: hidden;
  display: grid;
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: auto calc(100vh - 245px);
`;

export const MessageList = styled.ol`
  border: 1px solid #fff;
  overflow-y: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export const Message = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Test = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: auto;
`;
