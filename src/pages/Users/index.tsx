import { Layout } from 'common';
import { SIZE } from 'const';
import { PageType } from 'const/pages';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { UserCard } from 'modals';
import { UserEntity } from 'models';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ContactStore, MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Button, Input, Loader, RawSvg } from 'ui-kit';
import { FilterPanel, Settings, SortBtn, Status, UserItem, UserList } from './style';

@observer
export default class PageUsers extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private contactStore: ContactStore;

  @observable private filter: string;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.USERS);
  }

  @action.bound
  private openModal = (user: UserEntity): void => {
    UserCard.openModal({ user });
  };

  @action.bound
  private onFilterChange = (name: string, value: string): void => {
    this[name] = value;
  };

  @computed private get userList(): JSX.Element | Array<JSX.Element> {
    let users = this.contactStore.userList.get();
    if (this.contactStore.userList.busy) return <Loader fullScreen size={SIZE.EXTRA_LARGE} />;

    if (!users.length) return <Status>Список пользователей пуст</Status>;

    if (this.filter) users = users.filter(user => user.fullName.toLowerCase().includes(this.filter.toLowerCase()));

    if (!users.length) return <Status>Не найдено</Status>;

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
        <Input placeholder="Поиск пользователей" type="search" name="filter" onChange={this.onFilterChange} />
        <Settings>
          <FilterPanel>
            <SortBtn>
              <RawSvg icon="users/sort_1" />
            </SortBtn>
            <SortBtn>
              <RawSvg icon="users/sort_2" />
            </SortBtn>
          </FilterPanel>
          <Button>Фильтры (В разработке)</Button>
        </Settings>
        <UserList>{this.userList}</UserList>
      </Layout>
    );
  }
}
