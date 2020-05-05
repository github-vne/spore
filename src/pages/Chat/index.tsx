import { Layout } from 'common';
import { SIZE, STYLED } from 'const';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import React, { Fragment, RefObject } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Input } from 'ui-kit';
import ChatUser from './ChatUser';
import { Column, Container, Info, Message, MessageList, SendButton, Textarea, TextareaBox, UserList } from './style';
import { MessageType } from './types';

const messageList = [
  { type: MessageType.INFO, text: '100 лет назад' },
  { type: MessageType.CONTACT, text: 'Первое сообщение' },
  { type: MessageType.MY, text: 'Это моё тестовое сообщение, которое находится с правой стороны :3' },
  { type: MessageType.INFO, text: 'Сегодня' },
  { type: MessageType.CONTACT, text: 'Это будет супер длинное сообщение Это будет супер длинное сообщение' },
  { type: MessageType.CONTACT, text: 'Это будет супер длинное сообщение Это будет супер длинное сообщение' },
  { type: MessageType.CONTACT, text: 'Это будет супер длинное сообщение Это будет супер длинное сообщение' },
  { type: MessageType.CONTACT, text: 'Это будет супер длинное сообщение Это будет супер длинное сообщение' },
  { type: MessageType.INFO, text: '100 лет назад' },
  { type: MessageType.CONTACT, text: 'Первое сообщение' },
  { type: MessageType.MY, text: 'Это моё тестовое сообщение, которое находится с правой стороны :3' },
  { type: MessageType.INFO, text: 'Сегодня' },
  { type: MessageType.CONTACT, text: 'Это будет супер длинное сообщение Это будет супер длинное сообщение' },
  { type: MessageType.CONTACT, text: 'Первое сообщение' },
  { type: MessageType.MY, text: 'Это моё тестовое сообщение, которое находится с правой стороны :3' },
  { type: MessageType.INFO, text: 'Сегодня' },
  { type: MessageType.CONTACT, text: 'Это будет супер длинное сообщение Это будет супер длинное сообщение' }
];

@observer
export default class PageChat extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  private messageListRef: RefObject<HTMLOListElement> = React.createRef();

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.CHAT);
    this.scrollToBottom();
  }

  @action.bound
  private scrollToBottom(): void {
    this.messageListRef.current.scrollTo(0, this.messageListRef.current.scrollHeight);
  }

  @action.bound
  private sendMessage = (): void => {
    console.info('e');
    return null;
  };

  render(): JSX.Element {
    return (
      <Layout>
        <Container>
          <Column>
            <Info>
              <Avatar size={SIZE.SMALL} />
            </Info>
            <MessageList ref={this.messageListRef}>
              {messageList.map((message, index) => (
                <Message type={message.type} key={index}>
                  <p>{message.text}</p>
                </Message>
              ))}
            </MessageList>
            <TextareaBox>
              <Textarea
                styled={STYLED.PRIMARY}
                placeholder="Write a message..."
                innerBtn={{ icon: <SendButton icon="common/send" hasMessage />, onClick: this.sendMessage }}
              />
            </TextareaBox>
          </Column>
          <Column>
            <Info>
              <Input icon="common/search" styled={STYLED.PRIMARY} />
            </Info>
            <UserList>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(el => (
                <Fragment key={el}>
                  <ChatUser selected={el === 1} el={el} />
                </Fragment>
              ))}
            </UserList>
          </Column>
        </Container>
      </Layout>
    );
  }
}
