import { Layout } from 'common';
import { SIZE, STYLED } from 'const';
import { PageType } from 'const/pages';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import React, { Fragment, RefObject } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Input } from 'ui-kit';
import ChatUser from './ChatUser';
import { exampleMessageList, userList } from './example';
import { Column, Container, Info, List, Message, MessageList, SendButton, Textarea, TextareaBox } from './style';

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
              {exampleMessageList.map((message, index) => (
                <Message type={message.type} key={index}>
                  <p>{message.text}</p>
                </Message>
              ))}
            </MessageList>
            <TextareaBox>
              <Textarea
                styled={STYLED.PRIMARY}
                placeholder="Введите сообщение..."
                innerBtn={{ icon: <SendButton icon="common/send" hasMessage />, onClick: this.sendMessage }}
              />
            </TextareaBox>
          </Column>
          <Column>
            <Info>
              <Input type="search" styled={STYLED.PRIMARY} />
            </Info>
            <List>
              {userList.map((user, index) => (
                <Fragment key={index}>
                  <ChatUser selected={index === 0} user={user} />
                </Fragment>
              ))}
            </List>
          </Column>
        </Container>
      </Layout>
    );
  }
}
