import { Layout } from 'common';
import { SIZE } from 'const';
import { action, computed } from 'mobx';
import { observer } from 'mobx-react';
import { UserCard } from 'modals';
import { UserEntity } from 'models';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { ContactStore, MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Button, Input, Loader } from 'ui-kit';
import { SearchPanel, UserItem, UserList } from './style';

@observer
export default class PageUsers extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private contactStore: ContactStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.USERS);
  }

  @action.bound
  private openModal = (user: UserEntity): void => {
    UserCard.openModal({ user });
  };

  @computed private get userList(): JSX.Element | Array<JSX.Element> {
    const users = this.contactStore.userList.get();
    if (this.contactStore.userList.busy) return <Loader fullScreen size={SIZE.EXTRA_LARGE} />;
    return users.map(user => (
      <UserItem onClick={this.openModal.bind(this, user)} key={user.id}>
        <Avatar image={user.photo} size={SIZE.SMALL} />
        <p>{user.fullName}</p>
      </UserItem>
    ));
  }

  render(): JSX.Element {
    return (
      <Layout>
        <SearchPanel>
          <Input placeholder="Поиск пользователей" type="search" />
          <Button>Найти (В разработке)</Button>
        </SearchPanel>
        <UserList>{this.userList}</UserList>
      </Layout>
    );
  }
}
