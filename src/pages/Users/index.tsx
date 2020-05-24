import { Layout } from 'common';
import { SIZE } from 'const';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { ContactStore, MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Input, Loader } from 'ui-kit';
import Item from './Item';
import { SearchPanel, UserList } from './style';

@observer
export default class PageUsers extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private contactStore: ContactStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.USERS);
  }

  @computed private get userList(): JSX.Element | Array<JSX.Element> {
    const users = this.contactStore.userList.get();
    if (this.contactStore.userList.busy) return <Loader fullScreen size={SIZE.EXTRA_LARGE} />;
    return users.map((user, index) => <Item user={user} key={index} />);
  }

  render(): JSX.Element {
    return (
      <Layout>
        <SearchPanel>
          <Input placeholder="Search" type="search" />
          <Button>Search</Button>
        </SearchPanel>
        <UserList>{this.userList}</UserList>
      </Layout>
    );
  }
}
