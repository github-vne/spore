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
import { FilterPanel, Settings, SortBtn, Status, UserInfo, UserItem, UserList } from './style';

enum ViewCard {
  SMALL = 'small',
  LARGE = 'large'
}

@observer
export default class PageUsers extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private contactStore: ContactStore;

  @observable private filter: string;
  @observable private viewCard: ViewCard = ViewCard.SMALL;

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

  @action.bound
  private switchView(view: ViewCard): void {
    if (this.viewCard === view) return;
    this.viewCard = view;
  }

  @computed private get userList(): JSX.Element | Array<JSX.Element> {
    let users = this.contactStore.userList.get();
    if (this.contactStore.userList.busy) return <Loader fullScreen size={SIZE.EXTRA_LARGE} />;

    if (!users.length) return <Status>Список пользователей пуст</Status>;

    if (this.filter) users = users.filter(user => user.fullName.toLowerCase().includes(this.filter.toLowerCase()));

    if (!users.length) return <Status>Не найдено</Status>;

    if (this.viewCard === ViewCard.LARGE) return users.map(user => <UserInfo user={user} key={user.id} />);

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
            {Object.values(ViewCard).map(view => (
              <SortBtn onClick={this.switchView.bind(this, view)} key={view} active={view === this.viewCard}>
                <RawSvg icon={`users/view_${view}`} />
              </SortBtn>
            ))}
          </FilterPanel>
          <Button>Фильтры (В разработке)</Button>
        </Settings>
        <UserList>{this.userList}</UserList>
      </Layout>
    );
  }
}
