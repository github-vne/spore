import { Layout } from 'common';
import { observer } from 'mobx-react';
import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import ChatUser from './ChatUser';
import { Chat, ChatContainer, ChatInput, Info, Message, MessageList, Test, UserList, Users } from './style';

@observer
export default class PageChat extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.CHAT);
  }

  render(): JSX.Element {
    return (
      <Layout>
        <ChatContainer>
          <Chat>
            <Info>TITLE</Info>
            <MessageList>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(el => (
                <Fragment key={el}>
                  <Message>Message #{el}</Message>
                  <Message>Message #{el}</Message>
                  <Message>Message #{el}</Message>
                </Fragment>
              ))}
            </MessageList>
            <ChatInput>Input</ChatInput>
          </Chat>
          <Users>
            <Info>TITLE</Info>
            <UserList>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(el => (
                <Fragment key={el}>
                  <ChatUser />
                  <ChatUser />
                </Fragment>
              ))}
            </UserList>
          </Users>
        </ChatContainer>
      </Layout>
    );
  }
}
